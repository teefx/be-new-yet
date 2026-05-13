import { Facebook, Instagram, Youtube } from "lucide-react";
import imgBnLogo1 from "../../imports/MacBookPro141/96ea11a6defa3aeac356a056e4c25b4113d2ebc2.png";

const Footer = () => {
  return (
    <footer className="bg-[#0f0014] pt-[80px] pb-[40px] px-6 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-[60px]">
        {/* Brand */}
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-4">
            <img src={imgBnLogo1} alt="Logo" className="w-10 object-contain" />
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
              href="/#about"
              className="hover:text-[#ab00e4] transition-colors"
            >
              About Us
            </a>
            <a
              href="/worship-centres"
              className="hover:text-[#ab00e4] transition-colors"
            >
              Worship Centres
            </a>
            <a
              href="/#events"
              className="hover:text-[#ab00e4] transition-colors"
            >
              Events & Programs
            </a>
            <a href="/give" className="hover:text-[#ab00e4] transition-colors">
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
              Ago-Tente Area, <br />
              Ibadan, Oyo State, Nigeria
            </p>
            <p className="hover:text-[#ab00e4] transition-colors cursor-pointer">
              info@benewyet.org
            </p>
            <p className="hover:text-[#ab00e4] transition-colors cursor-pointer">
              07012136313 - John (Youth PRO)
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
              href="https://www.facebook.com/profile.php?id=61579341313230"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#ab00e4] hover:scale-110 transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/bncec_youth/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#ab00e4] hover:scale-110 transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@be-newyouth"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#ab00e4] hover:scale-110 transition-all"
            >
              <Youtube className="w-5 h-5" />
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
  );
};

export default Footer;
