import { ArrowUpRight } from "lucide-react";
import RouteLink from "../ui/RouteLink";

export default function PageIntro({ t, eyebrow, title, highlight, description, children }) {
  return <section className="page-intro"><div className="container"><div className="section-kicker">{eyebrow}</div><h1>{title}<br /><em>{highlight}</em></h1><p>{description}</p>{children || <RouteLink href="/appointments" className="button">{t("Book an appointment", "अपॉइंटमेंट बुक करें")} <ArrowUpRight size={17} /></RouteLink>}</div></section>;
}
