import { ArrowUpRight } from "lucide-react";
import { quickLinks } from "../../data/content";
import RouteLink from "../ui/RouteLink";

export default function QuickLinksSection({ t, isHindi }) {
  return <section className="quick-links-section container" aria-label={t("Quick access", "त्वरित सेवा")}>{quickLinks.map(({ icon: Icon, title, hi }, index) => <RouteLink className="quick-link" href={index === 0 ? "/care" : index === 1 ? "/doctors" : "/appointments"} key={title}><span className="quick-link-icon"><Icon size={20} /></span><span>{isHindi ? hi : title}</span><ArrowUpRight size={16} /></RouteLink>)}</section>;
}
