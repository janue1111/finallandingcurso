import { useState, useEffect, RefObject } from 'react';

export function useStickyBanner(targetRef: RefObject<HTMLElement>) {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current) {
        const targetBottom = targetRef.current.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;

        if (targetBottom < viewportHeight) {
          setIsFixed(false);
        } else {
          setIsFixed(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetRef]);

  return isFixed;
}
