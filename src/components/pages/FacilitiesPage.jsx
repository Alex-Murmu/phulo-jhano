import { facilities } from "../../data/content";
import PageIntro from "./PageIntro";

export default function FacilitiesPage({ t, isHindi }) {
  return <><PageIntro t={t} eyebrow={t("PJMC CAMPUS", "पीजेएमसी परिसर")} title={t("Built for", "आपके लिए")} highlight={t("better care.", "बेहतर देखभाल।")} description={t("Explore the people, spaces, and facilities that make Phulo Jhano Medical College & Hospital a public-care landmark in Dumka.", "फूलो झानो मेडिकल कॉलेज एवं अस्पताल, दुमका को जनसेवा का महत्वपूर्ण केंद्र बनाने वाले लोग, स्थान और सुविधाएं।")} /><section className="page-content container"><div className="facility-directory-grid">{facilities.map((facility) => <article key={facility.title}><img src={facility.image} alt={facility.title} /><div><h2>{isHindi ? facility.hi : facility.title}</h2><p>{t("Supporting patients, learners, families, and the wider community.", "मरीजों, विद्यार्थियों, परिवारों और पूरे समुदाय का सहयोग।")}</p></div></article>)}</div></section></>;
}
