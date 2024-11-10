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
      <section className="bg-brown py-20">
        <div className="container">
          <div className="mx-w-md mx-auto text-center">
            <h2 className="text-4xl text-darkerBrown font-nova font-bold uppercase lg:text-6xl">
              CUSTOMER REVIEW
            </h2>
            <p className="text-darkBrown mb-4">
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
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              <SwiperSlide>
                <div className="flex flex-col gap-5 bg-lightBrown rounded-lg p-6">
                  <p className="text-darkBrown">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde doloribus totam, amet ipsum fugiat eos molestias
                    suscipit impedit corporis, nobis eum laudantium minus dolor
                    harum ratione inventore sint, recusandae quis.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/images/female1.jpg"
                      alt="review"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-2">
                      <p className="font-algeria uppercase">Sarah Brown</p>
                    </div>
                    <i className="fa-solid fa-quote-right text-4xl text-darkerBrown ml-auto"></i>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col gap-5 bg-lightBrown rounded-lg p-6">
                  <p className="text-darkBrown">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde doloribus totam, amet ipsum fugiat eos molestias
                    suscipit impedit corporis, nobis eum laudantium minus dolor
                    harum ratione inventore sint, recusandae quis.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/images/female1.jpg"
                      alt="review"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-2">
                      <p className="font-algeria uppercase">Sarah Brown</p>
                    </div>
                    <i className="fa-solid fa-quote-right text-4xl text-darkerBrown ml-auto"></i>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col gap-5 bg-lightBrown rounded-lg p-6">
                  <p className="text-darkBrown">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde doloribus totam, amet ipsum fugiat eos molestias
                    suscipit impedit corporis, nobis eum laudantium minus dolor
                    harum ratione inventore sint, recusandae quis.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/images/female1.jpg"
                      alt="review"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-2">
                      <p className="font-algeria uppercase">Sarah Brown</p>
                    </div>
                    <i className="fa-solid fa-quote-right text-4xl text-darkerBrown ml-auto"></i>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col gap-5 bg-lightBrown rounded-lg p-6">
                  <p className="text-darkBrown">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde doloribus totam, amet ipsum fugiat eos molestias
                    suscipit impedit corporis, nobis eum laudantium minus dolor
                    harum ratione inventore sint, recusandae quis.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/images/female1.jpg"
                      alt="review"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-2">
                      <p className="font-algeria uppercase">Sarah Brown</p>
                    </div>
                    <i className="fa-solid fa-quote-right text-4xl text-darkerBrown ml-auto"></i>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col gap-5 bg-lightBrown rounded-lg p-6">
                  <p className="text-darkBrown">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde doloribus totam, amet ipsum fugiat eos molestias
                    suscipit impedit corporis, nobis eum laudantium minus dolor
                    harum ratione inventore sint, recusandae quis.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/images/female1.jpg"
                      alt="review"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-2">
                      <p className="font-algeria uppercase">Sarah Brown</p>
                    </div>
                    <i className="fa-solid fa-quote-right text-4xl text-darkerBrown ml-auto"></i>
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
