import { navigate } from "../../hooks/useRouter";

export default function RouteLink({ href, children, className = "", onClick, ...props }) {
  return <a href={href} className={className} onClick={(event) => {
    if (href.startsWith("/")) {
      event.preventDefault();
      navigate(href);
    }
    onClick?.(event);
  }} {...props}>{children}</a>;
}
