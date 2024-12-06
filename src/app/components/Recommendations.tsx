"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

interface Recommendation {
  name: string;
  role: string;
  content: string;
  image: string;
}

const Recommendations = ({ recommendations }: { recommendations: Recommendation[] }) => (
  <section
    id="recommendations"
    className="bg-gradient-to-b from-teal-50 to-white py-20"
  >
    <div className="text-center mb-12">
      <h2 className="text-teal-800 text-4xl font-bold">
        O que estão dizendo
      </h2>
      <p className="text-teal-600 text-lg mt-2">
        Veja as recomendações de quem já trabalhou comigo.
      </p>
    </div>
    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      speed={800}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      centeredSlides={true}
      navigation
    >
      {recommendations.map((recommendation, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white p-8 rounded-lg max-w-3xl mx-auto shadow-xl border-teal-200 border-2 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <Image
                src={recommendation.image}
                alt={recommendation.name}
                width={100}
                height={100}
                className="w-24 h-24 rounded-full mr-6 border-4 border-teal-500"
              />
              <div>
                <h3 className="font-bold text-2xl text-teal-800">
                  {recommendation.name}
                </h3>
                <p className="text-teal-600 text-lg">{recommendation.role}</p>
              </div>
            </div>
            <p className="text-teal-700 text-lg leading-relaxed">
              {recommendation.content}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Recommendations;
