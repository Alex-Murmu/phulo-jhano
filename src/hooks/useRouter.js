import { useEffect, useState } from "react";

export function navigate(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function useRouter() {
  const [path, setPath] = useState(window.location.pathname || "/");

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname || "/");
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return { path };
}
