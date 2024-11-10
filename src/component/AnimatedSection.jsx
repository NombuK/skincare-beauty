import React, { useEffect, useRef, useState } from "react";

const AnimatedSection = ({
  children,
  animationClass = "animate__fadeInUp animate__slideInFromLeft animate__slideInFromRight",
  threshold = 0.3,
}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger animation when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.isIntersecting);
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3, // Trigger when a percentage of the section is visible (default: 30%)
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ${
        isVisible ? animationClass : ""
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
