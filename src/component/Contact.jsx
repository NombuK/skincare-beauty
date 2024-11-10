import React from "react";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <AnimatedSection animationClass="animate__slideInFromLeft">
      <div>
        <section className="bg-lightBrown py-16 text-black">
          <div className="container flex flex-col gap-5 md:items-center md:flex-row">
            <div className="space-y-4 md:flex-1">
              <h2 className="text-4xl font-nova font-bold uppercase lg:text-5xl text-darkerBrown">
                GET EXCLUSIVE UPDATE
              </h2>
              <p className="text-darkBrown">
                Unlock exclusive offers, early access to new products, and
                special discounts. Subscribe now and start enjoying the perks!
              </p>
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:flex-1">
              <input
                type="email"
                placeholder="Email Address"
                className="p-2 text-blackColor rounded-lg outline-none md:w-full"
              />
              <a
                href=""
                className="flex items-center justify-center p-3 rounded-2xl gap-2 btn bg-darkBrown hover:opacity-75"
              >
                <i className="fa-solid fa-paper-plane"></i>
                Subscribe
              </a>
            </div>
          </div>
        </section>
      </div>
    </AnimatedSection>
  );
}
