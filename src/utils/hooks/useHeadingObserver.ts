import { useEffect, useRef, useState } from "react";

export function useHeadingObserver() {
  const observer = useRef<IntersectionObserver>();
  const [activeId, setActiveId] = useState<Record<string, boolean>>();

  useEffect(() => {
    const elements = document.querySelectorAll("h2, h3, h4");
    console.log("started useEffect");
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
          console.log("activeId", activeId);
        }
      });
    };
    observer.current = new IntersectionObserver(handleObserver, {
      threshold: 1.0,
    });

    elements.forEach((elem) => observer.current?.observe(elem));

    return () => {
      observer.current?.disconnect;
    };
  }, [activeId]);

  return { activeId };
}
