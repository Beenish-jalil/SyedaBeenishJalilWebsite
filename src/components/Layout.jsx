import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/lib/utils";
import { CONTACT_EMAIL, IMG } from "@/data/site";

const navItems = [
  { title: "Home", url: createPageUrl("Home"), pageName: "Home" },
  { title: "About", url: createPageUrl("About"), pageName: "About" },
  { title: "Services", url: createPageUrl("Services"), pageName: "Services" },
  { title: "Fees", url: createPageUrl("Fees"), pageName: "Fees" },
  { title: "FAQ", url: createPageUrl("FAQ"), pageName: "FAQ" },
  { title: "Contact", url: createPageUrl("Contact"), pageName: "Contact" },
];
const footerLinks = [...navItems, { title: "Blog", url: createPageUrl("Blog"), pageName: "Blog" }];

const globalStyles = `
  .header-transition {
    transition: transform 0.3s ease-in-out, background-color 0.3s ease, box-shadow 0.3s ease;
  }
  .scroll-fade-in {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease forwards;
  }
  @keyframes fadeInUp {
    to { opacity: 1; transform: translateY(0); }
  }
`;

// The original Base44 app always passed "Home" as the current page, so "Home" is the
// highlighted nav item on every page. Kept as-is for an exact match.
export default function Layout({ children, currentPageName = "Home" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);
      if (y < lastScrollY || y < 100) setHeaderVisible(true);
      else if (y > lastScrollY && y > 100) setHeaderVisible(false);
      setLastScrollY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-background">
      <style>{globalStyles}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 header-transition ${headerVisible ? "translate-y-0" : "-translate-y-full"} ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#faf1e7]">
          <div className="flex items-center justify-between h-20">
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <img
                src={IMG.logo}
                alt="Heart To Soul Psychotherapy Logo"
                className="w-14 h-14 rounded-full object-cover transform group-hover:scale-105 transition-transform duration-300 shadow-md"
              />
              <div className="hidden sm:block">
                <h1 className={`font-bold text-xl text-primary ${isScrolled ? "text-gray-900" : ""}`}>Heart To Soul Psychotherapy</h1>
                <p className={`text-sm text-primary/[0.9] ${isScrolled ? "text-gray-600" : ""}`}>Mental Health &amp; Wellness</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`font-medium transition-colors duration-200 hover:text-[#9D7438] text-[#9D7438]/[0.9] ${
                    currentPageName === item.pageName ? (isScrolled ? "text-[#9D7438]" : "") : isScrolled ? "text-gray-700" : ""
                  }`}
                >
                  {item.title}
                </Link>
              ))}
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-gradient-to-r from-[#E97D53] to-[#9D7438] hover:from-[#d96d43] hover:to-[#8d6428] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  Book free Consultation
                </Button>
              </Link>
            </nav>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg ${isScrolled ? "text-gray-900" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-[hsl(var(--foreground))]" />
              ) : (
                <Menu className="w-6 h-6 text-[hsl(var(--foreground))]" />
              )}
            </button>
          </div>

          {mobileOpen && (
            <div className="lg:hidden py-4 bg-white rounded-b-lg shadow-xl">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    onClick={() => setMobileOpen(false)}
                    className={`font-medium py-2 px-4 transition-colors duration-200 ${
                      currentPageName === item.pageName
                        ? "text-[#9D7438] bg-[#f9f4f0]"
                        : "text-gray-700 hover:text-[#9D7438] hover:bg-[#f9f4f0]"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="px-4">
                  <Link to={createPageUrl("Contact")} onClick={() => setMobileOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-[#E97D53] to-[#9D7438] hover:from-[#d96d43] hover:to-[#8d6428] text-white">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={IMG.logo} alt="Heart To Soul Psychotherapy Logo" className="w-12 h-12 rounded-full object-cover shadow-md" />
                <div>
                  <h3 className="font-bold text-lg">Heart to Soul Psychotherapy</h3>
                  <p className="text-sm text-gray-400">Mental Health &amp; Wellness</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Empowering individuals, families and communities with practical mental health support.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                {footerLinks.map((item) => (
                  <Link key={item.title} to={item.url} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {CONTACT_EMAIL}
                </a>
                <a
                  href="tel:+14166880131"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  (416) 688 0131
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 Heart To Soul Psychotherapy. OCN/BIN 100816670. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
