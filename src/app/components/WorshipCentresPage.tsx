import { useState } from "react";
import { Plus, Minus, MapPin } from "lucide-react";
import imgHeroBg from "../../imports/MacBookPro141/WhatsApp Image 2026-05-12 at 7.28.11 PM.jpeg";
import Footer from "./Footer";
import NavBar from "./NavBar";

const centres = [
  {
    name: "Int. Hqt's Zion City Camp Ground",
    address: "Ago Tente Abeokuta Rd, Ibadan.",
  },
  {
    name: "General Hqt's",
    address: "Behind Mandilas Motors, Oke-Bola Ibadan.",
  },
  { name: "Mosfala Assembly", address: "Shop Mesan Bus Stop Mosfala Ibadan." },
  {
    name: "Apata Assembly",
    address: "Opposite Lister Petrol Station, Owode Apata Ibadan.",
  },
  { name: "Ilora Assembly I", address: "Grace Poly Road Alamo Area Ilora." },
  { name: "Ilora Assembly II", address: "Idi Igba Saw-Mill Area Oyo." },
  { name: "Aperin Assembly", address: "5, Ile Aperin Street Aperin Ibadan." },
  {
    name: "Anfani Assembly",
    address: "Opposite Anfani Nursery & Primary School Anfani Ibadan.",
  },
  { name: "Sanyo Assembly", address: "Oke Elere Street Sanyo Ibadan." },
  {
    name: "Ikotun Assembly",
    address: "90, Balogun Bus Stop Igando Road Ikotun Lagos.",
  },
  {
    name: "Ado Ekiti Assembly I",
    address: "Federal Poly Road, Ado-Ekiti, Ekiti State.",
  },
  {
    name: "Ado Ekiti Assembly II",
    address: "Emirin off Poly Road Ado-Ekiti, Ekiti State.",
  },
  { name: "Ajah Assembly", address: "Olayiwola Road, Badore, Ajah Lagos." },
  { name: "Efon Assembly", address: "Odeda Local Govt. Ogun State." },
  { name: "Itele Assembly", address: "Kudi Owo Bus Stop, Itele, Ogun State." },
  { name: "Ore-Ofe Assembly", address: "Eruwa Road Koguo." },
  {
    name: "Omi-Adio Assembly",
    address:
      "Mining Ind. Winners Nursery & Primary School Ido Road, Omi-Adio Ibadan.",
  },
  { name: "Sinko Assembly", address: "Ido Road, Sinko Ibadan." },
  { name: "Ipesu Assembly", address: "Ipesu Epe Local Govt, Lagos." },
  { name: "Olupoyi Assembly", address: "Olakunle Bus Stop." },
  {
    name: "Ajinde Assembly",
    address:
      "Road 2 Along Ultimate Nursery & Primary School Via Orita Challenge Ibadan.",
  },
  { name: "Badagry Assembly", address: "Samu Seje Oko Afo Badagry Lagos." },
  {
    name: "Dugbe Assembly",
    address: "Opposite Phot-Klass Fajuyi Road Dugbe Ibadan.",
  },
  {
    name: "London District",
    address: "Please contact us for more details regarding the UK District.",
  },
  {
    name: "Ologun Eru Assembly I",
    address: "Please contact us for more details.",
  },
  {
    name: "Idigbaro Adeola",
    address: "Behind Simple Block Industry Ido Local Government Assembly II.",
  },
  { name: "Epe Assembly", address: "Epe Lagos State." },
  { name: "Ifo Assembly", address: "Ile Baale Akeso Ojusango Ifo Ogun State." },
  {
    name: "Idi Mango Assembly",
    address: "Ajofeeyitimi Opposite Adogbo House.",
  },
  { name: "Lafenwa Assembly", address: "Ogun State." },
  { name: "Ayetoro Assembly (Lagos)", address: "Lagos State." },
  { name: "Ayetoro Assembly (Ibadan)", address: "Ibadan." },
  {
    name: "Olorunda Community",
    address: "J. 19 Off Ibala Oko Ibala Road Ilesa Osun State.",
  },
  {
    name: "Omi-Adio Assembly II",
    address: "Please contact us for more details.",
  },
  {
    name: "Assembly Adebomi/Ayegun Oleyo",
    address: "Off Akala Express Road Ibadan.",
  },
];

function CentreItem({
  name,
  address,
  open,
  onToggle,
}: {
  name: string;
  address: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-[16px] transition-colors overflow-hidden ${
        open
          ? "border-[#ab00e4] bg-[#ab00e4]/5"
          : "border-white/10 bg-white/5 hover:border-white/20"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-[16px] px-[24px] py-[20px] text-left hover:bg-white/5 transition-colors"
      >
        <span
          className={`font-['Anton',sans-serif] text-[18px] leading-[24px] md:text-[20px] md:leading-[26px] uppercase ${
            open ? "text-[#ab00e4]" : "text-white"
          }`}
        >
          {name}
        </span>
        <span
          className={`shrink-0 transition-colors duration-300 ${
            open ? "text-[#ab00e4]" : "text-white/60"
          }`}
        >
          {open ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </span>
      </button>
      {open && (
        <div className="px-[24px] pb-[20px] flex items-start gap-3">
          <MapPin className="w-5 h-5 text-[#ab00e4] shrink-0 mt-0.5" />
          <p className="font-['Nunito_Sans',sans-serif] text-white/80 text-[16px] leading-[24px]">
            {address}
          </p>
        </div>
      )}
    </div>
  );
}

export default function WorshipCentresPage({ onHome }: { onHome: () => void }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="bg-[#21002c] min-h-screen w-full font-['Nunito_Sans',sans-serif]">
      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-[140px] pb-[80px] md:pt-[180px] md:pb-[120px] px-6 md:px-[44px] text-center overflow-hidden">
        <img
          src={imgHeroBg}
          alt="Worship Centres Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#21002c]/85" />
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, #ab00e4 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-[800px] mx-auto flex flex-col items-center gap-[20px]">
          <div className="w-fit bg-[#1f1f1f] inline-flex gap-[8px] items-center px-[16px] py-[8px] rounded-full border border-white/10 shadow-sm backdrop-blur-md mb-[8px]">
            <MapPin className="w-[14px] h-[14px] text-[#ab00e4]" />
            <span className="font-['Nunito_Sans',sans-serif] font-bold text-white text-[10px] tracking-[2px] uppercase leading-[15px]">
              Over 30 Assemblies
            </span>
          </div>
          <h1 className="font-['Anton',sans-serif] text-white text-[48px] md:text-[72px] leading-[1.1] uppercase tracking-[0.5px]">
            Our Worship <span className="text-[#ab00e4]">Centres.</span>
          </h1>
          <p className="text-white/80 text-[18px] md:text-[22px] leading-[30px] max-w-[640px]">
            Find a Be-New YET assembly closest to you and connect with our
            family for impactful worship and genuine fellowship.
          </p>
        </div>
      </section>

      {/* Centres List Section */}
      <section className="bg-[#15001c] py-[80px] md:py-[120px] px-6 md:px-[44px] shadow-inner relative">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-[56px] flex flex-col items-center">
            <h2 className="font-['Anton',sans-serif] text-white text-[32px] md:text-[48px] uppercase leading-none mb-[16px]">
              Locate An <span className="text-[#ab00e4]">Assembly</span>
            </h2>
            <p className="text-white/60 text-[16px] md:text-[18px] max-w-[600px]">
              Click the + icon to reveal the full address of any of our worship
              centres.
            </p>
          </div>

          {/* Split lists cleanly on large screens using CSS grid aligned to the start */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] items-start">
            <div className="flex flex-col gap-[16px]">
              {centres.slice(0, Math.ceil(centres.length / 2)).map((c, i) => (
                <CentreItem
                  key={i}
                  name={c.name}
                  address={c.address}
                  open={openIdx === i}
                  onToggle={() => setOpenIdx(openIdx === i ? null : i)}
                />
              ))}
            </div>

            <div className="flex flex-col gap-[16px]">
              {centres.slice(Math.ceil(centres.length / 2)).map((c, i) => {
                const realIndex = i + Math.ceil(centres.length / 2);
                return (
                  <CentreItem
                    key={realIndex}
                    name={c.name}
                    address={c.address}
                    open={openIdx === realIndex}
                    onToggle={() =>
                      setOpenIdx(openIdx === realIndex ? null : realIndex)
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
