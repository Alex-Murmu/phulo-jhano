import { MapPin } from "lucide-react";

export default function PatientStorySection({ t }) {
  return (
    <section className="quote-section" id="stories">
      <div className="container quote-grid">
        <div className="quote-image">
          <img
            src="https://dumkamedicalcollege.org/assets/hospital2-CMMp9IbK.webp"
            alt="Phulo Jhano Medical College and Hospital building"
          />
          <span className="image-label">
            <MapPin size={15} /> Dighi, Dumka
          </span>
        </div>
        <div className="quote-copy">
          <div className="quote-mark">“</div>
          <blockquote>
            {t(
              "They didn't just treat my symptoms. They took the time to understand my life.",
              "उन्होंने केवल मेरे लक्षणों का इलाज नहीं किया। उन्होंने मेरी जिंदगी को समझने के लिए समय दिया।",
            )}
          </blockquote>
          <div className="quote-author">
            <div className="author-avatar">P</div>
            <div>
              <b>{t("PJMC patient", "पीजेएमसी मरीज")}</b>
              <span>{t("Phulo Jhano community", "फूलो झानो समुदाय")}</span>
            </div>
          </div>
          <div className="quote-nav">
            <button aria-label="Previous story">←</button>
            <span>
              01 <i /> 03
            </span>
            <button aria-label="Next story">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
