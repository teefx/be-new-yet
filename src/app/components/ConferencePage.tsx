import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";
import {
  Flame,
  MapPin,
  Calendar,
  Clock,
  Bed,
  Sparkles,
  Bell,
  Users,
  Activity,
  Mic,
  Edit3,
  HeartHandshake,
  Music,
  HelpCircle,
  CheckCircle2,
  Plus,
  Minus,
  Copy,
} from "lucide-react";

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-81f6db4e`;
const API_HEADERS = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${publicAnonKey}`,
};

type RegistrationPayload = {
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
};

async function createRegistration(
  payload: RegistrationPayload,
): Promise<{ id: string }> {
  const res = await fetch(`${API_BASE}/registrations`, {
    method: "POST",
    headers: API_HEADERS,
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error ?? `Registration failed (${res.status})`);
  }
  return data;
}

async function initPaystack(
  registrationId: string,
  amount?: number,
): Promise<{ authorizationUrl: string; reference: string }> {
  const callbackUrl = `${window.location.origin}/conference`;
  const res = await fetch(`${API_BASE}/paystack/init`, {
    method: "POST",
    headers: API_HEADERS,
    body: JSON.stringify({ registrationId, callbackUrl, amount }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error ?? `Paystack init failed (${res.status})`);
  }
  return data;
}

async function verifyPaystack(
  reference: string,
): Promise<{ success: boolean }> {
  const res = await fetch(
    `${API_BASE}/paystack/verify?reference=${encodeURIComponent(reference)}`,
    { headers: API_HEADERS },
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error ?? `Paystack verify failed (${res.status})`);
  }
  return data;
}

function Tag({
  icon: Icon,
  children,
}: {
  icon?: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="w-fit bg-[#1f1f1f] inline-flex gap-[8px] items-center px-[16px] py-[8px] rounded-full border border-white/10 shadow-sm backdrop-blur-md">
      {Icon && <Icon className="w-[14px] h-[14px] text-[#ab00e4]" />}
      <span className="font-['Nunito_Sans',sans-serif] font-bold text-white text-[10px] tracking-[2px] uppercase leading-[15px]">
        {children}
      </span>
    </div>
  );
}

function PillButton({
  children,
  variant = "outline",
  onClick,
}: {
  children: React.ReactNode;
  variant?: "outline" | "filled" | "outline-dark";
  onClick?: () => void;
}) {
  const base =
    "btn-liquid inline-flex items-center justify-center px-[21px] h-[48px] rounded-full font-['Nunito_Sans',sans-serif] font-black text-[12px] tracking-[3px] uppercase transition-colors cursor-pointer";
  const styles =
    variant === "filled"
      ? "bg-white text-[#21002c]"
      : variant === "outline-dark"
        ? "border border-[#21002c] text-[#21002c]"
        : "border border-white text-white";

  const liquidVars =
    variant === "filled"
      ? { "--liquid-bg": "#f9e9ff", "--liquid-text": "#21002c" }
      : variant === "outline-dark"
        ? { "--liquid-bg": "#21002c", "--liquid-text": "white" }
        : { "--liquid-bg": "white", "--liquid-text": "#21002c" };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles}`}
      style={liquidVars as React.CSSProperties}
    >
      {children}
    </button>
  );
}

function Hero({ onRegister }: { onRegister: () => void }) {
  return (
    <section className="relative bg-[#21002c] overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, #ab00e4 0%, transparent 60%), radial-gradient(ellipse at 10% 90%, #cd4bf8 0%, transparent 55%)",
        }}
      />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-[44px] pt-[100px] md:pt-[140px] pb-[80px] md:pb-[120px] grid grid-cols-1 lg:grid-cols-12 gap-[48px] items-center">
        <div className="lg:col-span-7 flex flex-col items-start gap-[24px]">
          <Tag icon={Flame}>Youth Empowerment & Transformation</Tag>
          <h1 className="font-['Anton',sans-serif] text-white uppercase text-[40px] leading-[48px] md:text-[64px] md:leading-[68px] tracking-[0.5px]">
            More Than A Conference.
            <br />
            <span className="text-[#ab00e4]">A Generation Encounter.</span>
          </h1>
          <p className="font-['Nunito_Sans',sans-serif] text-white/80 text-[16px] leading-[26px] md:text-[18px] md:leading-[28px] max-w-[620px]">
            YET Conference 2026 is a powerful 3-day experience designed to stir
            hearts, strengthen faith, build community, and raise young people
            who will boldly live for Christ and impact their world.
          </p>
          <p className="font-['Nunito_Sans',sans-serif] text-white/60 text-[16px] leading-[26px] max-w-[620px]">
            Through worship, teachings, fellowship, prayer, creative sessions,
            and engaging activities, this is more than an event — it is a moment
            of transformation.
          </p>
          <div className="flex gap-[16px] pt-[12px] flex-wrap">
            <PillButton variant="filled" onClick={onRegister}>
              Register Now
            </PillButton>
            <PillButton>Watch Highlights</PillButton>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden border border-white/10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?auto=format&fit=crop&w=1200&q=80"
              alt="YET Conference"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#21002c] via-[#21002c]/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-['Anton',sans-serif] text-white text-[28px] leading-[32px] md:text-[36px] md:leading-[40px] uppercase">
                YET <span className="text-[#ab00e4]">2026</span>
              </p>
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-white/70 text-[14px] tracking-[2px] uppercase mt-[6px]">
                Coming This August
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailCard({
  icon: Icon,
  label,
  title,
  sub,
}: {
  icon: React.ElementType;
  label: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-[20px] p-[28px] backdrop-blur-sm hover:border-[#ab00e4] hover:-translate-y-1 transition-all duration-300 group cursor-default shadow-lg hover:shadow-[0_10px_40px_rgba(171,0,228,0.15)]">
      <div className="w-[52px] h-[52px] rounded-full bg-white/5 flex items-center justify-center mb-[20px] group-hover:bg-[#ab00e4]/20 transition-colors duration-300">
        <Icon className="w-6 h-6 text-white group-hover:text-[#ab00e4] transition-colors duration-300" />
      </div>
      <p className="font-['Nunito_Sans',sans-serif] font-black text-white/60 text-[11px] tracking-[2.4px] uppercase mb-[8px] group-hover:text-white/80 transition-colors duration-300">
        {label}
      </p>
      <p className="font-['Anton',sans-serif] text-white text-[20px] leading-[26px] md:text-[22px] md:leading-[28px] uppercase group-hover:text-[#ab00e4] transition-colors duration-300">
        {title}
      </p>
      {sub && (
        <p className="font-['Nunito_Sans',sans-serif] text-white/60 text-[14px] leading-[22px] mt-[8px]">
          {sub}
        </p>
      )}
    </div>
  );
}

function EventDetails() {
  return (
    <section className="bg-[#21002c] py-[80px] md:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[44px]">
        <div className="flex flex-col items-center text-center gap-[16px] mb-[56px]">
          <Tag icon={MapPin}>Event Details</Tag>
          <h2 className="font-['Anton',sans-serif] text-white text-[36px] leading-[42px] md:text-[46px] md:leading-[52px] uppercase max-w-[720px]">
            Mark Your Calendar.
            <br />
            <span className="text-[#ab00e4]">Be There.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          <DetailCard
            icon={Calendar}
            label="Date"
            title="Coming This August"
            sub="Exact dates to be announced soon"
          />
          <DetailCard
            icon={MapPin}
            label="Location"
            title="Agotinti, Ibadan"
            sub="Oyo State, Nigeria"
          />
          <DetailCard icon={Clock} label="Duration" title="3 Impactful Days" />
          <DetailCard
            icon={Bed}
            label="Accommodation"
            title="Limited Spots"
            sub="Available for registered attendees"
          />
        </div>
      </div>
    </section>
  );
}

function AboutConference() {
  const items = [
    "Powerful worship sessions",
    "Life-changing teachings",
    "Prayer and impartation",
    "Genuine fellowship",
    "Creative expressions",
    "Interactive sessions",
    "Sports and social activities",
    "Community and spiritual growth",
  ];
  return (
    <section className="bg-[#040005] py-[80px] md:py-[120px] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 50%, #ab00e4 0%, transparent 50%)",
        }}
      />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-[44px] grid grid-cols-1 lg:grid-cols-2 gap-[40px] md:gap-[64px] items-center">
        <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
            alt="Worship"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ab00e4]/40 to-transparent" />
        </div>
        <div className="flex flex-col gap-[24px]">
          <Tag icon={Sparkles}>About</Tag>
          <h2 className="font-['Anton',sans-serif] text-white text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] uppercase">
            What Is YET <br />
            <span className="text-[#ab00e4]">Conference About?</span>
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-white/80 text-[16px] leading-[26px] md:text-[18px] md:leading-[28px]">
            YET Conference is a gathering focused on raising young people who
            are spiritually grounded, purpose-driven, and passionate about
            Christ.
          </p>
          <p className="font-['Nunito_Sans',sans-serif] text-white/60 text-[16px] leading-[26px]">
            Over three transformative days, attendees will experience:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-[24px] gap-y-[12px]">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-[10px] group cursor-default transition-transform duration-300 hover:translate-x-2"
              >
                <div className="mt-[6px] w-[6px] h-[12px] bg-white/20 group-hover:bg-[#ab00e4] shrink-0 border-b-[6px] border-white/40 group-hover:border-[#ab00e4]/30 transition-colors duration-300" />
                <p className="font-['Nunito_Sans',sans-serif] text-white/80 group-hover:text-white text-[15px] leading-[24px] transition-colors duration-300">
                  {item}
                </p>
              </li>
            ))}
          </ul>
          <p className="font-['Nunito_Sans',sans-serif] text-white/60 text-[16px] leading-[26px] pt-[8px]">
            This conference is designed to help young people encounter God
            deeply while building meaningful relationships and discovering
            purpose.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyRegister() {
  const cards = [
    {
      icon: Bell,
      title: "Get Event Updates",
      body: "Receive important announcements, schedules, and conference information directly.",
    },
    {
      icon: Bed,
      title: "Accommodation Access",
      body: "Registered attendees get priority information about accommodation and logistics.",
    },
    {
      icon: Users,
      title: "Build Meaningful Connections",
      body: "Meet and connect with young believers from different locations and backgrounds.",
    },
    {
      icon: Flame,
      title: "Worship & Encounter",
      body: "Experience powerful worship, prayer, teachings, and moments of transformation.",
    },
    {
      icon: Activity,
      title: "Fun & Activities",
      body: "Enjoy engaging sports activities, hangouts, and interactive experiences throughout the conference.",
    },
    {
      icon: Mic,
      title: "Conference Resources",
      body: "Access conference materials, updates, and exclusive content before and after the event.",
    },
  ];
  return (
    <section className="bg-[#f9e9ff] py-[80px] md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[44px]">
        <div className="flex flex-col items-center text-center gap-[16px] mb-[40px] md:mb-[56px]">
          <Tag icon={Flame}>Why Register</Tag>
          <h2 className="font-['Anton',sans-serif] text-[#21002c] text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] uppercase max-w-[820px]">
            Why You Should <span className="text-[#ab00e4]">Register?</span>
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-[#21002c]/70 text-[16px] leading-[26px] md:text-[18px] md:leading-[28px] max-w-[720px]">
            Registration gives you access to important conference updates,
            activities, accommodation information, and everything you need to
            fully experience YET Conference 2026.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-[20px] p-[24px] md:p-[32px] shadow-[0_4px_24px_rgba(33,0,44,0.06)] hover:shadow-[0_20px_60px_rgba(171,0,228,0.15)] transition-all duration-300 hover:-translate-y-1 group cursor-default"
            >
              <div className="w-[60px] h-[60px] rounded-full bg-[#f9e9ff] flex items-center justify-center mb-[20px] group-hover:bg-[#ab00e4] transition-colors duration-300">
                <c.icon className="w-7 h-7 text-[#ab00e4] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-['Anton',sans-serif] text-[#21002c] text-[20px] leading-[26px] md:text-[24px] md:leading-[30px] uppercase mb-[10px] group-hover:text-[#ab00e4] transition-colors duration-300">
                {c.title}
              </h3>
              <p className="font-['Nunito_Sans',sans-serif] text-[#21002c]/70 text-[15px] leading-[24px]">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-[8px]">
      <span className="font-['Nunito_Sans',sans-serif] font-black text-[#21002c] text-[11px] tracking-[2px] uppercase">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  "h-[52px] rounded-[14px] border border-[#21002c]/15 bg-white/50 px-[16px] font-['Nunito_Sans',sans-serif] text-[15px] text-[#21002c] outline-none hover:border-[#ab00e4]/40 focus:border-[#ab00e4] focus:bg-white focus:ring-4 focus:ring-[#ab00e4]/10 transition-all duration-300";

function BrandSelect({
  value,
  onChange,
  placeholder,
  options,
}: {
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  options: string[];
}) {
  return (
    <Select value={value || undefined} onValueChange={onChange}>
      <SelectTrigger className="!h-[52px] rounded-[14px] border border-[#21002c]/15 bg-white/50 px-[16px] font-['Nunito_Sans',sans-serif] text-[15px] text-[#21002c] hover:border-[#ab00e4]/40 focus:border-[#ab00e4] focus:bg-white focus:ring-4 focus:ring-[#ab00e4]/10 transition-all duration-300 focus:ring-offset-0 data-[placeholder]:text-[#21002c]/40">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="rounded-[12px] border-[#21002c]/15 bg-white">
        {options.map((opt) => (
          <SelectItem
            key={opt}
            value={opt}
            className="font-['Nunito_Sans',sans-serif] text-[15px] text-[#21002c] focus:bg-[#ab00e4]/10 focus:text-[#ab00e4]"
          >
            {opt}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function SuccessModal({
  onClose,
  onSupport,
}: {
  onClose: () => void;
  onSupport: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-[20px]">
      <div
        className="absolute inset-0 bg-[#21002c]/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-[24px] max-w-[520px] w-full p-[24px] md:p-[40px] text-center shadow-[0_20px_60px_rgba(33,0,44,0.4)]">
        <div className="bg-green-100 text-green-500 w-[80px] h-[80px] rounded-full flex items-center justify-center mx-auto mb-[20px]">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-['Anton',sans-serif] text-[#21002c] text-[28px] leading-[34px] md:text-[36px] md:leading-[42px] uppercase mb-[12px]">
          Registration <span className="text-[#ab00e4]">Successful</span>
        </h3>
        <p className="font-['Nunito_Sans',sans-serif] text-[#21002c]/75 text-[16px] leading-[26px] mb-[8px]">
          Thank you for registering for YET Conference 2026.
        </p>
        <p className="font-['Nunito_Sans',sans-serif] text-[#21002c]/70 text-[15px] leading-[24px] mb-[28px]">
          Would you like to support the conference with an optional contribution
          of <span className="text-[#ab00e4]">₦2,000</span>?
        </p>
        <div className="flex flex-col gap-[12px]">
          <button
            onClick={onSupport}
            className="btn-liquid inline-flex items-center justify-center px-[24px] h-[52px] rounded-full bg-[#ab00e4] text-white font-['Nunito_Sans',sans-serif] font-black text-[12px] tracking-[3px] uppercase transition-colors"
            style={
              {
                "--liquid-bg": "#21002c",
                "--liquid-text": "white",
              } as React.CSSProperties
            }
          >
            Support The Conference
          </button>
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center px-[24px] h-[48px] rounded-full text-[#21002c]/70 font-['Nunito_Sans',sans-serif] font-black text-[11px] tracking-[3px] uppercase hover:text-[#ab00e4] hover:bg-[#ab00e4]/5 transition-all"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}

function SupportModal({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("2028532716");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-[20px]">
      <div
        className="absolute inset-0 bg-[#21002c]/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-[24px] max-w-[440px] w-full p-[24px] md:p-[40px] shadow-[0_20px_60px_rgba(33,0,44,0.4)]">
        <button
          onClick={onClose}
          className="absolute top-[20px] right-[20px] w-[32px] h-[32px] flex items-center justify-center rounded-full bg-[#21002c]/5 text-[#21002c]/50 hover:bg-[#21002c]/10 hover:text-[#21002c] transition-colors"
        >
          ×
        </button>
        <div className="text-center mb-[24px]">
          <div className="bg-[#f9e9ff] text-[#ab00e4] w-[64px] h-[64px] rounded-full flex items-center justify-center mx-auto mb-[16px]">
            <HeartHandshake className="w-8 h-8" />
          </div>
          <h3 className="font-['Anton',sans-serif] text-[#21002c] text-[28px] leading-[34px] uppercase mb-[8px]">
            Support <span className="text-[#ab00e4]">YET 2026</span>
          </h3>
          <p className="font-['Nunito_Sans',sans-serif] text-[#21002c]/70 text-[15px] leading-[22px]">
            Online payments are temporarily disabled. Please transfer your contribution directly to our account below.
          </p>
        </div>
        
        <div className="bg-[#f9e9ff]/50 border border-[#ab00e4]/20 rounded-[16px] p-[24px] text-center mb-[24px] relative group">
          <p className="font-['Nunito_Sans',sans-serif] font-black text-[#21002c]/60 text-[11px] tracking-[2px] uppercase mb-[12px]">Direct Bank Transfer</p>
          <div className="flex items-center justify-center gap-[12px] mb-[12px]">
            <p className="font-['Anton',sans-serif] text-[#ab00e4] text-[36px] md:text-[40px] leading-[40px] tracking-[2px]">2028532716</p>
            <button onClick={copyToClipboard} className="text-[#ab00e4] hover:scale-110 transition-transform p-2 bg-[#ab00e4]/10 rounded-full" title="Copy Account Number">
              {copied ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#21002c] text-[18px] mb-[4px]">Zenith Bank</p>
          <p className="font-['Nunito_Sans',sans-serif] text-[#21002c]/80 text-[15px]">Be-New in Christ Youth Evangelical Team</p>
        </div>

        <button
          onClick={onClose}
          className="btn-liquid w-full inline-flex items-center justify-center px-[32px] h-[52px] rounded-full bg-[#ab00e4] text-white font-['Nunito_Sans',sans-serif] font-black text-[12px] tracking-[3px] uppercase transition-colors border border-transparent"
          style={{ "--liquid-bg": "#21002c", "--liquid-text": "white" } as React.CSSProperties}
        >
          I Have Made The Transfer
        </button>
      </div>
    </div>
  );
}

const emptyForm: RegistrationPayload = {
  fullName: "",
  email: "",
  phone: "",
  gender: "",
  ageRange: "",
  cityState: "",
  church: "",
  attendanceType: "",
  accommodation: "",
  source: "",
  prayerRequest: "",
};

function RegistrationForm({
  onSupport,
}: {
  onSupport: (registrationId: string) => void;
}) {
  const [form, setForm] = useState<RegistrationPayload>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [registrationId, setRegistrationId] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update =
    (key: keyof RegistrationPayload) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const { id } = await createRegistration(form);
      setRegistrationId(id);
      setSubmitted(true);
      setShowModal(true);
    } catch (err) {
      console.error("Registration error:", err);
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <section
      id="register"
      className="bg-[#fff8ee] py-[80px] md:py-[120px] relative"
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, #ab00e4 0%, transparent 50%)",
        }}
      />
      <div className="relative max-w-[860px] mx-auto px-6 md:px-[44px]">
        <div className="flex flex-col items-center text-center gap-[16px] mb-[40px]">
          <Tag icon={Edit3}>Registration</Tag>
          <h2 className="font-['Anton',sans-serif] text-[#21002c] text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] uppercase">
            Reserve Your <span className="text-[#ab00e4]">Spot</span>
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-[#21002c]/70 text-[16px] leading-[24px] md:text-[17px] md:leading-[26px] max-w-[600px]">
            Be part of this life-changing gathering. Register now and stay
            connected for important updates and conference announcements.
          </p>
        </div>
        {submitted ? (
          <div className="bg-white rounded-[20px] p-[32px] md:p-[48px] text-center shadow-[0_10px_40px_rgba(33,0,44,0.08)]">
            <div className="bg-green-100 text-green-500 w-[80px] h-[80px] rounded-full flex items-center justify-center mx-auto mb-[24px]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-['Anton',sans-serif] text-[#21002c] text-[28px] md:text-[32px] uppercase mb-[12px]">
              You're In!
            </h3>
            <p className="font-['Nunito_Sans',sans-serif] text-[#21002c]/70 text-[16px]">
              We've received your registration. Check your email for next steps.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-[24px] p-[24px] md:p-[40px] shadow-[0_10px_40px_rgba(33,0,44,0.08)] grid grid-cols-1 md:grid-cols-2 gap-[20px]"
          >
            <Field label="Full Name">
              <input
                required
                className={inputCls}
                placeholder="Jane Doe"
                value={form.fullName}
                onChange={update("fullName")}
              />
            </Field>
            <Field label="Email Address">
              <input
                required
                type="email"
                className={inputCls}
                placeholder="you@email.com"
                value={form.email}
                onChange={update("email")}
              />
            </Field>
            <Field label="Phone Number">
              <input
                required
                className={inputCls}
                placeholder="+234..."
                value={form.phone}
                onChange={update("phone")}
              />
            </Field>
            <Field label="Gender">
              <BrandSelect
                value={form.gender}
                onChange={(v) => setForm((p) => ({ ...p, gender: v }))}
                placeholder="Select"
                options={["Male", "Female"]}
              />
            </Field>
            <Field label="Age Range">
              <BrandSelect
                value={form.ageRange}
                onChange={(v) => setForm((p) => ({ ...p, ageRange: v }))}
                placeholder="Select"
                options={["13–17", "18–24", "25–30", "31+"]}
              />
            </Field>
            <Field label="City / State">
              <input
                required
                className={inputCls}
                placeholder="Ibadan, Oyo"
                value={form.cityState}
                onChange={update("cityState")}
              />
            </Field>
            <Field label="Church Name (Optional)">
              <input
                className={inputCls}
                placeholder="Church name"
                value={form.church}
                onChange={update("church")}
              />
            </Field>
            <Field label="Attendance Type">
              <BrandSelect
                value={form.attendanceType}
                onChange={(v) => setForm((p) => ({ ...p, attendanceType: v }))}
                placeholder="Select"
                options={["Physical", "Online"]}
              />
            </Field>
            <Field label="Accommodation Needed?">
              <BrandSelect
                value={form.accommodation}
                onChange={(v) => setForm((p) => ({ ...p, accommodation: v }))}
                placeholder="Select"
                options={["Yes", "No"]}
              />
            </Field>
            <Field label="How Did You Hear About Us?">
              <input
                className={inputCls}
                placeholder="Friend, social, ..."
                value={form.source}
                onChange={update("source")}
              />
            </Field>
            <div className="md:col-span-2">
              <Field label="Prayer Request (Optional)">
                <textarea
                  rows={4}
                  className={`${inputCls} h-auto py-[12px] resize-none`}
                  placeholder="Share anything you'd like us to pray about..."
                  value={form.prayerRequest}
                  onChange={update("prayerRequest")}
                />
              </Field>
            </div>
            {error && (
              <div className="md:col-span-2 rounded-[12px] border border-red-300 bg-red-50 px-[16px] py-[12px] font-['Nunito_Sans',sans-serif] text-red-700 text-[14px]">
                {error}
              </div>
            )}
            <div className="md:col-span-2 flex justify-center pt-[8px]">
              <button
                type="submit"
                disabled={busy}
                className="btn-liquid inline-flex items-center justify-center px-[32px] h-[52px] rounded-full bg-[#ab00e4] text-white font-['Nunito_Sans',sans-serif] font-black text-[12px] tracking-[3px] uppercase transition-colors disabled:opacity-60 disabled:cursor-not-allowed border border-transparent"
                style={
                  {
                    "--liquid-bg": "#21002c",
                    "--liquid-text": "white",
                  } as React.CSSProperties
                }
              >
                {busy ? "Submitting…" : "Submit Registration"}
              </button>
            </div>
          </form>
        )}
      </div>
      {showModal && registrationId && (
        <SuccessModal
          onClose={() => setShowModal(false)}
          onSupport={() => {
            setShowModal(false);
            onSupport(registrationId);
          }}
        />
      )}
    </section>
  );
}

function SupportSection({
  onSupport,
  onSkip,
}: {
  onSupport: () => void;
  onSkip: () => void;
}) {
  const includes = [
    "Conference logistics",
    "Welfare & hospitality",
    "Activities & engagement",
    "Media & conference materials",
    "Accommodation support",
  ];
  return (
    <section id="support" className="py-[40px] md:py-[80px] px-6 md:px-[44px]">
      <div className="bg-[#fff8ee] relative overflow-hidden rounded-[32px] max-w-[1280px] mx-auto p-[32px] md:p-[64px] grid grid-cols-1 lg:grid-cols-2 gap-[40px] md:gap-[56px] items-center shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 90% 10%, #ab00e4 0%, transparent 50%), radial-gradient(ellipse at 10% 90%, #cd4bf8 0%, transparent 50%)",
          }}
        />
        <div className="flex flex-col gap-[20px] relative z-10">
          <Tag icon={HeartHandshake}>Support YET Conference</Tag>
          <h2 className="font-['Anton',sans-serif] text-[#21002c] text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] uppercase">
            Help Us Create An{" "}
            <span className="text-[#ab00e4]">Impactful Experience</span>
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-[#21002c]/80 text-[16px] leading-[26px] md:text-[17px] md:leading-[28px]">
            Registration for YET Conference 2026 is completely free.
          </p>
          <p className="font-['Nunito_Sans',sans-serif] text-[#21002c]/70 text-[16px] leading-[26px]">
            However, attendees who would like to support the conference can make
            an optional contribution of{" "}
            <span className="text-[#ab00e4] font-['Nunito_Sans',sans-serif] font-black">
              ₦2,000
            </span>{" "}
            to help with logistics, accommodation support, welfare, materials,
            activities, and creating an excellent experience for everyone
            attending.
          </p>
          <p className="font-['Nunito_Sans',sans-serif] text-[#21002c]/70 text-[16px] leading-[26px]">
            Every contribution goes a long way and is greatly appreciated. 💜
          </p>
          <p className="font-['Nunito_Sans',sans-serif] text-[#21002c]/50 text-[13px] leading-[20px] pt-[8px] italic">
            Your contribution is completely optional and not required for
            conference registration or attendance.
          </p>
        </div>

        <div className="bg-white rounded-[24px] p-[24px] md:p-[40px] shadow-[0_20px_60px_rgba(33,0,44,0.1)] border border-[#21002c]/5 relative z-10">
          <div className="flex items-start justify-between mb-[24px]">
            <div>
              <p className="font-['Nunito_Sans',sans-serif] font-black text-[#21002c]/60 text-[11px] tracking-[2.4px] uppercase mb-[8px]">
                Contribution
              </p>
              <p className="font-['Anton',sans-serif] text-[#21002c] text-[48px] leading-[48px] md:text-[56px] md:leading-[56px]">
                ₦2,000
              </p>
            </div>
            <div className="text-[36px] bg-[#f9e9ff] text-[#ab00e4] w-[64px] h-[64px] rounded-full flex items-center justify-center">
              <HeartHandshake className="w-8 h-8" />
            </div>
          </div>

          <div className="h-px bg-[#21002c]/10 my-[20px]" />

          <p className="font-['Nunito_Sans',sans-serif] font-black text-[#21002c] text-[11px] tracking-[2.4px] uppercase mb-[16px]">
            Includes Support Towards
          </p>
          <ul className="flex flex-col gap-[12px] mb-[28px]">
            {includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-[10px] group cursor-default transition-transform duration-300 hover:translate-x-2"
              >
                <div className="mt-[6px] w-[6px] h-[12px] bg-[#2C2C2C] group-hover:bg-[#ab00e4] shrink-0 border-b-[6px] border-[#D9D9D9] group-hover:border-[#ab00e4]/30 transition-colors duration-300" />
                <p className="font-['Nunito_Sans',sans-serif] text-[#21002c]/80 group-hover:text-[#21002c] text-[15px] leading-[22px] transition-colors duration-300">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <button
            onClick={onSupport}
            className="btn-liquid w-full inline-flex items-center justify-center px-[24px] h-[52px] rounded-full bg-[#ab00e4] text-white font-['Nunito_Sans',sans-serif] font-black text-[12px] tracking-[3px] uppercase transition-colors mb-[10px]"
            style={
              {
                "--liquid-bg": "#21002c",
                "--liquid-text": "white",
              } as React.CSSProperties
            }
          >
            Support The Conference
          </button>
          <button
            onClick={onSkip}
            className="w-full inline-flex items-center justify-center px-[24px] h-[48px] rounded-full text-[#21002c]/70 font-['Nunito_Sans',sans-serif] font-black text-[11px] tracking-[3px] uppercase hover:text-[#ab00e4] hover:bg-[#ab00e4]/5 transition-all"
          >
            Skip For Now
          </button>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="relative h-[400px] md:h-[520px] overflow-hidden">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1600&q=80"
        alt="Worship atmosphere"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#21002c]/80" />
      <div className="relative h-full max-w-[1100px] mx-auto px-6 md:px-[44px] flex flex-col items-center justify-center text-center gap-[20px]">
        <Tag icon={Music}>The Experience</Tag>
        <h2 className="font-['Anton',sans-serif] text-white text-[40px] leading-[48px] md:text-[56px] md:leading-[62px] uppercase">
          An Atmosphere Of Worship,
          <br />
          <span className="text-[#ab00e4]">Growth & Community</span>
        </h2>
        <p className="font-['Nunito_Sans',sans-serif] text-white/80 text-[16px] leading-[26px] md:text-[18px] md:leading-[28px] max-w-[760px]">
          From powerful worship moments to impactful teachings, prayer sessions,
          fellowship, and engaging activities, every part of YET Conference is
          designed to create lasting spiritual impact.
        </p>
      </div>
    </section>
  );
}

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-[16px] transition-colors ${
        open
          ? "border-[#ab00e4] bg-[#ab00e4]/5"
          : "border-[#21002c]/15 bg-white"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-[16px] px-[24px] py-[20px] text-left"
      >
        <span
          className={`font-['Anton',sans-serif] text-[18px] leading-[24px] md:text-[20px] md:leading-[26px] uppercase ${
            open ? "text-[#ab00e4]" : "text-[#21002c]"
          }`}
        >
          {q}
        </span>
        <span
          className={`transition-colors duration-300 ${
            open ? "text-[#ab00e4]" : "text-[#21002c]/60"
          }`}
        >
          {open ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </span>
      </button>
      {open && (
        <p className="px-[24px] pb-[20px] font-['Nunito_Sans',sans-serif] text-[#21002c]/75 text-[15px] leading-[24px]">
          {a}
        </p>
      )}
    </div>
  );
}

function Faq() {
  const faqs = [
    { q: "Is registration free?", a: "Yes, registration is completely free." },
    {
      q: "Will accommodation be available?",
      a: "Yes, limited accommodation options will be available for registered attendees.",
    },
    {
      q: "Can I attend online?",
      a: "Yes, selected sessions may be available online.",
    },
    {
      q: "What should I come with?",
      a: "Come with your Bible, writing materials, comfortable clothing, and an expectant heart.",
    },
    {
      q: "Will there be sports and social activities?",
      a: "Yes, there will be engaging sports and interactive activities throughout the conference.",
    },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="bg-white py-[80px] md:py-[120px]">
      <div className="max-w-[860px] mx-auto px-6 md:px-[44px]">
        <div className="flex flex-col items-center text-center gap-[16px] mb-[48px]">
          <Tag icon={HelpCircle}>FAQ</Tag>
          <h2 className="font-['Anton',sans-serif] text-[#21002c] text-[36px] leading-[42px] md:text-[48px] md:leading-[54px] uppercase">
            Frequently <span className="text-[#ab00e4]">Asked</span>
          </h2>
        </div>
        <div className="flex flex-col gap-[14px]">
          {faqs.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ onRegister }: { onRegister: () => void }) {
  return (
    <section className="bg-[#21002c] py-[80px] md:py-[140px] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, #ab00e4 0%, transparent 60%)",
        }}
      />
      <div className="relative max-w-[900px] mx-auto px-6 md:px-[44px] text-center flex flex-col items-center gap-[24px]">
        <h2 className="font-['Anton',sans-serif] text-white text-[40px] leading-[48px] md:text-[64px] md:leading-[70px] uppercase">
          One Encounter Can <br />
          <span className="text-[#ab00e4]">Change Everything.</span>
        </h2>
        <p className="font-['Nunito_Sans',sans-serif] text-white/80 text-[16px] leading-[26px] md:text-[18px] md:leading-[28px] max-w-[640px]">
          Join hundreds of young people gathering for worship, transformation,
          purpose, and genuine encounters with God.
        </p>
        <button
          onClick={onRegister}
          className="btn-liquid inline-flex items-center justify-center px-[36px] h-[56px] rounded-full bg-[#ab00e4] text-white font-['Nunito_Sans',sans-serif] font-black text-[12px] tracking-[3px] uppercase transition-colors"
          style={
            {
              "--liquid-bg": "white",
              "--liquid-text": "#21002c",
            } as React.CSSProperties
          }
        >
          Register Now
        </button>
      </div>
    </section>
  );
}

function PageHeader({ onHome }: { onHome: () => void }) {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[44px] py-[24px] flex items-center justify-between">
        <button
          onClick={onHome}
          className="font-['Anton',sans-serif] text-white text-[24px] uppercase tracking-[1px]"
        >
          BE-<span className="text-[#ab00e4]">NEW</span>
        </button>
        <nav className="flex items-center gap-4 md:gap-[28px]">
          <button
            onClick={onHome}
            className="font-['Nunito_Sans',sans-serif] font-black text-white text-[11px] tracking-[3px] uppercase hover:text-[#ab00e4] transition-colors"
          >
            Home
          </button>
          <a
            href="#register"
            className="inline-flex items-center justify-center px-[18px] h-[40px] rounded-full border border-white text-white font-['Nunito_Sans',sans-serif] font-black text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-[#21002c] transition-colors"
          >
            Register
          </a>
        </nav>
      </div>
    </header>
  );
}

function PaymentStatusBanner({
  status,
  onDismiss,
}: {
  status: "verifying" | "success" | "failed";
  onDismiss: () => void;
}) {
  const styles = {
    verifying: "bg-[#21002c] text-white border-white/20",
    success: "bg-[#ab00e4] text-white border-white/20",
    failed: "bg-red-600 text-white border-white/20",
  }[status];
  const message = {
    verifying: "Verifying your payment with Paystack…",
    success:
      "💜 Payment confirmed. Thank you for supporting YET Conference 2026!",
    failed:
      "We couldn't verify that payment. If you were charged, please contact us.",
  }[status];
  return (
    <div
      className={`fixed top-[20px] w-[90vw] md:w-auto left-1/2 -translate-x-1/2 z-[60] px-4 md:px-[20px] py-[14px] rounded-[16px] md:rounded-full border ${styles} font-['Nunito_Sans',sans-serif] font-black text-[10px] md:text-[12px] tracking-[2px] uppercase shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center justify-between gap-[16px]`}
    >
      <span>{message}</span>
      {status !== "verifying" && (
        <button onClick={onDismiss} className="opacity-70 hover:opacity-100">
          ×
        </button>
      )}
    </div>
  );
}

export default function ConferencePage({ onHome }: { onHome: () => void }) {
  const [paymentStatus, setPaymentStatus] = useState<
    "verifying" | "success" | "failed" | null
  >(null);
  const [showSupportModal, setShowSupportModal] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("reference") ?? params.get("trxref");
    if (!ref) return;
    setPaymentStatus("verifying");
    verifyPaystack(ref)
      .then((res) => setPaymentStatus(res.success ? "success" : "failed"))
      .catch((err) => {
        console.error("Verify error:", err);
        setPaymentStatus("failed");
      })
      .finally(() => {
        const url = new URL(window.location.href);
        url.searchParams.delete("reference");
        url.searchParams.delete("trxref");
        window.history.replaceState({}, "", url.toString());
      });
  }, []);

  const scrollToRegister = () => {
    document
      .getElementById("register")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToSupport = () => {
    document
      .getElementById("support")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSupport = async (registrationId: string) => {
    setShowSupportModal(true);
  };

  return (
    <div className="bg-[#21002c] min-h-screen w-full">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .btn-liquid {
          position: relative;
          overflow: hidden;
          z-index: 1;
          transition: color 0.4s ease;
        }
        .btn-liquid::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 300%;
          height: 300%;
          background-color: var(--liquid-bg, white);
          border-radius: 45%;
          z-index: -1;
          transform: translate(-50%, 100%) rotate(0deg);
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .btn-liquid:hover::before {
          transform: translate(-50%, -10%) rotate(180deg);
        }
        .btn-liquid:hover {
          color: var(--liquid-text, black) !important;
        }
      `,
        }}
      />
      <PageHeader onHome={onHome} />
      <Hero onRegister={scrollToRegister} />
      <EventDetails />
      <AboutConference />
      <WhyRegister />
      <RegistrationForm onSupport={handleSupport} />
      <SupportSection
        onSupport={() => setShowSupportModal(true)}
        onSkip={scrollToRegister}
      />
      <Experience />
      <Faq />
      <FinalCta onRegister={scrollToRegister} />
      {paymentStatus && (
        <PaymentStatusBanner
          status={paymentStatus}
          onDismiss={() => setPaymentStatus(null)}
        />
      )}
      {showSupportModal && (
        <SupportModal onClose={() => setShowSupportModal(false)} />
      )}
    </div>
  );
}
