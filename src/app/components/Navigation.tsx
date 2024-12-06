"use client";

import Link from "next/link";
import { useState } from "react";
import { Montserrat, Roboto } from "next/font/google";

// Importando as fontes do Google Fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md ${montserrat.className}`}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logotipo estilizado com animação */}
          <Link href="/" className="text-2xl font-bold text-teal-600 hover:text-cyan-600 transition duration-300">
            <span className="logo slot-machine-effect">
              <span>&lt;</span>
              <span>7</span>
              <span>&gt;</span>
            </span>
          </Link>

          {/* Links do menu em tela ampla */}
          <div className="hidden md:flex space-x-6 font-semibold">
            <Link
              href="#projects"
              className="text-cyan-700 hover:text-teal-600 transition duration-300"
            >
              Projetos
            </Link>
            <Link
              href="#services"
              className="text-cyan-700 hover:text-teal-600 transition duration-300"
            >
              Serviços
            </Link>
            <Link
              href="#about"
              className="text-cyan-700 hover:text-teal-600 transition duration-300"
            >
              Sobre Mim
            </Link>
            <Link
              href="#recommendations"
              className="text-cyan-700 hover:text-teal-600 transition duration-300"
            >
              Recomendações
            </Link>
          </div>

          {/* Botão do menu mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu dropdown no mobile */}
        {isOpen && (
          <div
            className={`md:hidden mt-4 space-y-2 ${roboto.className} text-gray-700`}
          >
            <Link
              href="#projects"
              className="block hover:text-teal-600 transition duration-300"
            >
              Projetos
            </Link>
            <Link
              href="#services"
              className="block hover:text-teal-600 transition duration-300"
            >
              Serviços
            </Link>
            <Link
              href="#about"
              className="block hover:text-teal-600 transition duration-300"
            >
              Sobre Mim
            </Link>
            <Link
              href="#recommendations"
              className="block hover:text-teal-600 transition duration-300"
            >
              Recomendações
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
