import { ArrowRight } from "lucide-react";
import svgPaths from "../../imports/MacBookPro141/svg-z58yzuf3b1";
import imgRectangle4 from "../../imports/MacBookPro141/d912afb5da028e411c22b6fc588d565d6e9ba119.png";
import imgNigeria from "../../imports/MacBookPro141/fcf5ca6b02f39689b105813274c3af7e510da4a2.png";
import imgIbadan from "../../imports/MacBookPro141/IBADAN.png";
import imgCanada from "../../imports/MacBookPro141/f304d10120d6af1bc128a3140c2d56bece712a49.png";
import imgUnitedKingdom from "../../imports/MacBookPro141/f2e110f266ae55b6643b06576c4038a845f4bee1.png";
import imgEkiti from "../../imports/MacBookPro141/EKITI IMAGE.jpg";
import imgUnitedStates from "../../imports/MacBookPro141/c96e1733d2bf6263e84de35f656b6401fd338eae.png";
import imgImage from "../../imports/MacBookPro141/1c9e3b278bf53a64e50e8eec3812223ca4fb6ee3.png";
import imgNigeria1 from "../../imports/MacBookPro141/c2ad4781e07aa8f4bcdca45c0a15be6eab6efbdb.png";
import imgUnitedKingdom1 from "../../imports/MacBookPro141/e07abab2d452ff422d9c764e91ab3fcbb6dd6a2b.png";
import imgBnLogo1 from "../../imports/MacBookPro141/96ea11a6defa3aeac356a056e4c25b4113d2ebc2.png";
import imgLink from "../../imports/MacBookPro141/dab0476d08487993b46337d657a61aeccfbcb5af.png";
import imgWorship from "../../imports/MacBookPro141/worship-centre.jpeg";
import imgWhatsApp from "../../imports/MacBookPro141/whatapp-comunity.jpeg";
import imgBackground from "../../imports/MacBookPro141/f1ede4d8d84f1840d01be9a82448ce9c88471375.png";
import imgPastor from "../../imports/MacBookPro141/1426f8b56554520db4ce802ab2d43509d566e039.png";
import imgImage1 from "../../imports/MacBookPro141/2990c152ea964ffa3f23bee8cc86696b48fb183f.png";
import imgSection from "../../imports/MacBookPro141/2a2caa86575917fffd64444335eb41da67ab432c.png";
import imgHeroBg from "../../imports/MacBookPro141/WhatsApp Image 2026-05-12 at 7.28.11 PM.jpeg";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { LiquidButton } from "./ui/liquid-button";
import { createPortal } from "react-dom";

const worshipCentres = [
  { img: imgIbadan, city: "Ibadan", detail: "23 centres" },
  { img: imgNigeria, city: "Lagos", detail: "7 centres" },
  { img: imgEkiti, city: "Ekiti", detail: "8 centres" },
  { img: imgUnitedStates, city: "United States", detail: "4 centres" },
  { img: imgImage, city: "", detail: "" },
];

const welcomeCards = [
  {
    img: imgLink,
    subtitle: "WHO WE ARE",
    title: "About us",
    cta: "LEARN MORE",
    link: "#about",
  },
  {
    img: imgWorship,
    subtitle: "JOIN OUR COMMUNITY",
    title: "Worship With Us",
    description: "Find the nearest worship centre to you.",
    cta: "LOCATE A CENTRE",
    link: "/worship-centres",
  },
  {
    img: imgWhatsApp,
    subtitle: "JOIN WHATSAPP COMMUNITY",
    title: "WhatsApp Community",
    link: "https://chat.whatsapp.com/your-invite-link", // Replace with actual WhatsApp link
    cta: "LEARN MORE",
  },
];

const beliefs = [
  "Jesus Christ is the center of our faith and the fullest expression of God’s love for humanity.",
  "Scripture is our foundation, shaping our doctrine, and daily living.",
  "We believe in the present work of the Holy Spirit through worship, prayer, spiritual gifts, and empowered living.",
  "By grace through Christ, we are called into righteousness, freedom, purpose, and abundant life.",
];

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-[#21002c] font-['Nunito_Sans',sans-serif]">
      <NavBar />

      {/* Hero */}
      <section className="relative min-h-[100vh] bg-[#21002c] flex flex-col items-center justify-center pt-24 px-6 text-center overflow-hidden">
        <img
          src={imgHeroBg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#21002c]/80" />

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="font-['Anton',sans-serif] text-white text-[48px] md:text-[72px] lg:text-[86px] leading-[1.1] uppercase max-w-4xl tracking-wide">
            A Youth Community <br />
            Rooted in Christ, <br />
            <span className="text-[#ab00e4]">Built for Purpose.</span>
          </h1>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <LiquidButton
              className="bg-white text-black font-['Nunito_Sans',sans-serif] font-black px-8 py-[14px] rounded-full text-[12px] tracking-[3px] uppercase transition"
              style={
                {
                  "--liquid-button-background-color": "#e5e7eb",
                  "--liquid-button-color": "black",
                } as React.CSSProperties
              }
            >
              Watch Live
            </LiquidButton>
            <LiquidButton
              onClick={() => (window.location.href = "/conference")}
              className="border border-white text-white font-['Nunito_Sans',sans-serif] font-black px-8 py-[14px] rounded-full text-[12px] tracking-[3px] uppercase transition"
              style={
                {
                  "--liquid-button-background-color": "white",
                  "--liquid-button-color": "#21002c",
                } as React.CSSProperties
              }
            >
              Register for Conference
            </LiquidButton>
          </div>
        </div>
      </section>

      {/* Events / Notice */}
      <section className="bg-[#f9e9ff] py-[80px] md:py-[120px] px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-[48px] md:gap-[64px]">
          <div className="w-full relative rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] h-[300px] md:h-[575px]">
            <img
              alt=""
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              src={imgRectangle4}
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-[12px]">
              <p className="font-['Lato:Black',sans-serif] text-[12px] text-[rgba(0,0,0,0.8)] tracking-[2.4px] uppercase">
                EVENTS
              </p>
              <h2 className="font-['Anton',sans-serif] text-[#21002c] text-[36px] md:text-[48px] leading-[1.1] uppercase">
                More Than Events. <br />
                <span className="text-[#ab00e4]">Real Encounters.</span>
              </h2>
              <LiquidButton
                className="border border-[#ab00e4] text-[#ab00e4] px-[28px] py-[14px] rounded-full font-['Nunito_Sans',sans-serif] font-black text-[12px] tracking-[2px] uppercase transition-colors mt-[8px]"
                style={
                  {
                    "--liquid-button-background-color": "#ab00e4",
                    "--liquid-button-color": "white",
                  } as React.CSSProperties
                }
              >
                See All Events
              </LiquidButton>
            </div>

            <div className="flex flex-col md:flex-row shadow-[0_20px_60px_rgba(0,0,0,0.1)] rounded-[24px] overflow-hidden w-full lg:w-auto">
              <div className="bg-[#cd4bf8] text-white p-8 md:w-[300px] flex flex-col items-center justify-center text-center">
                <span className="font-['Nunito_Sans',sans-serif] font-black text-[12px] tracking-[2px] uppercase mb-2 opacity-80">
                  Monthly
                </span>
                <span className="font-['Anton',sans-serif] text-[32px] leading-[36px] uppercase mb-2">
                  Night Vigil
                </span>
                <span className="font-['Nunito_Sans',sans-serif] text-[15px] opacity-90">
                  Every 2nd Friday • 10PM
                </span>
              </div>
              <div className="bg-[#ab00e4] text-white p-8 md:w-[340px] flex flex-col items-center justify-center text-center">
                <span className="font-['Nunito_Sans',sans-serif] font-black text-[12px] tracking-[2px] uppercase mb-2 opacity-80">
                  Quarterly
                </span>
                <span className="font-['Anton',sans-serif] text-[32px] leading-[36px] uppercase mb-2">
                  My Life My Future
                </span>
                <span className="font-['Nunito_Sans',sans-serif] text-[15px] opacity-90">
                  Empowerment Program
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Home */}
      <section className="bg-white py-[80px] md:py-[120px] px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col justify-between items-start gap-8 mb-[56px]">
            <LiquidButton
              className="bg-[#ab00e4] text-white font-['Nunito_Sans',sans-serif] font-bold px-[20px] py-[10px] rounded-full text-[16px] tracking-[4px] uppercase transition-colors border border-transparent"
              style={
                {
                  "--liquid-button-background-color": "#21002c",
                  "--liquid-button-color": "white",
                } as React.CSSProperties
              }
            >
              Building Project
            </LiquidButton>
            <h2 className="font-['Anton',sans-serif] text-[#21002c] text-[48px] md:text-[60px] uppercase leading-none mt-[24px] mb-[16px]">
              Welcome Home!
            </h2>
            <p className="font-['Nunito_Sans',sans-serif] text-[#21002c]/80 text-[16px] leading-[24px] max-w-[720px]">
              Faith grows better in community. Whether you're searching for
              direction, deeper fellowship, or a place to truly belong, Vinyo
              Youth is a family where young people encounter Christ, build
              meaningful relationships, and live with purpose.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {welcomeCards.map((c, i) => {
              const CardWrapper = c.link ? "a" : "div";
              const wrapperProps = c.link
                ? {
                    href: c.link,
                    ...(c.link.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {}),
                  }
                : {};

              return (
                <CardWrapper
                  key={i}
                  {...wrapperProps}
                  className="relative h-[400px] md:h-[440px] w-full rounded-[24px] overflow-hidden group cursor-pointer block"
                >
                  <img
                    src={c.img}
                    alt={c.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/20" />
                  <div className="absolute top-[24px] left-[16px] text-white text-left">
                    <p className="font-['Nunito_Sans',sans-serif] font-black text-[12px] tracking-[3px] uppercase opacity-90 mb-[4px]">
                      {c.subtitle}
                    </p>
                    <h3 className="font-['Nunito_Sans',sans-serif] font-bold text-[28px] leading-[1.2]">
                      {c.title}
                    </h3>
                    {c.description && (
                      <p className="font-['Nunito_Sans',sans-serif] text-[15px] opacity-80 mt-[8px] max-w-[260px] leading-snug">
                        {c.description}
                      </p>
                    )}
                  </div>
                  <div className="absolute bottom-[16px] left-[16px] text-white font-['Nunito_Sans',sans-serif] font-black text-[10px] tracking-[2px] uppercase">
                    {c.cta}
                  </div>
                  <div className="absolute top-[24px] right-[24px] text-white">
                    <ArrowRight className="w-6 h-6 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Belief */}
      <section className="relative bg-black py-[80px] md:py-[120px] px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src={imgBackground}
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90" />
        </div>
        <div className="relative max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <h2 className="font-['Anton',sans-serif] text-white text-[48px] uppercase mb-6">
              Our Mission
            </h2>
            <p className="font-['Nunito_Sans',sans-serif] text-white text-[16px] leading-[24px] mb-8 max-w-lg">
              To raise young people who boldly reflect Christ, Evangelize the
              gospel, influence culture positively, and carry the love of God
              everywhere they go.
            </p>
            <LiquidButton
              className="bg-[#ab00e4] text-white flex items-center gap-[10px] px-[21px] py-[11px] rounded-full font-['Nunito_Sans',sans-serif] font-black text-[12px] tracking-[3px] uppercase transition-colors"
              style={
                {
                  "--liquid-button-background-color": "white",
                  "--liquid-button-color": "#ab00e4",
                } as React.CSSProperties
              }
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </LiquidButton>
          </div>

          <div className="w-full lg:w-1/2 bg-white rounded-[24px] p-8 md:p-[60px] relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-[rgba(171,0,228,0.1)] pointer-events-none" />
            <img
              src={imgSection}
              alt="Texture"
              className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none mix-blend-overlay"
            />
            <div className="relative z-10">
              <h3 className="font-['Anton',sans-serif] text-[48px] text-[#21002c] uppercase mb-8">
                Our <span className="text-[#ab00e4]">Belief</span>
              </h3>
              <div className="flex flex-col gap-[16px]">
                {beliefs.map((belief, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-[8px] group cursor-default transition-transform duration-300 hover:translate-x-2"
                  >
                    <div className="mt-[6px] w-[6px] h-[12px] bg-[#2C2C2C] group-hover:bg-[#ab00e4] shrink-0 border-b-[6px] border-[#D9D9D9] group-hover:border-[#ab00e4]/30 transition-colors duration-300" />
                    <p className="font-['Nunito_Sans',sans-serif] text-[#666] group-hover:text-[#21002c] text-[16px] leading-[24px] transition-colors duration-300">
                      {belief}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campuses */}
      <section className="bg-[#040005] py-[80px] md:py-[120px] px-6 overflow-hidden">
        <div className="max-w-[1280px] mx-auto text-center flex flex-col items-center">
          <div className="bg-[#1f1f1f] inline-flex items-center gap-[6px] px-[12px] py-[6px] rounded-full text-white font-['Nunito_Sans',sans-serif] text-[10px] tracking-[2px] uppercase mb-[24px]">
            <span>🌍</span> OVER 40 WORSHIP CENTRES GLOBALLY
          </div>
          <h2 className="font-['Anton',sans-serif] text-[36px] md:text-[46px] text-white uppercase leading-[1.2] mb-6 max-w-3xl">
            Building young people in Christ, through Christ,{" "}
            <span className="text-[#ab00e4]">and for Kingdom impact.</span>
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-white/80 text-[20px] mb-8">
            Find your place in the family.
          </p>
          <LiquidButton
            onClick={() => (window.location.href = "/worship-centres")}
            className="inline-flex border border-white text-white px-[17px] py-[11px] rounded-[20px] font-['Nunito_Sans',sans-serif] font-black text-[10px] tracking-[2px] uppercase transition-colors mb-16"
            style={
              {
                "--liquid-button-background-color": "white",
                "--liquid-button-color": "#040005",
              } as React.CSSProperties
            }
          >
            See All Worship Centres
          </LiquidButton>

          <div className="w-full flex overflow-x-auto lg:overflow-visible lg:flex-wrap lg:justify-center snap-x lg:snap-none snap-mandatory gap-6 pb-8 hide-scrollbar">
            {worshipCentres.map((c, i) => {
              const CardTag = c.city ? "a" : "div";
              const cardProps = c.city ? { href: "/worship-centres" } : {};
              return (
                <CardTag
                  key={i}
                  {...cardProps}
                  className="min-w-[240px] md:min-w-[260px] h-[360px] relative rounded-[20px] overflow-hidden shrink-0 group cursor-pointer snap-center block"
                >
                  {c.img && (
                    <img
                      src={c.img}
                      alt={c.city}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                  {c.city && (
                    <>
                      <div className="absolute bottom-[16px] left-[16px] text-left">
                        <h3 className="font-['Nunito_Sans',sans-serif] font-bold text-[24px] text-white mb-[4px]">
                          {c.city}
                        </h3>
                        <p className="font-['Nunito_Sans',sans-serif] text-white/60 text-[16px]">
                          {c.detail}
                        </p>
                      </div>
                      <div className="absolute top-[16px] right-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-6 h-6 text-white -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </>
                  )}
                </CardTag>
              );
            })}
          </div>
        </div>
      </section>

      {/* General Overseer */}
      <section className="bg-black py-[80px] md:py-[120px] px-6">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[32px] md:gap-[48px] items-center">
          <div className="relative max-w-[640px] w-full justify-self-center lg:justify-self-start">
            <img
              src={imgPastor}
              alt="Pastor"
              className="w-full h-auto object-contain"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, transparent 25%, black 75%)",
              }}
            />
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-white max-w-[444px] mx-auto lg:mx-0">
            <img
              src={imgBnLogo1}
              alt="Logo"
              className="h-8 md:h-[32px] mb-6 opacity-80 object-contain"
            />
            <h2 className="font-['Nunito_Sans',sans-serif] font-black text-[24px] tracking-[4.8px] uppercase mb-6">
              Our General Overseer
            </h2>
            <p className="font-['Nunito_Sans',sans-serif] text-white/60 text-[16px] leading-[28px] mb-6 whitespace-pre-wrap">
              Apostle Dr. Philips Adebimpe Alimi is a consistent and seasoned
              preacher of God of over three decades he worked as a civil servant
              before God called him to full ministry. By God’s grace he is the
              General Overseer of Be-New in Christ Evang. Church worldwide,
              Rector Shalom School of Mission and also the President of
              Maranatha World Outreach (MWO). He hosts Radio program “TOMORROW
              MAY BE TOO LATE” on various radio station which has blessed many
              people. He is a hot demand as speaker in church, conferences and
              conventions in Nigeria and abroad. God has used him to write and
              publish over 20 powerful books that has changed lives.
            </p>
            <p className="font-['Nunito_Sans',sans-serif] text-white/60 text-[16px] leading-[28px] mb-8 whitespace-pre-wrap">
              He has served in the body of Christ in different capacities such
              as province V chairman of Oyo state Pentecostal Fellowship of
              Nigeria (P.F.N) etc.
            </p>
            <LiquidButton
              className="border border-[#e5e7eb] rounded-[20px] px-[21px] py-[10px] font-['Nunito_Sans',sans-serif] font-black text-[12px] tracking-[3px] uppercase transition-colors"
              style={
                {
                  "--liquid-button-background-color": "white",
                  "--liquid-button-color": "black",
                } as React.CSSProperties
              }
            >
              Read More
            </LiquidButton>
          </div>
        </div>
      </section>

      {/* Give to YET */}
      <section className="bg-black pb-[80px] md:pb-[120px] px-6">
        <div className="max-w-[1152px] mx-auto bg-[#f8eaea] rounded-[8px] overflow-hidden flex flex-col md:flex-row items-center relative min-h-[350px]">
          <div className="w-full md:w-1/2 p-[40px] md:p-[64px] flex flex-col items-center md:items-start text-center md:text-left z-10 relative">
            <h2 className="font-['Anton',sans-serif] text-[48px] md:text-[60px] text-black uppercase mb-[24px] leading-[1]">
              Give to YET
            </h2>
            <p className="font-['Nunito_Sans',sans-serif] text-black/70 text-[20px] leading-[28px] mb-[32px] max-w-[320px]">
              Your generosity keeps blessing lives, thank you for giving.
            </p>
            <div className="flex flex-col sm:flex-row gap-[10px] w-full sm:w-auto">
              <LiquidButton
                onClick={() => (window.location.href = "/give")}
                className="inline-flex items-center justify-center bg-white text-black px-[20px] py-[10.5px] rounded-full font-['Nunito_Sans',sans-serif] font-black text-[12px] uppercase tracking-[3px] transition-colors"
                style={
                  {
                    "--liquid-button-background-color": "#f3f4f6",
                    "--liquid-button-color": "black",
                  } as React.CSSProperties
                }
              >
                Give Now
              </LiquidButton>
              <LiquidButton
                className="bg-[#ab00e4] text-white px-[20px] py-[10.5px] rounded-full font-['Nunito_Sans',sans-serif] font-black text-[12px] uppercase tracking-[3px] transition-colors"
                style={
                  {
                    "--liquid-button-background-color": "#8a00b8",
                    "--liquid-button-color": "white",
                  } as React.CSSProperties
                }
              >
                Building Project
              </LiquidButton>
            </div>
          </div>
          <div className="w-full h-[300px] md:absolute md:bottom-[-35px] md:right-[-57.59px] md:w-[1152px] pointer-events-none">
            <div className="relative md:absolute inset-0 overflow-hidden flex justify-center md:block">
              <img
                src={imgImage1}
                alt="Give"
                className="h-full object-cover md:absolute md:left-[41.82%] md:w-[58.18%] md:max-w-none md:top-0"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {typeof document !== "undefined" &&
        createPortal(
          <LiquidButton
            onClick={() => (window.location.href = "/conference")}
            className="fixed bottom-8 right-6 z-[9999] px-[20px] h-[48px] rounded-full bg-[#ab00e4] text-white font-['Lato:Black',sans-serif] text-[11px] tracking-[3px] uppercase shadow-[0_8px_24px_rgba(171,0,228,0.4)] transition-colors border border-transparent cursor-pointer"
            style={
              {
                position: "fixed",
                bottom: "32px",
                right: "24px",
                left: "auto",
                "--liquid-button-background-color": "#21002c",
                "--liquid-button-color": "white",
              } as React.CSSProperties
            }
          >
            YET Conference 2026 →
          </LiquidButton>,
          document.body,
        )}
    </div>
  );
}
