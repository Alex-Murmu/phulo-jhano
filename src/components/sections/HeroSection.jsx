import { CalendarDays, Check } from "lucide-react";
import TextReveal from "../motion/TextReveal";

export default function HeroSection({ t, onBook }) {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />{" "}
            {t(
              "Government healthcare for everyone",
              "सभी के लिए सरकारी स्वास्थ्य सेवा",
            )}
          </div>
          <div className="hospital-label">
            ✦{" "}
            {t(
              "Government Medical College & Hospital",
              "सरकारी मेडिकल कॉलेज एवं अस्पताल",
            )}
          </div>
          <h1 key={t("en", "hi")}>
            <TextReveal as="span" text={t("Phulo Jhano", "फूलो झानो")} />
            <br />
            <em>
              <TextReveal
                as="span"
                text={t("Medical Hospital", "मेडिकल हॉस्पिटल")}
                delay={0.45}
                stagger={0.07}
              />
            </em>
          </h1>
          <p className="hero-text">
            {t(
              "Quality healthcare, medical education, and public service for Dumka and the Santhal Pargana region.",
              "दुमका और संथाल परगना क्षेत्र के लिए गुणवत्तापूर्ण स्वास्थ्य सेवा, चिकित्सा शिक्षा और जनसेवा।",
            )}
          </p>
          <div className="trust-row">
            <div className="avatar-stack">
              <img src="https://i.pravatar.cc/80?img=47" alt="" />
              <img src="https://i.pravatar.cc/80?img=32" alt="" />
              <img src="https://i.pravatar.cc/80?img=12" alt="" />
              <span className="avatar-more">+</span>
            </div>
            <div>
              <strong>{t("Trusted care", "विश्वसनीय देखभाल")}</strong>
              <span>{t("for our whole community", "पूरे समुदाय के लिए")}</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
          <div className="image-frame">
            <img
              src="https://dumkamedicalcollege.org/assets/hospital1-DGv81ylZ.webp"
              alt="Phulo Jhano Medical College and Hospital campus"
            />
          </div>
          <div className="hero-image-shade" />
          <div className="floating-card appointment-card">
            <span className="float-icon">
              <CalendarDays size={18} />
            </span>
            <div>
              <b>{t("Same-week visits", "इसी सप्ताह जांच")}</b>
              <small>
                {t("Care when you need it", "जब जरूरत हो तब देखभाल")}
              </small>
            </div>
            <Check size={18} className="check-icon" />
          </div>
          <div className="scribble">
            {t("care that", "देखभाल जो")}
            <br />
            <span>{t("feels human", "इंसानी लगे")}</span>
          </div>
        </div>
      </div>
      <div className="hero-bottom container">
        <span>
          {t(
            "Dighi, Dumka, Jharkhand · PIN 814101",
            "दिघी, दुमका, झारखंड · पिन 814101",
          )}
        </span>
      </div>
    </section>
  );
}
