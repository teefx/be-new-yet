import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.ts";

const app = new Hono();

app.use("*", logger(console.log));
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization", "x-admin-password"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

const BASE = "/server";
const PAYSTACK_AMOUNT_KOBO = 5000 * 100; // ₦5,000 in kobo

app.get(`${BASE}/health`, (c) => c.json({ status: "ok" }));

// Expose the Paystack public key to the frontend (safe — it's a publishable key).
app.get(`${BASE}/config`, (c) => {
  return c.json({
    paystackPublicKey: Deno.env.get("PAYSTACK_PUBLIC_KEY") ?? "",
  });
});

async function sendEmail(opts: {
  to: string;
  subject: string;
  html: string;
}): Promise<void> {
  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) {
    console.log("RESEND_API_KEY missing — skipping email send");
    return;
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          Deno.env.get("RESEND_FROM_EMAIL") ||
          "YET Conference <info@benewyouth.org>",
        to: opts.to,
        subject: opts.subject,
        html: opts.html,
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.log(`Resend send failed (${res.status}): ${body}`);
    }
  } catch (error) {
    console.log(`Resend send threw while emailing ${opts.to}: ${error}`);
  }
}

function confirmationEmailHtml(name: string): string {
  return `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 24px; overflow: hidden; color: #21002c; border: 1px solid #f9e9ff; box-shadow: 0 10px 40px rgba(33,0,44,0.08);">
      <div style="background-color: #21002c; padding: 40px 32px; text-align: center;">
        <h1 style="margin: 0; color: #ffffff; font-size: 32px; text-transform: uppercase; letter-spacing: 1px;">YOU'RE <span style="color: #ab00e4;">IN!</span></h1>
        <p style="margin: 12px 0 0; color: #cccccc; font-size: 16px; letter-spacing: 2px; text-transform: uppercase;">YET CONFERENCE 2026</p>
      </div>
      <div style="padding: 40px 32px; background-color: #fff8ee;">
        <p style="margin: 0 0 20px; font-size: 18px; line-height: 28px;">Hi <strong>${name}</strong>,</p>
        <p style="margin: 0 0 24px; font-size: 16px; line-height: 26px; color: #4d3356;">Thank you for securing your spot for <strong>YET Conference 2026</strong>. We are thrilled to have you join us for what promises to be a life-changing encounter.</p>
        <div style="background-color: #ffffff; border-radius: 16px; padding: 24px; margin-bottom: 24px; border: 1px solid #f3d9f9;">
          <p style="margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #7a6681; font-weight: bold;">What's Next?</p>
          <p style="margin: 0; font-size: 15px; line-height: 24px; color: #4d3356;">We'll be reaching out soon with the exact conference dates, detailed schedule, and accommodation information.</p>
        </div>
        <p style="margin: 0; font-size: 16px; font-weight: bold; color: #21002c;">— The BE-NEW Team</p>
      </div>
      <div style="background-color: #f9e9ff; padding: 24px; text-align: center;">
        <p style="margin: 0; font-size: 12px; color: #7a6681;">Be-New in Christ Youth Evangelical Team (YET)<br/>Ago-Tente Area, Ibadan, Oyo State</p>
      </div>
    </div>
  `;
}

function thankYouEmailHtml(name: string): string {
  return `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 24px; overflow: hidden; color: #21002c; border: 1px solid #f9e9ff; box-shadow: 0 10px 40px rgba(33,0,44,0.08);">
      <div style="background-color: #21002c; padding: 40px 32px; text-align: center;">
        <div style="background-color: #ab00e4; width: 64px; height: 64px; border-radius: 50%; display: inline-block; margin-bottom: 16px; line-height: 64px; font-size: 32px;">💜</div>
        <h1 style="margin: 0; color: #ffffff; font-size: 32px; text-transform: uppercase; letter-spacing: 1px;">THANK <span style="color: #ab00e4;">YOU!</span></h1>
      </div>
      <div style="padding: 40px 32px; background-color: #fff8ee;">
        <p style="margin: 0 0 20px; font-size: 18px; line-height: 28px;">Hi <strong>${name}</strong>,</p>
        <p style="margin: 0 0 24px; font-size: 16px; line-height: 26px; color: #4d3356;">Your <strong>₦5,000</strong> contribution toward YET Conference 2026 has been successfully received.</p>
        <div style="background-color: #ffffff; border-radius: 16px; padding: 24px; margin-bottom: 32px; border: 1px solid #f3d9f9; text-align: center;">
          <p style="margin: 0; font-size: 15px; line-height: 24px; color: #4d3356;">Every Naira you give goes directly toward logistics, welfare, materials, and creating an excellent, impactful experience for everyone attending.</p>
        </div>
        <p style="margin: 0 0 8px; font-size: 16px; font-weight: bold; color: #21002c;">We truly appreciate your support!</p>
        <p style="margin: 0; font-size: 16px; color: #4d3356;">See you at the conference.</p>
      </div>
      <div style="background-color: #f9e9ff; padding: 24px; text-align: center;">
        <p style="margin: 0; font-size: 12px; color: #7a6681;">Be-New in Christ Youth Evangelical Team (YET)<br/>Ago-Tente Area, Ibadan, Oyo State</p>
      </div>
    </div>
  `;
}

// POST /registrations — save attendee, send confirmation email
app.post(`${BASE}/registrations`, async (c) => {
  let payload: Record<string, unknown>;
  try {
    payload = await c.req.json();
  } catch (error) {
    return c.json({ error: `Invalid JSON body: ${error}` }, 400);
  }

  const fullName = String(payload.fullName ?? "").trim();
  const email = String(payload.email ?? "")
    .trim()
    .toLowerCase();
  if (!fullName || !email) {
    return c.json({ error: "fullName and email are required" }, 400);
  }

  const id = crypto.randomUUID();
  const record = {
    id,
    fullName,
    email,
    phone: payload.phone ?? "",
    gender: payload.gender ?? "",
    ageRange: payload.ageRange ?? "",
    cityState: payload.cityState ?? "",
    church: payload.church ?? "",
    attendanceType: payload.attendanceType ?? "",
    accommodation: payload.accommodation ?? "",
    source: payload.source ?? "",
    prayerRequest: payload.prayerRequest ?? "",
    paid: false,
    paystackReference: null as string | null,
    createdAt: new Date().toISOString(),
  };

  try {
    const existingId = await kv.get(`registration_by_email:${email}`);
    if (existingId) {
      return c.json(
        { error: "An account with this email is already registered." },
        400,
      );
    }

    await kv.set(`registration:${id}`, record);
    await kv.set(`registration_by_email:${email}`, id);
  } catch (error) {
    console.log(`Failed to persist registration for ${email}: ${error}`);
    return c.json({ error: `Could not save registration: ${error}` }, 500);
  }

  await sendEmail({
    to: email,
    subject: "You're registered for YET Conference 2026 🎉",
    html: confirmationEmailHtml(fullName),
  });

  return c.json({ id, ok: true });
});

// POST /paystack/init — initialize a ₦5,000 transaction for a registration
app.post(`${BASE}/paystack/init`, async (c) => {
  const secret = Deno.env.get("PAYSTACK_SECRET_KEY");
  if (!secret) {
    return c.json({ error: "PAYSTACK_SECRET_KEY is not configured" }, 500);
  }

  let body: { registrationId?: string; callbackUrl?: string; amount?: number };
  try {
    body = await c.req.json();
  } catch (error) {
    return c.json({ error: `Invalid JSON body: ${error}` }, 400);
  }
  const registrationId = body.registrationId;
  const callbackUrl = body.callbackUrl;
  if (!registrationId || !callbackUrl) {
    return c.json(
      { error: "registrationId and callbackUrl are required" },
      400,
    );
  }

  const registration = await kv.get(`registration:${registrationId}`);
  if (!registration) {
    return c.json({ error: `No registration with id ${registrationId}` }, 404);
  }

  const amountKobo = body.amount
    ? Math.round(Number(body.amount) * 100)
    : PAYSTACK_AMOUNT_KOBO;

  try {
    const res = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secret}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: registration.email,
        amount: amountKobo,
        currency: "NGN",
        callback_url: callbackUrl,
        metadata: {
          registrationId,
          fullName: registration.fullName,
          purpose: "YET Conference 2026 optional contribution",
        },
      }),
    });
    const data = await res.json();
    if (!res.ok || !data?.status) {
      console.log(
        `Paystack init failed for registration ${registrationId}: ${JSON.stringify(data)}`,
      );
      return c.json(
        { error: `Paystack init failed: ${data?.message ?? res.status}` },
        502,
      );
    }
    return c.json({
      authorizationUrl: data.data.authorization_url,
      reference: data.data.reference,
    });
  } catch (error) {
    console.log(
      `Paystack init threw for registration ${registrationId}: ${error}`,
    );
    return c.json({ error: `Paystack init error: ${error}` }, 502);
  }
});

// GET /paystack/verify?reference=... — verify a payment, mark paid, send thank-you email
app.get(`${BASE}/paystack/verify`, async (c) => {
  const secret = Deno.env.get("PAYSTACK_SECRET_KEY");
  if (!secret) {
    return c.json({ error: "PAYSTACK_SECRET_KEY is not configured" }, 500);
  }
  const reference = c.req.query("reference");
  if (!reference) {
    return c.json({ error: "reference query param is required" }, 400);
  }

  try {
    const res = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      { headers: { Authorization: `Bearer ${secret}` } },
    );
    const data = await res.json();
    if (!res.ok || !data?.status) {
      console.log(
        `Paystack verify failed for ${reference}: ${JSON.stringify(data)}`,
      );
      return c.json(
        { error: `Paystack verify failed: ${data?.message ?? res.status}` },
        502,
      );
    }
    const success = data.data?.status === "success";
    const registrationId = data.data?.metadata?.registrationId as
      | string
      | undefined;

    if (success && registrationId) {
      const registration = await kv.get(`registration:${registrationId}`);
      if (registration && !registration.paid) {
        const updated = {
          ...registration,
          paid: true,
          paystackReference: reference,
          paidAt: new Date().toISOString(),
        };
        await kv.set(`registration:${registrationId}`, updated);
        await sendEmail({
          to: updated.email,
          subject: "Thank you for supporting YET Conference 2026 💜",
          html: thankYouEmailHtml(updated.fullName),
        });
      }
    }

    return c.json({
      success,
      reference,
      registrationId: registrationId ?? null,
    });
  } catch (error) {
    console.log(`Paystack verify threw for ${reference}: ${error}`);
    return c.json({ error: `Paystack verify error: ${error}` }, 502);
  }
});

// GET /admin/registrations — return all saved registrations (password gated)
app.get(`${BASE}/admin/registrations`, async (c) => {
  const expected = Deno.env.get("ADMIN_PASSWORD");
  const provided =
    c.req.header("x-admin-password") ?? c.req.query("password") ?? "";
  if (!expected || provided !== expected) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  try {
    const all = await kv.getByPrefix("registration:");
    const rows = (all ?? []).filter(
      (r: any) => r && typeof r === "object" && r.id,
    );
    rows.sort((a: any, b: any) =>
      String(b.createdAt ?? "").localeCompare(String(a.createdAt ?? "")),
    );
    return c.json({ registrations: rows });
  } catch (error) {
    console.log(`Admin list failed: ${error}`);
    return c.json({ error: `Could not list registrations: ${error}` }, 500);
  }
});

Deno.serve(app.fetch);
