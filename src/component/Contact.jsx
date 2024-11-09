import React from "react";

export default function Contact() {
  return (
    <div>
      <section class="bg-lightBrown py-16 text-black">
        <div class="container flex flex-col gap-5 md:items-center md:flex-row">
          <div class="space-y-4 md:flex-1">
            <h2 class="text-4xl font-nova font-bold uppercase lg:text-5xl text-darkerBrown">
              GET EXCLUSIVE UPDATE
            </h2>
            <p class="text-darkBrown ">
              Unlock exclusive offers, early access to new products, and special
              discounts. Subscribe now and start enjoying the perks!
            </p>
          </div>

          <div class="flex flex-col gap-3 md:flex-row md:flex-1">
            <input
              type="email"
              placeholder="Email Address"
              class="p-2 text-blackColor rounded-lg outline-none md:w-full"
            />
            <a
              href=""
              class="flex items-center justify-center p-3 rounded-2xl gap-2 btn bg-darkBrown hover:opacity-75"
            >
              <i class="fa-solid fa-paper-plane"></i>
              Subscribe
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
