import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/content";
import RouteLink from "../ui/RouteLink";

export default function ServicesSection({ t, isHindi }) {
  return <section className="care-section" id="care"><div className="container"><div className="section-heading"><div><div className="section-kicker">{t("EXPLORE OUR CARE", "हमारी सेवाएं देखें")}</div><h2>{t("Expertise for every", "हर जरूरत के लिए")}<br /><span>{t("part of your life.", "विशेषज्ञ देखभाल।")}</span></h2></div><a className="text-link" href="#appointment">{t("View all services", "सभी सेवाएं देखें")} <ArrowUpRight size={17} /></a></div>        <div className="service-grid">{services.map(({ icon: Icon, title, hi, text, hitext, image, tone }) => <article className={`service-card ${tone}`} key={title}><div className="service-card-image"><img src={image} alt={isHindi ? hi : title} /><span className="service-icon"><Icon size={22} /></span></div><h3>{isHindi ? hi : title}</h3><p>{isHindi ? hitext : text}</p><RouteLink href="/appointments" aria-label={t(`Learn more about ${title}`, `${hi} के बारे में जानें`)}><ArrowUpRight size={19} /></RouteLink></article>)}</div></div></section>;
}
