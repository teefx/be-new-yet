import { X } from "lucide-react";
import imgRectangle6 from "../../imports/Frame4/8b5a9be480fb7389f70d0e44b23fe7fc14b4bd3d.png";
import { LiquidButton } from "./ui/liquid-button";

export default function YetPopup({
  onClose,
  onRegister,
}: {
  onClose: () => void;
  onRegister: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-[20px]">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      <div
        className="relative w-full max-w-[1000px] max-h-[90vh] overflow-y-auto hide-scrollbar rounded-[24px] shadow-[0_30px_80px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center p-6 md:p-[40px] gap-8 md:gap-[60px]"
        style={{
          backgroundImage:
            "linear-gradient(205.715deg, rgb(33, 0, 44) 44.098%, rgb(86, 75, 229) 94.046%)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-[16px] right-[16px] md:top-[24px] md:right-[24px] z-20 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 aspect-square md:aspect-[4/5] md:max-h-[570px] rounded-[20px] overflow-hidden shrink-0 mt-[20px] md:mt-0">
          <img
            alt="Youth Conference"
            className="absolute inset-0 w-full h-full object-cover"
            src={imgRectangle6}
          />
          <div className="absolute inset-0 bg-[#ab00e4]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#21002c]/80 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-[24px] md:gap-[36px] items-center md:items-end w-full md:w-1/2 z-10 pb-4 md:pb-0">
          <div className="flex flex-col font-['Anton',sans-serif] text-[48px] md:text-[64px] text-center md:text-right text-white uppercase leading-[1.1] w-full">
            <p className="m-0">youth</p>
            <p className="m-0">
              <span>conference </span>
              <span className="text-[#ab00e4]">2026</span>
            </p>
          </div>
          <LiquidButton
            onClick={onRegister}
            className="inline-flex h-[52px] md:h-[56px] items-center justify-center px-[32px] rounded-full bg-white text-[#21002c] font-['Nunito_Sans',sans-serif] font-black text-[12px] tracking-[3px] uppercase transition-colors border border-transparent shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:border-[#ab00e4] hover:shadow-[0_10px_40px_rgba(171,0,228,0.4)]"
            style={
              {
                "--liquid-button-background-color": "#ab00e4",
                "--liquid-button-color": "white",
              } as React.CSSProperties
            }
          >
            Click here to register
          </LiquidButton>
        </div>
      </div>
    </div>
  );
}
