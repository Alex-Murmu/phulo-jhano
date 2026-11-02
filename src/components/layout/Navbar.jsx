import { ArrowUpRight, Menu, X } from "lucide-react";
import Button from "../ui/Button";
import RouteLink from "../ui/RouteLink";

export default function Navbar({ t, isHindi, language, setLanguage, menuOpen, setMenuOpen, onBook }) {
  return <header className="header"><div className="container header-inner">
    <RouteLink className="brand" href="/" aria-label="Phulo Jhano Medical College and Hospital home"><span className="brand-mark"><img src="/pjmc-logo.png" alt="" /></span><span>Phulo Jhano<span>PJMC</span></span></RouteLink>
    <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
      <RouteLink href="/care" onClick={() => setMenuOpen(false)}>{t("Our care", "हमारी सेवाएं")}</RouteLink>
      <RouteLink href="/doctors" onClick={() => setMenuOpen(false)}>{t("Our doctors", "हमारे डॉक्टर")}</RouteLink>
      <RouteLink href="/about" onClick={() => setMenuOpen(false)}>{t("About us", "हमारे बारे में")}</RouteLink>
      <RouteLink href="/facilities" onClick={() => setMenuOpen(false)}>{t("Facilities", "सुविधाएं")}</RouteLink>
      <button className="language-toggle" onClick={() => setLanguage(isHindi ? "en" : "hi")}>{isHindi ? "English" : "हिन्दी"}</button>
      <Button className="nav-cta" onClick={onBook}>{t("Book a visit", "अपॉइंटमेंट लें")} <ArrowUpRight size={17} /></Button>
    </nav>
    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={t("Toggle menu", "मेन्यू बदलें")}>{menuOpen ? <X /> : <Menu />}</button>
  </div></header>;
}
