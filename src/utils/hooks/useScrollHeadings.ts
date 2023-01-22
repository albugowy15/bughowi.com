import { useEffect, useState } from "react";

export default function useScrollHeadings(): {
  currentVisibles: Record<string, boolean>;
  currentSection: string;
} {
  // @ts-ignore
  const [currentSection, setCurrentSection] = useState<string>(undefined);
  const [currentVisibles, setCurrentVisibles] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    const itemElements = document.querySelectorAll<HTMLElement>("h2, h3, h4");
    if (!itemElements.length) return () => {};

    const observerCallback: IntersectionObserverCallback = (entries) => {
      const { target, isIntersecting } = entries[0];
      const slug = target.id as string;

      setCurrentVisibles((prev) => ({
        ...prev,
        [slug]: isIntersecting,
      }));

      if (isIntersecting) {
        setCurrentSection(slug);
      }
    };

    const observers: Array<IntersectionObserver> = [];

    itemElements.forEach((item) => {
      const observer = new IntersectionObserver(observerCallback, {
        rootMargin: "-15% 0px -10% 0px",
        threshold: 1.0,
      });

      observers.push(observer);
      observer.observe(item);
    });
    console.log(currentVisibles);

    return () => {
      observers.forEach((observer) => observer.disconnect);
    };
  }, [currentSection]);

  return {
    currentSection,
    currentVisibles,
  };
}
