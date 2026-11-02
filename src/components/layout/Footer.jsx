import { ArrowUpRight } from "lucide-react";
import RouteLink from "../ui/RouteLink";

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="footer-grass grass-back" />
      <div className="footer-grass grass-front" />
      <div className="container footer-grid">
        <div>
          <RouteLink className="brand footer-brand" href="/">
            <span className="brand-mark">
              <img src="/images/branding/pjmc-logo.png" alt="" />
            </span>
            <span>
              Phulo Jhano<span>PJMCH</span>
            </span>
          </RouteLink>
          <p>
            {t("Phulo Jhano Medical College", "फूलो झानो मेडिकल कॉलेज")}
            <br />
            {t("& Hospital, Dumka.", "एवं अस्पताल, दुमका।")}
          </p>
        </div>
        <div>
          <b>{t("Explore", "जानकारी")}</b>
          <RouteLink href="/care">{t("Our care", "हमारी सेवाएं")}</RouteLink>
          <RouteLink href="/doctors">
            {t("Our doctors", "हमारे डॉक्टर")}
          </RouteLink>
          <RouteLink href="/about">{t("About us", "हमारे बारे में")}</RouteLink>
        </div>
        <div>
          <b>{t("Visit us", "हमसे मिलें")}</b>
          <span>Dighi, Dumka, Jharkhand</span>
          <span>
            {t("PIN 814101 · Open 24 hours", "पिन 814101 · 24 घंटे खुले")}
          </span>
          <a
            href="https://dumkamedicalcollege.org/"
            target="_blank"
            rel="noreferrer"
          >
            {t("Official website", "आधिकारिक वेबसाइट")}{" "}
            <ArrowUpRight size={14} />
          </a>
        </div>
        <div>
          <b>{t("Stay informed", "जानकारी पाएं")}</b>
          <span className="newsletter-text">
            {t(
              "Health updates and services from our hospital.",
              "हमारे अस्पताल की स्वास्थ्य सेवाओं और अपडेट की जानकारी।",
            )}
          </span>
          <div className="newsletter">
            <input
              placeholder={t("Your email address", "आपका ईमेल पता")}
              aria-label={t("Your email address", "आपका ईमेल पता")}
            />
            <button aria-label={t("Subscribe", "सब्सक्राइब करें")}>
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2024 Phulo Jhano Medical College & Hospital.</span>
        <span>
          {t(
            "Privacy · Accessibility · Patient portal",
            "गोपनीयता · सुगम्यता · मरीज पोर्टल",
          )}
        </span>
      </div>
    </footer>
  );
}
