import React from "react";
import AnimatedSection from "./AnimatedSection";

export default function Footer() {
  return (
    <AnimatedSection animationClass="animate__fadeInUp">
      <div className="bg-brown">
        <div className="container bg-brown animate-slide-from-below">
          <ul className="grid grid-cols-1 items-start gap-5 pb-5 md:grid-cols-2 lg:grid-cols-4">
            <li>
              <div className="space-y-3">
                <a
                  href=""
                  className="text-4xl text-darkBrown font-oswald uppercase"
                >
                  Skin<span className="text-lightBrown">Care</span>
                </a>
                <p className="text-sm font-dmsans text-lightBrown">
                  Welcome to Burger Place, where passion meets flavor. Our
                  mission is to serve high-quality, delicious food that brings
                  people together. We're dedicated to providing exceptional
                  customer service, supporting local suppliers, and making every
                  dining experience unforgettable.
                </p>
              </div>
            </li>

            <li>
              <div className="flex flex-col gap-3 text-white">
                <h3 className="text-2xl uppercase font-oswald text-darkerBrown">
                  SUPPORT
                </h3>
                <a href="" className="text-sm hover:text-darkerBrown">
                  FAQs
                </a>
                <a href="" className="text-sm hover:text-darkerBrown">
                  Privacy Policy
                </a>
                <a href="" className="text-sm hover:text-darkerBrown">
                  Terms & Conditions
                </a>
                <a href="" className="text-sm hover:text-darkerBrown">
                  Contact
                </a>
              </div>
            </li>

            <li className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl uppercase font-oswald text-darkerBrown">
                  phone
                </h3>
                <p className="flex items-center gap-2 text-sm text-white">
                  <i className="fa-solid fa-phone text-lg text-darkerBrown"></i>
                  +098764521333
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl uppercase font-oswald text-darkerBrown">
                  email
                </h3>
                <p className="flex items-center gap-2 text-sm text-white">
                  <i className="fa-solid fa-envelope text-lg text-darkerBrown"></i>
                  burger.info@gmail.co.za
                </p>
              </div>
            </li>

            <li className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl uppercase font-oswald text-darkerBrown">
                  address
                </h3>
                <p className="flex items-center gap-2 text-sm text-white">
                  <i className="fa-solid fa-location-dot text-lg text-darkerBrown"></i>
                  23 Bradford Kensly Street, NYC
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl uppercase font-oswald text-darkerBrown">
                  Follow Us
                </h3>
                <div className="space-x-3">
                  <i className="fa-brands fa-facebook text-xl text-darkerBrown cursor-pointer hover:translate-y-1 ease-in duration-200"></i>
                  <i className="fa-brands fa-twitter text-xl text-darkerBrown cursor-pointer hover:translate-y-1 ease-in duration-200"></i>
                  <i className="fa-brands fa-square-instagram text-xl text-darkerBrown cursor-pointer hover:translate-y-1 ease-in duration-200"></i>
                </div>
              </div>
            </li>
          </ul>

          <div className="flex flex-col text-darkerBrown dark:border-darkColorLight items-center border-t border-primaryColor py-5 md:flex-row md:justify-between">
            <p className="font-dmsans font-bold">
              SKINCARE BEAUTY by Nombulelo Khumalo
            </p>
            <p className="font-dmsans font-bold">
              Copyright © 2024. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
