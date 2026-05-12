import svgPaths from "./svg-iv6q3dkhmx";
import imgRectangle6 from "./8b5a9be480fb7389f70d0e44b23fe7fc14b4bd3d.png";

function Link() {
  return (
    <div className="bg-white content-stretch flex h-[46px] items-center justify-center pb-[11.5px] pt-[10.5px] px-[20px] relative rounded-[9999px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
      <div className="flex flex-col font-['Lato:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21002c] text-[12px] text-center tracking-[3px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">{`Click here to registar `}</p>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start pb-[25px] pl-px pt-px relative shrink-0" data-name="Link:margin">
      <Link />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[36px] items-end left-[532px] top-1/2 w-[416px]">
      <div className="flex flex-col font-['Anton:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[54.958px] text-right text-white uppercase w-[min-content]">
        <p className="leading-[65.949px] mb-0">youth</p>
        <p>
          <span className="leading-[65.949px]">{`conference `}</span>
          <span className="leading-[65.949px] text-[#ab00e4]">2026</span>
        </p>
      </div>
      <LinkMargin />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <div className="-translate-x-1/2 absolute h-[650px] left-1/2 top-0 w-[1001px]" style={{ backgroundImage: "linear-gradient(205.715deg, rgb(33, 0, 44) 44.098%, rgb(86, 75, 229) 94.046%)" }} />
      <Frame />
      <div className="absolute inset-[7.25%_5.71%_90.33%_92.72%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7469 15.7649">
          <path clipRule="evenodd" d={svgPaths.p25993780} fill="var(--fill-0, #FFB2B2)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[570px] left-[46px] top-[43px] w-[455px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle6} />
          <div className="absolute bg-[rgba(171,0,228,0.37)] inset-0" />
        </div>
      </div>
    </div>
  );
}