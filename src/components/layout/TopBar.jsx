import { Phone } from "lucide-react";

export default function TopBar({ t }) {
  return (
    <div className="topline">
      <div className="container topline-inner">
        <span>
          <span className="status-dot" />{" "}
          {t("Open 24 hours, 7 days a week", "24 घंटे, सप्ताह के 7 दिन खुले")}
        </span>
        <span className="topline-right">
          <span className="topline-badges">
            <b>{t("PUBLIC CARE", "जनसेवा")}</b>
            <b>{t("OPEN TO ALL", "सभी के लिए")}</b>
            <b>24 / 7</b>
            <b>{t("COMMUNITY FIRST", "समुदाय प्रथम")}</b>
          </span>
          <span className="topline-emergency">
            <Phone size={14} /> {t("Emergency:", "आपातकाल:")}{" "}
            <strong>+1 (800) 555-0199</strong>
          </span>
        </span>
      </div>
    </div>
  );
}
