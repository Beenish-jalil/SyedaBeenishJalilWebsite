import { useEffect, useRef } from "react";

// Adds the `scroll-fade-in` class to any `.animate-on-scroll` element once it enters the viewport.
export function useScrollAnimation() {
  const observer = useRef(null);
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("scroll-fade-in");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.current.observe(el));
    return () => observer.current && observer.current.disconnect();
  }, []);
}
