import { ArrowUpRight, Phone } from "lucide-react";
import Button from "../ui/Button";

export default function AppointmentSection({ t, onBook }) {
  return (
    <section className="appointment-section container" id="appointment">
      <div className="appointment-inner">
        <div>
          <div className="section-kicker">
            {t("YOUR NEXT STEP", "आपका अगला कदम")}
          </div>
          <h2>
            {t("Let's make time", "अपने स्वास्थ्य के लिए")}
            <br />
            <span>{t("for your health.", "समय निकालें।")}</span>
          </h2>
          <p>
            {t(
              "Ready to feel your best? Our care team is here to help you find the right next step.",
              "बेहतर महसूस करने के लिए तैयार हैं? हमारी टीम आपके लिए सही अगला कदम चुनने में मदद करेगी।",
            )}
          </p>
        </div>
        <div className="appointment-actions">
          <Button onClick={onBook}>
            {t("Book an appointment", "अपॉइंटमेंट बुक करें")}{" "}
            <ArrowUpRight size={18} />
          </Button>
          <a className="phone-link" href="tel:18005550199">
            <Phone size={17} /> {t("Call", "कॉल करें")} +1 (800) 555-0199
          </a>
        </div>
      </div>
    </section>
  );
}
