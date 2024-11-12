import React from "react";
import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import AnimatedSection from "./AnimatedSection";

export default function Review() {
  return (
    <AnimatedSection animationClass="animate__slideInFromRight">
      <section id="review" className="bg-brown py-20 dark:bg-gold">
        <div className="container">
          <div className="mx-w-md mx-auto text-center">
            <h2 className="text-4xl text-darkerBrown dark:text-black dark:font-bold font-nova font-bold uppercase lg:text-6xl">
              CUSTOMER REVIEW
            </h2>
            <p className="text-darkBrown dark:text-mildBlack mb-4">
              Find Out What Out Valued Customers Think
            </p>
          </div>

          <div className="swiper py-10 px-4">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={false}
              pagination={{ clickable: true }}
              loop
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              <SwiperSlide>
                <div className="flex flex-col gap-5 bg-lightBrown dark:bg-black rounded-lg p-6">
                  <p className="text-darkBrown dark:text-gold">
                    I've tried countless skincare products over the years, but
                    nothing has worked as well as this one. My skin feels
                    smoother, looks brighter, and the fine lines around my eyes
                    are less noticeable. I’m officially hooked!
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/images/female1.jpg"
                      alt="review"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-2 dark:text-white">
                      <p className="font-algeria uppercase dark:text-white">
                        Emily Thompson
                      </p>
                    </div>
                    <i className="fa-solid fa-quote-right text-4xl text-darkerBrown dark:text-gold ml-auto"></i>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col gap-5 bg-lightBrown dark:bg-black rounded-lg p-6">
                  <p className="text-darkBrown dark:text-gold">
                    After using this skincare line for just a few weeks, I
                    noticed a huge difference. My skin is clearer and feels more
                    hydrated, and the redness I used to struggle with has
                    diminished significantly. Highly recommend!
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/images/female1.jpg"
                      alt="review"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-2 dark:text-white">
                      <p className="font-algeria uppercase">Mandy Delgado</p>
                    </div>
                    <i className="fa-solid fa-quote-right text-4xl text-darkerBrown dark:text-gold ml-auto"></i>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col gap-5 bg-lightBrown dark:bg-black rounded-lg p-6">
                  <p className="text-darkBrown dark:text-gold">
                    This product is a game-changer! My skin has never been this
                    soft, and the texture has improved so much. I’ve been
                    getting compliments non-stop about how radiant my complexion
                    looks!
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/images/female1.jpg"
                      alt="review"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-2 dark:text-white">
                      <p className="font-algeria uppercase">Claire Robinson</p>
                    </div>
                    <i className="fa-solid fa-quote-right text-4xl text-darkerBrown dark:text-gold ml-auto"></i>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col gap-5 bg-lightBrown dark:bg-black rounded-lg p-6">
                  <p className="text-darkBrown dark:text-gold">
                    I was skeptical at first, but after using this skincare
                    cream for a month, I can say it’s one of the best
                    investments I’ve made. My skin feels revitalized, and the
                    dark spots I had are fading away. Definitely a must-have in
                    my routine.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/images/female1.jpg"
                      alt="review"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-2 dark:text-white">
                      <p className="font-algeria uppercase">Jacky Miller</p>
                    </div>
                    <i className="fa-solid fa-quote-right text-4xl text-darkerBrown dark:text-gold ml-auto"></i>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col gap-5 bg-lightBrown dark:bg-black rounded-lg p-6">
                  <p className="text-darkBrown dark:text-gold">
                    I love how this product balances hydration without making my
                    skin feel greasy. It's perfect for my sensitive skin, and
                    I've noticed fewer breakouts and much smoother skin overall.
                    It’s now an essential part of my daily routine!
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/images/female1.jpg"
                      alt="review"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-2 dark:text-white">
                      <p className="font-algeria uppercase">Sophie Kim</p>
                    </div>
                    <i className="fa-solid fa-quote-right text-4xl text-darkerBrown dark:text-gold ml-auto"></i>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
