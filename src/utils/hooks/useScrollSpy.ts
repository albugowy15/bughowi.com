import { useEffect, useRef, useState } from "react";

export const useScrollspy = (
  elements: Element[],
  options: { offset: number; root: HTMLElement | null }
) => {
  const [currentIntersectingElementIndex, setCurrentIntersectingElementIndex] =
    useState(-1);

  const rootMargin = `-${(options && options.offset) || 0}px 0px 0px 0px`;

  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        // find the index of the section that is currently intersecting
        const indexOfElementIntersecting = entries.findIndex((entry) => {
          return entry.intersectionRatio > 0;
        });

        // set this index to the state
        setCurrentIntersectingElementIndex(indexOfElementIntersecting);
      },
      {
        root: (options && options.root) || null,
        // use this option to handle custom offset
        rootMargin,
      }
    );

    const { current: currentObserver } = observer;

    // observe all the elements passed as argument of the hook
    elements.forEach((element) =>
      element ? currentObserver?.observe(element) : null
    );

    return () => currentObserver?.disconnect();
  }, [elements, options, rootMargin]);

  return [currentIntersectingElementIndex];
};
