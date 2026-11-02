import { services } from "../../data/content";
import { ArrowUpRight, Check } from "lucide-react";
import PageIntro from "./PageIntro";
import RouteLink from "../ui/RouteLink";
import { governmentSchemes, hospitalServiceGroups } from "../../data/content";

export default function CarePage({ t, isHindi }) {
  return (
    <>
      <PageIntro
        t={t}
        eyebrow={t("OUR SERVICES", "हमारी सेवाएं")}
        title={t("Care for every", "हर जरूरत के लिए")}
        highlight={t("stage of life.", "विशेषज्ञ देखभाल।")}
        description={t(
          "Explore government healthcare services delivered by a connected team of doctors, nurses, and support staff.",
          "डॉक्टरों, नर्सों और सहयोगी कर्मचारियों की टीम द्वारा दी जाने वाली सरकारी स्वास्थ्य सेवाएं।",
        )}
      />
      <section className="page-content container">
        <div className="service-directory-grid">
          {services.map(({ icon: Icon, title, hi, text, hitext, tone }) => (
            <article className={`service-directory-card ${tone}`} key={title}>
              <span className="directory-icon">
                <Icon size={28} />
              </span>
              <h2>{isHindi ? hi : title}</h2>
              <p>{isHindi ? hitext : text}</p>
              <RouteLink
                href="/appointments"
                className="round-arrow"
                aria-label={t("Book this service", "इस सेवा की बुकिंग करें")}
              >
                <ArrowUpRight size={18} />
              </RouteLink>
            </article>
          ))}
        </div>
        <div className="hospital-services-list">
          {hospitalServiceGroups.map((group) => {
            const images = group.images || [group.image];
            return (
              <article
                className={`hospital-service-group ${group.tone}`}
                key={group.title}
              >
                <div
                  className={`hospital-service-image ${images.length > 1 ? "has-multiple" : ""}`}
                >
                  {images.map((image, index) => (
                    <div className="hospital-service-image-frame" key={image}>
                      <img
                        src={image}
                        alt={`${isHindi ? group.hi : group.title} ${images.length > 1 ? `${index + 1}` : ""}`}
                      />
                    </div>
                  ))}
                </div>
                <div className="hospital-service-heading">
                  <div>
                    <div className="section-kicker">
                      {t("PJMC SERVICE DIRECTORY", "पीजेएमसी सेवा निर्देशिका")}
                    </div>
                    <h2>{isHindi ? group.hi : group.title}</h2>
                    <p>{isHindi ? group.hiIntro : group.intro}</p>
                  </div>
                  <span className="service-count">
                    {group.items.length} {t("services", "सेवाएं")}
                  </span>
                </div>
                <ul>
                  {group.items.map((item, index) => (
                    <li key={item}>
                      <Check size={15} />
                      {isHindi ? group.hiItems[index] : item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <section className="scheme-directory" aria-labelledby="government-schemes-title">
          <div className="section-heading scheme-directory-heading">
            <div>
              <div className="section-kicker">
                {t("GOVERNMENT SUPPORT", "सरकारी सहायता")}
              </div>
              <h2 id="government-schemes-title">
                {t("Schemes for treatment and care.", "उपचार और देखभाल की योजनाएं।")}
              </h2>
            </div>
            <p>
              {t(
                "Eligibility, benefits, and documents must be confirmed with the hospital help desk.",
                "पात्रता, लाभ और दस्तावेज की पुष्टि अस्पताल हेल्प डेस्क से करें।",
              )}
            </p>
          </div>
          <div className="scheme-grid">
            {governmentSchemes.map((scheme) => (
              <article className="scheme-card" key={scheme.title}>
                <img
                  src={scheme.image}
                  alt={isHindi ? scheme.hi : scheme.title}
                  className={`scheme-image ${scheme.title.includes("PM-JAY") ? "scheme-image-logo" : ""}`}
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = scheme.title.includes("PM-JAY")
                      ? "/images/schemes/pmjay-logo.png"
                      : "/images/branding/pjmc-logo.png";
                  }}
                />
                <div className="scheme-card-content">
                  <span className="scheme-category">
                    {isHindi ? scheme.hiCategory : scheme.category}
                  </span>
                  <h3>{isHindi ? scheme.hi : scheme.title}</h3>
                  <p className="scheme-summary">
                    {isHindi ? scheme.hiSummary : scheme.summary}
                  </p>
                  <ul>
                    {(isHindi ? scheme.hiDetails : scheme.details).map((detail) => (
                      <li key={detail}>
                        <Check size={15} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="scheme-links">
                    {scheme.links.map(([label, href]) => (
                      <a href={href} target="_blank" rel="noreferrer" key={href}>
                        {label}
                        <ArrowUpRight size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="scheme-documents">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=85"
              alt={t("Ration card and document checklist illustration", "राशन कार्ड और दस्तावेज चेकलिस्ट चित्र")}
            />
            <div>
              <div className="section-kicker">
                {t("DOCUMENT CHECKLIST", "दस्तावेज चेकलिस्ट")}
              </div>
              <h3>{t("Bring the documents you have.", "उपलब्ध दस्तावेज साथ लाएं।")}</h3>
            </div>
            <ul>
              {(isHindi
                ? [
                    "राशन कार्ड या परिवार पहचान दस्तावेज",
                    "आधार या अन्य सरकारी पहचान पत्र",
                    "मोबाइल नंबर और पता प्रमाण",
                    "पुराने उपचार रिकॉर्ड, जांच रिपोर्ट और प्रिस्क्रिप्शन",
                    "गर्भावस्था या बच्चे से जुड़े रिकॉर्ड, जहां लागू हो",
                  ]
                : [
                    "Ration card or family beneficiary document",
                    "Aadhaar or another government identity document",
                    "Mobile number and address proof",
                    "Previous treatment records, reports, and prescriptions",
                    "Pregnancy or child health records, where applicable",
                  ]
              ).map((document) => (
                <li key={document}>
                  <Check size={15} />
                  {document}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <div className="service-disclaimer">
          {t(
            "Service availability, OPD timings, and scheme eligibility can change. Please confirm current details with the hospital help desk before visiting.",
            "सेवा उपलब्धता, ओपीडी समय और योजना पात्रता बदल सकती है। आने से पहले अस्पताल हेल्प डेस्क से वर्तमान जानकारी की पुष्टि करें।",
          )}
        </div>
      </section>
    </>
  );
}
