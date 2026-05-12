import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import imgBnLogo1 from "../../imports/MacBookPro141/96ea11a6defa3aeac356a056e4c25b4113d2ebc2.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Worship Centres", href: "/worship-centres" },
    { name: "Conference", href: "/conference" },
    { name: "Give", href: "/give" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-[44px] bg-[#0f0014]/95 backdrop-blur-sm border-b border-white/5 transition-all duration-300 ${
        scrolled ? "py-3 shadow-lg" : "py-6"
      }`}
    >
      {/* Brand & Logo */}
      <a href="/" className="flex items-center gap-4 group">
        <img
          src={imgBnLogo1}
          alt="Logo"
          className={`object-contain group-hover:scale-110 transition-all duration-300 ${
            scrolled ? "w-8 md:w-10" : "w-10 md:w-12"
          }`}
        />
        <div
          className={`font-['Anton',sans-serif] text-white leading-tight uppercase transition-all duration-300 ${
            scrolled
              ? "text-[10px] sm:text-[12px] lg:text-[15px]"
              : "text-[11px] sm:text-[14px] lg:text-[18px]"
          }`}
        >
          <p>BE-NEW IN CHRIST EVANGELICAL CHURCH</p>
          <p className="text-[#ab00e4] mt-[2px] sm:mt-1">
            YOUTH EVANGELICAL TEAM (YET)
          </p>
        </div>
      </a>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-8 font-['Nunito_Sans',sans-serif] font-bold text-[11px] text-white/80 tracking-[3px] uppercase">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-[#ab00e4] transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Mobile Toggle */}
      <button
        className="lg:hidden text-white hover:text-[#ab00e4] transition-colors"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-8 h-8" />
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-[#21002c]/95 backdrop-blur-xl flex flex-col lg:hidden w-full h-[100dvh] overflow-y-auto">
          <button
            className="absolute top-[24px] right-[24px] z-10 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="flex-1 flex flex-col items-center justify-center min-h-max py-[80px]">
            <nav className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-['Anton',sans-serif] text-white text-[28px] tracking-[2px] uppercase hover:text-[#ab00e4] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
