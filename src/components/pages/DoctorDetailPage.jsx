import {
  CalendarDays,
  Clock3,
  GraduationCap,
  Languages,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { doctors } from "../../data/content";
import PageIntro from "./PageIntro";
import RouteLink from "../ui/RouteLink";

export default function DoctorDetailPage({ t, slug }) {
  const doctor = doctors.find(
    (item) =>
      item.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") === slug,
  );
  if (!doctor)
    return (
      <PageIntro
        t={t}
        eyebrow={t("DOCTOR NOT FOUND", "डॉक्टर नहीं मिला")}
        title={t("Return to", "वापस जाएं")}
        highlight={t("our doctors.", "हमारे डॉक्टरों पर।")}
        description={t(
          "The requested doctor profile could not be found.",
          "अनुरोधित डॉक्टर प्रोफाइल नहीं मिली।",
        )}
      >
        <RouteLink href="/doctors" className="button">
          {t("View doctors", "डॉक्टर देखें")}
        </RouteLink>
      </PageIntro>
    );
  return (
    <>
      <PageIntro
        t={t}
        eyebrow={doctor.specialty.toUpperCase()}
        title={doctor.name}
        highlight={t("Doctor profile", "डॉक्टर प्रोफाइल")}
        description={doctor.expertise}
      />
      <section className="page-content container doctor-detail-page">
        <img src={doctor.image} alt={doctor.name} />
        <div className="doctor-detail-page-copy">
          <span className="doctor-modal-status">
            <span /> {t("Available for consultation", "परामर्श के लिए उपलब्ध")}
          </span>
          <div className="doctor-detail-grid">
            <div className="doctor-detail">
              <GraduationCap size={18} />
              <div>
                <b>{t("Education", "शिक्षा")}</b>
                <span>{doctor.education}</span>
              </div>
            </div>
            <div className="doctor-detail">
              <Clock3 size={18} />
              <div>
                <b>{t("Experience", "अनुभव")}</b>
                <span>{doctor.experience}</span>
              </div>
            </div>
            <div className="doctor-detail">
              <ShieldCheck size={18} />
              <div>
                <b>{t("Registration", "पंजीकरण")}</b>
                <span>{doctor.registration}</span>
              </div>
            </div>
            <div className="doctor-detail">
              <Languages size={18} />
              <div>
                <b>{t("Languages", "भाषाएं")}</b>
                <span>{doctor.languages}</span>
              </div>
            </div>
            <div className="doctor-detail doctor-detail-wide">
              <CalendarDays size={18} />
              <div>
                <b>{t("Consultation hours", "परामर्श का समय")}</b>
                <span>{doctor.availability}</span>
              </div>
            </div>
            <div className="doctor-detail doctor-detail-wide">
              <MapPin size={18} />
              <div>
                <b>{t("Consultation location", "परामर्श स्थान")}</b>
                <span>
                  {t(
                    "Outpatient Department · PJMC Dumka",
                    "बाह्य रोगी विभाग · पीजेएमसी दुमका",
                  )}
                </span>
              </div>
            </div>
          </div>
          <RouteLink href="/appointments" className="button">
            {t("Book an appointment", "अपॉइंटमेंट बुक करें")}
          </RouteLink>
        </div>
      </section>
    </>
  );
}
