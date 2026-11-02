import { doctors } from "../../data/content";
import { ArrowUpRight, CalendarDays, Clock3, GraduationCap, Languages, MapPin, ShieldCheck } from "lucide-react";
import PageIntro from "./PageIntro";
import RouteLink from "../ui/RouteLink";

export default function DoctorsPage({ t, isHindi }) {
  return <><PageIntro t={t} eyebrow={t("OUR CARE TEAM", "हमारी चिकित्सा टीम")} title={t("Meet your", "अपने")} highlight={t("doctors.", "डॉक्टरों से मिलें।")} description={t("Experienced doctors and caring specialists serving Dumka and the Santhal Pargana region.", "दुमका और संथाल परगना क्षेत्र की सेवा करने वाले अनुभवी डॉक्टर और विशेषज्ञ।")} /><section className="page-content container"><div className="directory-grid">{doctors.map((doctor) => <article className="doctor-directory-card" key={doctor.name}><div className="doctor-directory-top"><img src={doctor.image} alt={doctor.name} /><div><span className="doctor-modal-status"><span /> {t("Available for consultation", "परामर्श के लिए उपलब्ध")}</span><h2>{doctor.name}</h2><p>{doctor.specialty}</p><small>{doctor.experience} · {doctor.languages}</small></div></div><div className="doctor-directory-details"><span><GraduationCap size={15} />{doctor.education}</span><span><CalendarDays size={15} />{doctor.availability}</span><span><MapPin size={15} />{t("Outpatient Department · PJMC Dumka", "बाह्य रोगी विभाग · पीजेएमसी दुमका")}</span></div><RouteLink href="/appointments" className="text-link">{t("Book with this doctor", "इस डॉक्टर के साथ अपॉइंटमेंट लें")} <ArrowUpRight size={16} /></RouteLink></article>)}</div></section></>;
}
