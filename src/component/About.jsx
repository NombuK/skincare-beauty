import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const image = document.querySelector(".animate-slide-left");
    const paragraph = document.querySelector(".animate-slide-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("opacity-100");
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(image);
    observer.observe(paragraph);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-0 mt-10 bg-lightBrown h-full md:-mr-7">
      <div className="w-full flex justify-center opacity-0 animate-slide-left">
        <img
          src="public/images/combo4.jpg"
          alt=""
          className="w-1/2 md:1/2 md:h-3/4 md:ml-[200px] rounded-md ml-5 items-center text-center justify-center mt-10 "
        />
      </div>
      <div className="w-full md:w-2/3 flex flex-col items-center mt-2 md:items-start text-center md:mt-10 md:mr-[150px] md:text-center opacity-0 animate-slide-right">
        <h1 className="capitalize text-darkerBrown font-nova mb-3 text-3xl font-extrabold md:w-full md:text-center md:items-center">
          Radiance begins with self-care
        </h1>
        <p className="text-darkBrown font-algeria text-lg  w-2/3 mx-auto mb-10 md:justify-start md:text-xl">
          Our mission is simple: to empower you to feel confident in your own
          skin. We believe that skincare is more than just a routine; it's a
          moment of self-love and self-care. With every product, we aim to
          nourish, rejuvenate, and reveal your skin’s natural beauty, helping
          you glow from the inside out. Because when you take care of yourself,
          you radiate with confidence—inside and out.
        </p>
      </div>
    </div>
  );
}
