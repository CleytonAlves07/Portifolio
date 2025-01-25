"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Montserrat } from "next/font/google";

// Importando as fontes do Google Fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
// const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm mix-blend-difference ${montserrat.className}`}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logotipo estilizado com animação */}
          <Link href="/" className="text-4xl font-bold text-teal-600 hover:text-cyan-600 transition duration-300">
            <span className="logo slot-machine-effect">
              <span className='md:text-2xl'>&lt;</span>
              <span className='md:text-2xl'>7</span>
              <span className='md:text-2xl'>&gt;</span>
            </span>
          </Link>

          {/* Links do menu em tela ampla */}
          <div className="hidden md:flex space-x-10 font-semibold text-2xl">
            <Link href="#projects" className="text-cyan-700 hover:text-teal-600 transition duration-300">
              Projetos
            </Link>
            <Link href="#services" className="text-cyan-700 hover:text-teal-600 transition duration-300">
              Serviços
            </Link>
            <Link href="#about" className="text-cyan-700 hover:text-teal-600 transition duration-300">
              Sobre Mim
            </Link>
            <Link href="#recommendations" className="text-cyan-700 hover:text-teal-600 transition duration-300">
              Recomendações
            </Link>
          </div>

          {/* Botão do menu mobile */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            <IoMenu
              size={40}
              className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
            />
          </button>
        </div>

        {/* Menu dropdown no mobile */}
        <div className={`md:hidden mt-4 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <Link href="#projects" className="block font-bold text-teal-600 hover:text-teal-400 transition duration-300">
            Projetos
          </Link>
          <Link href="#services" className="block font-bold text-teal-600 hover:text-teal-400 transition duration-300">
            Serviços
          </Link>
          <Link href="#about" className="block font-bold text-teal-600 hover:text-teal-400 transition duration-300">
            Sobre Mim
          </Link>
          <Link href="#recommendations" className="block font-bold text-teal-600 hover:text-teal-400 transition duration-300">
            Recomendações
          </Link>
        </div>
      </nav>
    </header>
  );
}
