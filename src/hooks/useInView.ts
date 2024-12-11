"use client";
import { useEffect, useRef, useState } from "react";

export const useInView = <T extends HTMLElement>() => {
  const [inView, setInView] = useState(false);

  const ref = useRef<T | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (ref.current) {
      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          if (!inView) setInView(true);
        }
      });

      observer.current.observe(ref.current);

      return () => {
        if (ref.current) {
          observer.current?.unobserve(ref.current);
        }
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
};
