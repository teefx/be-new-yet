import { useState } from "react";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";
import { LiquidButton } from "./ui/liquid-button";

const API_BASE = `https://${projectId}.supabase.co/functions/v1/server`;

type Registration = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  ageRange: string;
  cityState: string;
  church: string;
  attendanceType: string;
  accommodation: string;
  source: string;
  prayerRequest: string;
  paid: boolean;
  paystackReference: string | null;
  createdAt: string;
  paidAt?: string;
};

const CSV_COLUMNS: { key: keyof Registration; label: string }[] = [
  { key: "createdAt", label: "Registered At" },
  { key: "fullName", label: "Full Name" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
  { key: "gender", label: "Gender" },
  { key: "ageRange", label: "Age Range" },
  { key: "cityState", label: "City / State" },
  { key: "church", label: "Church" },
  { key: "attendanceType", label: "Attendance" },
  { key: "accommodation", label: "Accommodation" },
  { key: "source", label: "Source" },
  { key: "prayerRequest", label: "Prayer Request" },
  { key: "paid", label: "Paid" },
  { key: "paystackReference", label: "Paystack Reference" },
  { key: "paidAt", label: "Paid At" },
];

function escapeCsv(value: unknown): string {
  if (value === null || value === undefined) return "";
  const str = String(value).replace(/"/g, '""');
  return `"${str}"`;
}

function buildCsv(rows: Registration[]): string {
  const header = CSV_COLUMNS.map((c) => escapeCsv(c.label)).join(",");
  const body = rows
    .map((row) =>
      CSV_COLUMNS.map((c) => escapeCsv(row[c.key] as unknown)).join(","),
    )
    .join("\n");
  return `${header}\n${body}`;
}

function downloadCsv(rows: Registration[]) {
  const csv = buildCsv(rows);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `yet-conference-registrations-${new Date()
    .toISOString()
    .slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default function AdminPage({ onHome }: { onHome: () => void }) {
  const [password, setPassword] = useState("");
  const [rows, setRows] = useState<Registration[] | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/admin/registrations`, {
        headers: {
          Authorization: `Bearer ${publicAnonKey}`,
          "x-admin-password": password,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error ?? `Request failed (${res.status})`);
      }
      setRows(data.registrations ?? []);
    } catch (err) {
      console.error("Admin load error:", err);
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setBusy(false);
    }
  };

  const paidCount = rows?.filter((r) => r.paid).length ?? 0;

  return (
    <div className="min-h-screen w-full bg-[#21002c] py-[60px] px-[40px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between mb-[32px]">
          <h1 className="font-['Anton:Regular',sans-serif] text-white text-[40px] uppercase">
            YET Admin
          </h1>
          <button
            onClick={onHome}
            className="font-['Lato:Black',sans-serif] text-white/70 hover:text-white text-[11px] tracking-[3px] uppercase"
          >
            ← Back to site
          </button>
        </div>

        {!rows ? (
          <div className="bg-white rounded-[20px] p-[40px] max-w-[480px] mx-auto">
            <h2 className="font-['Anton:Regular',sans-serif] text-[#21002c] text-[24px] uppercase mb-[16px]">
              Sign In
            </h2>
            <p className="font-['Lato:Regular',sans-serif] text-[#21002c]/70 text-[14px] mb-[20px]">
              Enter the admin password to view registrations.
            </p>
            <input
              type="password"
              placeholder="Admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && load()}
              className="w-full h-[48px] rounded-[12px] border border-[#21002c]/15 px-[16px] font-['Lato:Regular',sans-serif] text-[#21002c] outline-none focus:border-[#ab00e4] mb-[16px]"
            />
            {error && (
              <div className="rounded-[10px] border border-red-300 bg-red-50 px-[14px] py-[10px] font-['Lato:Regular',sans-serif] text-red-700 text-[13px] mb-[16px]">
                {error}
              </div>
            )}
            <button
              onClick={load}
              disabled={busy || !password}
              className="btn-liquid w-full h-[48px] rounded-full bg-[#ab00e4] text-white font-['Lato:Black',sans-serif] text-[12px] tracking-[3px] uppercase transition-colors disabled:opacity-60 disabled:cursor-not-allowed border border-transparent"
              style={
                {
                  "--liquid-bg": "#21002c",
                  "--liquid-text": "white",
                } as React.CSSProperties
              }
            >
              {busy ? "Loading…" : "Sign In"}
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap items-center gap-[16px] mb-[20px]">
              <div className="bg-white/10 border border-white/20 rounded-full px-[16px] py-[8px] font-['Lato:Black',sans-serif] text-white text-[11px] tracking-[2px] uppercase">
                {rows.length} Total
              </div>
              <div className="bg-[#ab00e4]/30 border border-[#ab00e4] rounded-full px-[16px] py-[8px] font-['Lato:Black',sans-serif] text-white text-[11px] tracking-[2px] uppercase">
                {paidCount} Paid
              </div>
              <div className="flex-1" />
              <LiquidButton
                onClick={load}
                className="px-[16px] py-[8px] rounded-full bg-white/5 font-['Lato:Black',sans-serif] text-white/90 text-[11px] tracking-[3px] uppercase transition-colors border border-transparent"
                style={
                  {
                    "--liquid-button-background-color": "white",
                    "--liquid-button-color": "#21002c",
                  } as React.CSSProperties
                }
              >
                Refresh
              </LiquidButton>
              <LiquidButton
                onClick={() => downloadCsv(rows)}
                disabled={rows.length === 0}
                className="inline-flex items-center justify-center px-[20px] h-[42px] rounded-full bg-white text-[#21002c] font-['Lato:Black',sans-serif] text-[11px] tracking-[3px] uppercase transition-colors disabled:opacity-60 border border-transparent"
                style={
                  {
                    "--liquid-button-background-color": "#ab00e4",
                    "--liquid-button-color": "white",
                  } as React.CSSProperties
                }
              >
                Export CSV
              </LiquidButton>
            </div>

            <div className="bg-white rounded-[16px] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13px] font-['Lato:Regular',sans-serif]">
                  <thead className="bg-[#21002c] text-white text-[11px] uppercase tracking-[1.5px]">
                    <tr>
                      <th className="px-[14px] py-[12px]">Date</th>
                      <th className="px-[14px] py-[12px]">Name</th>
                      <th className="px-[14px] py-[12px]">Email</th>
                      <th className="px-[14px] py-[12px]">Phone</th>
                      <th className="px-[14px] py-[12px]">Age</th>
                      <th className="px-[14px] py-[12px]">City</th>
                      <th className="px-[14px] py-[12px]">Attendance</th>
                      <th className="px-[14px] py-[12px]">Accom.</th>
                      <th className="px-[14px] py-[12px]">Paid</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.length === 0 ? (
                      <tr>
                        <td
                          colSpan={9}
                          className="px-[14px] py-[24px] text-center text-[#21002c]/60"
                        >
                          No registrations yet.
                        </td>
                      </tr>
                    ) : (
                      rows.map((r) => (
                        <tr key={r.id} className="border-t border-[#21002c]/10">
                          <td className="px-[14px] py-[12px] text-[#21002c]/70">
                            {new Date(r.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-[14px] py-[12px] text-[#21002c] font-['Lato:Black',sans-serif]">
                            {r.fullName}
                          </td>
                          <td className="px-[14px] py-[12px] text-[#21002c]/80">
                            {r.email}
                          </td>
                          <td className="px-[14px] py-[12px] text-[#21002c]/80">
                            {r.phone}
                          </td>
                          <td className="px-[14px] py-[12px] text-[#21002c]/80">
                            {r.ageRange}
                          </td>
                          <td className="px-[14px] py-[12px] text-[#21002c]/80">
                            {r.cityState}
                          </td>
                          <td className="px-[14px] py-[12px] text-[#21002c]/80">
                            {r.attendanceType}
                          </td>
                          <td className="px-[14px] py-[12px] text-[#21002c]/80">
                            {r.accommodation}
                          </td>
                          <td className="px-[14px] py-[12px]">
                            {r.paid ? (
                              <span className="inline-flex items-center px-[10px] py-[3px] rounded-full bg-[#ab00e4] text-white text-[10px] tracking-[1.5px] uppercase font-['Lato:Black',sans-serif]">
                                Paid
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-[10px] py-[3px] rounded-full bg-[#21002c]/10 text-[#21002c]/60 text-[10px] tracking-[1.5px] uppercase font-['Lato:Black',sans-serif]">
                                Free
                              </span>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
