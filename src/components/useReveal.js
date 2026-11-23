"use client";

import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const show = (el) => {
      el.classList.remove("opacity-0", "translate-y-16");
      el.classList.add("opacity-100", "translate-y-0");
    };
    const elements = document.querySelectorAll(".reveal-element");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      elements.forEach(show);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
