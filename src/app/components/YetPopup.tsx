import svgPaths from "../../imports/Frame4/svg-iv6q3dkhmx";
import imgRectangle6 from "../../imports/Frame4/8b5a9be480fb7389f70d0e44b23fe7fc14b4bd3d.png";

export default function YetPopup({
  onClose,
  onRegister,
}: {
  onClose: () => void;
  onRegister: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-[20px]">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="relative w-full max-w-[1001px] h-[650px] rounded-[20px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
        style={{
          backgroundImage:
            "linear-gradient(205.715deg, rgb(33, 0, 44) 44.098%, rgb(86, 75, 229) 94.046%)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-[20px] right-[20px] z-10 w-[40px] h-[40px] rounded-full bg-white/10 border border-white/20 text-white text-[20px] leading-none flex items-center justify-center hover:bg-white hover:text-[#21002c] transition-colors"
        >
          ×
        </button>

        <div className="absolute h-[570px] left-[46px] top-[43px] w-[455px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img
              alt=""
              className="absolute max-w-none object-cover size-full"
              src={imgRectangle6}
            />
            <div className="absolute bg-[rgba(171,0,228,0.37)] inset-0" />
          </div>
        </div>

        <div className="absolute inset-[7.25%_5.71%_90.33%_92.72%]" data-name="Vector">
          
        </div>

        <div className="-translate-y-1/2 absolute flex flex-col gap-[36px] items-end left-[532px] top-1/2 w-[416px]">
          <div className="flex flex-col font-['Anton:Regular',sans-serif] leading-[0] not-italic text-[54.958px] text-right text-white uppercase w-full">
            <p className="leading-[65.949px] mb-0">youth</p>
            <p className="m-0">
              <span className="leading-[65.949px]">{`conference `}</span>
              <span className="leading-[65.949px] text-[#ab00e4]">2026</span>
            </p>
          </div>
          <button
            onClick={onRegister}
            className="bg-white flex h-[46px] items-center justify-center px-[20px] rounded-full border border-[#e5e7eb] hover:bg-[#ab00e4] hover:text-white hover:border-[#ab00e4] transition-colors"
          >
            <span className="font-['Lato:Black',sans-serif] text-[#21002c] text-[12px] tracking-[3px] uppercase leading-[24px]">
              Click here to register
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
