import { ArrowUpRight, CalendarDays, Clock3, GraduationCap, Languages, MapPin, ShieldCheck, X } from "lucide-react";
import Button from "./Button";

export default function DoctorProfileModal({ doctor, t, isHindi, onClose, onBook }) {
  if (!doctor) return null;
  const detail = (english, hindi) => isHindi ? hindi : english;
  return <div className="modal-backdrop" onClick={(event) => event.target === event.currentTarget && onClose()}><div className="doctor-modal">
    <button className="modal-close" onClick={onClose} aria-label={t("Close", "बंद करें")}><X size={20} /></button>
    <div className="doctor-modal-header"><img src={doctor.image} alt={doctor.name} /><div><span className="doctor-modal-status"><span /> {detail("Available for consultation", "परामर्श के लिए उपलब्ध")}</span><h2>{doctor.name}</h2><p>{doctor.specialty}</p><small>{detail("Phulo Jhano Medical College & Hospital", "फूलो झानो मेडिकल कॉलेज एवं अस्पताल")}</small></div></div>
    <div className="doctor-detail-grid">
      <div className="doctor-detail"><GraduationCap size={18} /><div><b>{detail("Education", "शिक्षा")}</b><span>{doctor.education}</span></div></div>
      <div className="doctor-detail"><Clock3 size={18} /><div><b>{detail("Experience", "अनुभव")}</b><span>{doctor.experience}</span></div></div>
      <div className="doctor-detail"><ShieldCheck size={18} /><div><b>{detail("Registration", "पंजीकरण")}</b><span>{doctor.registration}</span></div></div>
      <div className="doctor-detail"><Languages size={18} /><div><b>{detail("Languages", "भाषाएं")}</b><span>{doctor.languages}</span></div></div>
      <div className="doctor-detail doctor-detail-wide"><CalendarDays size={18} /><div><b>{detail("Consultation hours", "परामर्श का समय")}</b><span>{doctor.availability}</span></div></div>
      <div className="doctor-detail doctor-detail-wide"><MapPin size={18} /><div><b>{detail("Consultation location", "परामर्श स्थान")}</b><span>{detail("Outpatient Department · PJMC Dumka", "बाह्य रोगी विभाग · पीजेएमसी दुमका")}</span></div></div>
    </div>
    <div className="doctor-expertise"><b>{detail("Areas of expertise", "विशेषज्ञता के क्षेत्र")}</b><p>{doctor.expertise}</p></div>
    <Button onClick={onBook}>{detail("Book an appointment", "अपॉइंटमेंट बुक करें")} <ArrowUpRight size={17} /></Button>
  </div></div>;
}
