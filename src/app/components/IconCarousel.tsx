"use client";

import {
  SiNodedotjs,
  SiTypescript,
  SiReact,
  SiPhp,
  SiLaravel,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiMongoose,
  SiPrisma,
  SiSequelize,
  SiJest,
  SiTailwindcss,
  SiMicrosoftsqlserver,
  SiGit,
  SiGithub,
  SiFigma,
  SiJsonwebtokens,
  SiSwagger,
  SiLinux,
  SiNextdotjs,
} from "react-icons/si";
import { FaLock } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const IconCarousel = () => {
  const icons = [
    { icon: <SiNodedotjs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiPhp />, name: "PHP" },
    { icon: <SiLaravel />, name: "Laravel" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMongoose />, name: "Mongoose" },
    { icon: <SiPrisma />, name: "Prisma" },
    { icon: <SiSequelize />, name: "Sequelize" },
    { icon: <SiJest />, name: "Jest" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiMicrosoftsqlserver />, name: "SQL Server" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiJsonwebtokens />, name: "JWT" },
    { icon: <FaLock />, name: "bcryptjs" },
    { icon: <SiSwagger />, name: "Swagger" },
    { icon: <SiLinux />, name: "Linux" },
    { icon: <SiNextdotjs />, name: "Nextjs" },
  ];

  return (
    <section className="carousel-section bg-gradient-to-r from-cyan-50 to-white py-16 px-6 transition-all duration-1000">
      <div className="border-t-2 border-cyan-500 mb-8"></div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={800}
        spaceBetween={10}
        slidesPerView={5}
        loop={true}
        centeredSlides={true}
      >
        {icons.map((icon, index) => (
          <SwiperSlide key={index}>
            <div className="icon-container flex flex-col items-center justify-center">
              <div className="icon flex justify-center items-center transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl">
                {icon.icon}
              </div>
              <div className="icon-name text-teal-700 font-semibold text-lg mt-2">{icon.name}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="border-b-4 border-cyan-500 mt-8"></div>
    </section>
  );
};

export default IconCarousel;
