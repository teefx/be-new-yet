import { useState } from "react";
import {
  Landmark,
  CreditCard,
  HeartHandshake,
  Copy,
  CheckCircle2,
} from "lucide-react";
import imgHeroBg from "../../imports/MacBookPro141/WhatsApp Image 2026-05-12 at 7.28.11 PM.jpeg";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { LiquidButton } from "./ui/liquid-button";

export default function GivePage({ onHome }: { onHome: () => void }) {
  const [copied, setCopied] = useState(false);
  const [amount, setAmount] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard.writeText("2028532716");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#21002c] min-h-screen w-full font-['Nunito_Sans',sans-serif]">
      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-[140px] pb-[80px] md:pt-[180px] md:pb-[120px] px-6 md:px-[44px] text-center overflow-hidden">
        <img
          src={imgHeroBg}
          alt="Generosity Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#21002c]/80" />
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, #ab00e4 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-[800px] mx-auto flex flex-col items-center gap-[20px]">
          <div className="w-fit bg-[#1f1f1f] inline-flex gap-[8px] items-center px-[16px] py-[8px] rounded-full border border-white/10 shadow-sm backdrop-blur-md mb-[8px]">
            <HeartHandshake className="w-[14px] h-[14px] text-[#ab00e4]" />
            <span className="font-['Nunito_Sans',sans-serif] font-bold text-white text-[10px] tracking-[2px] uppercase leading-[15px]">
              Your Generosity
            </span>
          </div>
          <h1 className="font-['Anton',sans-serif] text-white text-[48px] md:text-[72px] leading-[1.1] uppercase tracking-[0.5px]">
            Our <span className="text-[#ab00e4]">Mission.</span>
          </h1>
          <p className="text-white/80 text-[18px] md:text-[22px] leading-[30px] max-w-[640px]">
            Give towards our mission to reach a billion souls in ten thousand
            cities with the message of the gospel.
          </p>
        </div>
      </section>

      {/* Ways to Give Section */}
      <section className="bg-[#fff8ee] py-[80px] md:py-[120px] px-6 md:px-[44px] rounded-t-[40px] md:rounded-t-[64px] shadow-[0_-20px_60px_rgba(0,0,0,0.2)]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-[56px] flex flex-col items-center">
            <h2 className="font-['Anton',sans-serif] text-[#21002c] text-[36px] md:text-[52px] uppercase leading-none mb-[16px]">
              Ways to <span className="text-[#ab00e4]">Give</span>
            </h2>
            <p className="text-[#21002c]/70 text-[16px] md:text-[18px] max-w-[600px]">
              Join us as we put our money right where our faith is, partnering
              with God for the spread of the gospel in our day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] max-w-[1000px] mx-auto">
            {/* Bank Transfer Card */}
            <div className="bg-white border border-[#21002c]/5 rounded-[24px] p-[32px] md:p-[48px] shadow-[0_10px_40px_rgba(171,0,228,0.05)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#ab00e4]/5 rounded-bl-[100%] pointer-events-none transition-transform group-hover:scale-110" />

              <div className="w-[64px] h-[64px] bg-[#f9e9ff] rounded-full flex items-center justify-center mb-[24px]">
                <Landmark className="w-8 h-8 text-[#ab00e4]" />
              </div>

              <h3 className="font-['Anton',sans-serif] text-[#21002c] text-[28px] uppercase mb-[8px]">
                Naira Account
              </h3>
              <p className="text-[#21002c]/60 text-[15px] mb-[32px]">
                Make a direct bank transfer from any Nigerian bank.
              </p>

              <div className="bg-[#f9e9ff]/30 rounded-[16px] p-[24px] shadow-sm border border-[#ab00e4]/20">
                <p className="font-black text-[#21002c]/50 text-[11px] tracking-[2px] uppercase mb-[12px]">
                  Direct Bank Transfer
                </p>
                <div className="flex flex-wrap items-center justify-between gap-[16px] mb-[16px]">
                  <p className="font-['Anton',sans-serif] text-[#ab00e4] text-[36px] md:text-[44px] leading-none tracking-[2px]">
                    2028532716
                  </p>
                  <button
                    onClick={copyToClipboard}
                    className="flex flex-col items-center justify-center w-[48px] h-[48px] bg-white shadow-sm rounded-full text-[#ab00e4] hover:bg-[#ab00e4] hover:text-white transition-colors"
                    title="Copy Account Number"
                  >
                    {copied ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="font-bold text-[#21002c] text-[18px]">
                    Zenith Bank
                  </p>
                  <p className="text-[#21002c]/80 text-[15px]">
                    Be-New in Christ Youth Evangelical Team
                  </p>
                </div>
              </div>
            </div>

            {/* Online Payment Card (Disabled) */}
            <div className="bg-white border border-[#21002c]/5 rounded-[24px] p-[32px] md:p-[48px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col">
              <div className="w-[64px] h-[64px] bg-[#21002c]/5 rounded-full flex items-center justify-center mb-[24px]">
                <CreditCard className="w-8 h-8 text-[#21002c]/40" />
              </div>

              <h3 className="font-['Anton',sans-serif] text-[#21002c]/60 text-[28px] uppercase mb-[8px]">
                Online Payment
              </h3>
              <p className="text-[#21002c]/50 text-[15px] mb-[24px]">
                Give securely from anywhere in the world using debit/credit
                cards.
              </p>

              <div className="flex flex-col gap-[8px] w-full mb-[32px]">
                <label className="font-['Nunito_Sans',sans-serif] font-black text-[#21002c]/60 text-[11px] tracking-[2px] uppercase">
                  Amount (₦)
                </label>
                <input
                  type="number"
                  min="100"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="e.g. 5000"
                  className="w-full h-[52px] rounded-[14px] border border-[#21002c]/15 bg-white/50 px-[16px] font-['Nunito_Sans',sans-serif] text-[15px] text-[#21002c] outline-none focus:border-[#ab00e4] focus:bg-white focus:ring-4 focus:ring-[#ab00e4]/10 transition-all duration-300"
                />
              </div>

              <div className="mt-auto flex flex-col items-start gap-[16px]">
                <div className="inline-flex items-center gap-[8px] bg-amber-100 text-amber-800 px-[14px] py-[6px] rounded-full font-bold text-[11px] tracking-[1px] uppercase">
                  Currently Disabled
                </div>
                <LiquidButton
                  disabled
                  className="w-full inline-flex items-center justify-center px-[32px] h-[56px] rounded-full bg-[#21002c]/5 text-[#21002c]/40 font-black text-[12px] tracking-[3px] uppercase cursor-not-allowed border border-transparent transition-colors"
                  style={
                    {
                      "--liquid-button-background-color": "#ab00e4",
                      "--liquid-button-color": "white",
                    } as React.CSSProperties
                  }
                >
                  Give via Paystack
                </LiquidButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
