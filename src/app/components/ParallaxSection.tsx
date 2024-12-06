import Image from "next/image";
import React, { useState, useEffect } from "react";

const ParallaxSection: React.FC = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Parallax Section (Comentada para não exibir) */}
      {/* <div
        className="relative w-1/2 h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/perfil.jpeg')",
          backgroundPosition: `center ${scroll * 0.3}px`,
          transition: "background-position 0.1s ease-out",
        }}
      /> */}

     
    </div>
  );
};

export default ParallaxSection;
