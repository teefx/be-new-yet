import {
  ArrowRight,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import svgPaths from "../../imports/MacBookPro141/svg-z58yzuf3b1";
import imgRectangle4 from "../../imports/MacBookPro141/d912afb5da028e411c22b6fc588d565d6e9ba119.png";
import imgNigeria from "../../imports/MacBookPro141/fcf5ca6b02f39689b105813274c3af7e510da4a2.png";
import imgCanada from "../../imports/MacBookPro141/f304d10120d6af1bc128a3140c2d56bece712a49.png";
import imgUnitedKingdom from "../../imports/MacBookPro141/f2e110f266ae55b6643b06576c4038a845f4bee1.png";
import imgUnitedStates from "../../imports/MacBookPro141/c96e1733d2bf6263e84de35f656b6401fd338eae.png";
import imgImage from "../../imports/MacBookPro141/1c9e3b278bf53a64e50e8eec3812223ca4fb6ee3.png";
import imgNigeria1 from "../../imports/MacBookPro141/c2ad4781e07aa8f4bcdca45c0a15be6eab6efbdb.png";
import imgUnitedKingdom1 from "../../imports/MacBookPro141/e07abab2d452ff422d9c764e91ab3fcbb6dd6a2b.png";
import imgBnLogo1 from "../../imports/MacBookPro141/96ea11a6defa3aeac356a056e4c25b4113d2ebc2.png";
import imgLink from "../../imports/MacBookPro141/dab0476d08487993b46337d657a61aeccfbcb5af.png";
import imgLink1 from "../../imports/MacBookPro141/64fb916a7e857129cee514c5f4fcdb7891d5b193.png";
import imgLink2 from "../../imports/MacBookPro141/7fa570592bf36b931a2cf40c1cfc71cb6d9ea8ab.png";
import imgBackground from "../../imports/MacBookPro141/f1ede4d8d84f1840d01be9a82448ce9c88471375.png";
import imgPastor from "../../imports/MacBookPro141/1426f8b56554520db4ce802ab2d43509d566e039.png";
import imgImage1 from "../../imports/MacBookPro141/2990c152ea964ffa3f23bee8cc86696b48fb183f.png";
import imgSection from "../../imports/MacBookPro141/2a2caa86575917fffd64444335eb41da67ab432c.png";
import imgHeroBg from "../../imports/MacBookPro141/WhatsApp Image 2026-05-12 at 7.28.11 PM.jpeg";

const campuses = [
  { img: imgNigeria, city: "Ibadan", detail: "23 campuses" },
  { img: imgCanada, city: "Lagos", detail: "7 campuses" },
  { img: imgUnitedKingdom, city: "Ekiti", detail: "8 campuses" },
  { img: imgUnitedStates, city: "United States", detail: "4 campuses" },
  { img: imgImage, city: "", detail: "" },
];

const welcomeCards = [
  { img: imgLink, subtitle: "WHO WE ARE", title: "About us" },
  { img: imgLink1, subtitle: "JOIN OUR COMMUNITY", title: "Connect with us" },
  {
    img: imgLink2,
    subtitle: "JOIN WHATSAPP COMMUNITY",
    title: "WhatsApp Community",
    link: "https://chat.whatsapp.com/your-invite-link", // Replace with actual WhatsApp link
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

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-[44px] bg-[#0f0014]/90 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <img src={imgBnLogo1} alt="Logo" className="w-10 object-contain" />
          <div className="font-['Anton',sans-serif] text-white text-[14px] md:text-[20px] leading-tight uppercase">
            <p>BE-NEW IN CHRIST EVANGELICAL CHURCH</p>
            <p className="text-[#ab00e4] mt-1">YOUTH EVANGELICAL TEAM (YET)</p>
          </div>
        </div>
        <nav className="hidden lg:flex items-center gap-6 font-['Nunito_Sans',sans-serif] font-bold text-[10px] text-white/70 tracking-[3px] uppercase">
          {[
            "About",
            "Quick Links",
            "Campuses",
            "Cell Church",
            "Sermons",
            "Map",
            "Give",
          ].map((link) => (
            <a
              key={link}
              href={
                link === "Give"
                  ? "/give"
                  : `#${link.toLowerCase().replace(" ", "-")}`
              }
              className="hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
      </header>

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
            <button
              className="btn-liquid bg-white text-black font-['Nunito_Sans',sans-serif] font-black px-8 py-[14px] rounded-full text-[12px] tracking-[3px] uppercase transition"
              style={
                {
                  "--liquid-bg": "#e5e7eb",
                  "--liquid-text": "black",
                } as React.CSSProperties
              }
            >
              Watch Live
            </button>
            <button
              className="btn-liquid border border-white text-white font-['Nunito_Sans',sans-serif] font-black px-8 py-[14px] rounded-full text-[12px] tracking-[3px] uppercase transition"
              style={
                {
                  "--liquid-bg": "white",
                  "--liquid-text": "#21002c",
                } as React.CSSProperties
              }
            >
              Register for Conference
            </button>
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
              <button
                className="btn-liquid border border-[#ab00e4] text-[#ab00e4] px-[28px] py-[14px] rounded-full font-['Nunito_Sans',sans-serif] font-black text-[12px] tracking-[2px] uppercase transition-colors mt-[8px]"
                style={
                  {
                    "--liquid-bg": "#ab00e4",
                    "--liquid-text": "white",
                  } as React.CSSProperties
                }
              >
                See All Events
              </button>
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
            <button className="bg-[#ab00e4] text-white font-['Nunito_Sans',sans-serif] font-bold px-[20px] py-[10px] rounded-full text-[16px] tracking-[4px] uppercase">
              Building Project
            </button>
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
                ? { href: c.link, target: "_blank", rel: "noopener noreferrer" }
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
                    <h3 className="font-['Nunito_Sans',sans-serif] font-bold text-[28px]">
                      {c.title}
                    </h3>
                  </div>
                  <div className="absolute bottom-[16px] left-[16px] flex items-center gap-[8px] text-white font-['Nunito_Sans',sans-serif] font-black text-[10px] tracking-[2px] uppercase">
                    {i === 1 ? "SIGN UP" : "LEARN MORE"}{" "}
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
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
            <button
              className="btn-liquid bg-[#ab00e4] text-white flex items-center gap-[10px] px-[21px] py-[11px] rounded-full font-['Nunito_Sans',sans-serif] font-black text-[12px] tracking-[3px] uppercase transition-colors"
              style={
                {
                  "--liquid-bg": "white",
                  "--liquid-text": "#ab00e4",
                } as React.CSSProperties
              }
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
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
            <span>🌍</span> OVER 40 CAMPUSES GLOBALLY
          </div>
          <h2 className="font-['Anton',sans-serif] text-[36px] md:text-[46px] text-white uppercase leading-[1.2] mb-6 max-w-3xl">
            Building young people in Christ, through Christ,{" "}
            <span className="text-[#ab00e4]">and for Kingdom impact.</span>
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-white/80 text-[20px] mb-8">
            Find your place in the family.
          </p>
          <button
            className="btn-liquid border border-white text-white px-[17px] py-[11px] rounded-[20px] font-['Nunito_Sans',sans-serif] font-black text-[10px] tracking-[2px] uppercase transition-colors mb-16"
            style={
              {
                "--liquid-bg": "white",
                "--liquid-text": "#040005",
              } as React.CSSProperties
            }
          >
            See All Campuses
          </button>

          <div className="w-full flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">
            {campuses.map((c, i) => (
              <div
                key={i}
                className="min-w-[240px] md:min-w-[260px] h-[360px] relative rounded-[20px] overflow-hidden shrink-0 group cursor-pointer snap-center"
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
                  <div className="absolute bottom-[16px] left-[16px] text-left">
                    <h3 className="font-['Nunito_Sans',sans-serif] font-bold text-[24px] text-white mb-[4px]">
                      {c.city}
                    </h3>
                    <p className="font-['Nunito_Sans',sans-serif] text-white/60 text-[16px]">
                      {c.detail}
                    </p>
                    <div className="absolute top-[16px] right-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-6 h-6 text-white -rotate-45" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Overseer */}
      <section className="bg-black py-[80px] md:py-[120px] px-6">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[32px] md:gap-[48px] items-center">
          <div className="relative h-[400px] md:h-[618px] max-w-[640px] w-full rounded-[24px] overflow-hidden justify-self-center lg:justify-self-start">
            <img
              src={imgPastor}
              alt="Pastor"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
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
            <button
              className="btn-liquid border border-[#e5e7eb] rounded-[20px] px-[21px] py-[10px] font-['Nunito_Sans',sans-serif] font-black text-[12px] tracking-[3px] uppercase transition-colors"
              style={
                {
                  "--liquid-bg": "white",
                  "--liquid-text": "black",
                } as React.CSSProperties
              }
            >
              Read More
            </button>
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
              <a
                href="/give"
                className="btn-liquid inline-flex items-center justify-center bg-white text-black px-[20px] py-[10.5px] rounded-full font-['Nunito_Sans',sans-serif] font-black text-[12px] uppercase tracking-[3px] transition-colors"
                style={
                  {
                    "--liquid-bg": "#f3f4f6",
                    "--liquid-text": "black",
                  } as React.CSSProperties
                }
              >
                Give Now
              </a>
              <button
                className="btn-liquid bg-[#ab00e4] text-white px-[20px] py-[10.5px] rounded-full font-['Nunito_Sans',sans-serif] font-black text-[12px] uppercase tracking-[3px] transition-colors"
                style={
                  {
                    "--liquid-bg": "#8a00b8",
                    "--liquid-text": "white",
                  } as React.CSSProperties
                }
              >
                Building Project
              </button>
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

      {/* Footer */}
      <footer className="bg-[#0f0014] pt-[80px] pb-[40px] px-6 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-[60px]">
          {/* Brand */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-4">
              <img
                src={imgBnLogo1}
                alt="Logo"
                className="w-10 object-contain"
              />
              <div className="font-['Anton',sans-serif] text-white text-[16px] leading-tight uppercase">
                <p>BE-NEW IN CHRIST</p>
                <p className="text-[#ab00e4] mt-1">YET</p>
              </div>
            </div>
            <p className="font-['Nunito_Sans',sans-serif] text-white/60 text-[15px] leading-[24px]">
              Raising young people who boldly reflect Christ, Evangelize the
              gospel, and influence culture positively everywhere they go.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-['Anton',sans-serif] text-white text-[20px] uppercase tracking-wide">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-4 font-['Nunito_Sans',sans-serif] text-[15px] text-white/70">
              <a
                href="#about"
                className="hover:text-[#ab00e4] transition-colors"
              >
                About Us
              </a>
              <a
                href="#campuses"
                className="hover:text-[#ab00e4] transition-colors"
              >
                Campuses
              </a>
              <a
                href="#events"
                className="hover:text-[#ab00e4] transition-colors"
              >
                Events & Programs
              </a>
              <a
                href="/give"
                className="hover:text-[#ab00e4] transition-colors"
              >
                Give to YET
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="font-['Anton',sans-serif] text-white text-[20px] uppercase tracking-wide">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4 font-['Nunito_Sans',sans-serif] text-[15px] text-white/70">
              <p>
                Agotinti Area, <br />
                Ibadan, Oyo State, Nigeria
              </p>
              <p className="hover:text-[#ab00e4] transition-colors cursor-pointer">
                info@benewyet.org
              </p>
              <p className="hover:text-[#ab00e4] transition-colors cursor-pointer">
                +234 (0) 800 000 0000
              </p>
            </div>
          </div>

          {/* Socials Placeholder */}
          <div className="flex flex-col gap-6">
            <h4 className="font-['Anton',sans-serif] text-white text-[20px] uppercase tracking-wide">
              Follow Us
            </h4>
            <div className="flex gap-4 font-['Nunito_Sans',sans-serif] font-bold text-[12px] tracking-[1px]">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#ab00e4] hover:scale-110 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#ab00e4] hover:scale-110 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#ab00e4] hover:scale-110 transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#ab00e4] hover:scale-110 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="max-w-[1280px] mx-auto pt-[32px] border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-['Nunito_Sans',sans-serif] text-white/50 text-[14px] text-center md:text-left">
            © {new Date().getFullYear()} Be-New in Christ Evangelical Church
            (YET). All rights reserved.
          </p>
          <div className="flex gap-6 font-['Nunito_Sans',sans-serif] text-white/50 text-[14px]">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
