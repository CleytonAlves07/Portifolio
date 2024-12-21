import React from "react";
import {
  FaWhatsapp,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaUserAlt,
  FaCommentAlt,
  FaPlayCircle,
  FaTools,
  FaUsers,
  FaHandshake,
  FaClock,
  FaHeart,
  FaCheckCircle,
  FaHandsHelping
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiJest, SiSwagger } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-slate-100"
    >
      {/* Divisão com borda superior curvada */}
      <div className="absolute inset-x-0 top-0 -z-10">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L60,165.3C120,171,240,181,360,181.3C480,181,600,171,720,149.3C840,128,960,96,1080,117.3C1200,139,1320,213,1380,245.3L1440,277.3V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Texto sobre */}
          <div>
            <h2 className="text-4xl font-extrabold text-teal-800 mb-4">
            Sobre mim
            </h2>
            <p className="text-2xl text-justify text-teal-600 mb-4">
            Como <span className="font-semibold">Administrador de Empresas</span> que se tornou <span className="font-semibold">Desenvolvedor Full Stack</span>, trago uma
            combinação única de conhecimento em <span className="font-semibold">negócios e expertise técnica</span> para cada projeto. 
            Busco sempre aplicar minhas habilidades para
            criar resultados que<span className="font-semibold"> impulsionem o sucesso</span>  de qualquer aplicação.
            </p>
         
          </div>

          {/* Coluna da direita: Habilidades */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Habilidades Técnicas */}
            <div className="bg-white shadow-lg rounded-lg p-6 border-l-2 border-teal-500">
              <h3 className="text-2xl font-bold text-teal-800 mb-4">Habilidades Técnicas</h3>
              <ul className="text-teal-700 list-inside space-y-4 font-semibold">
                <li><SiTypescript className="inline-block text-teal-600 mr-2" /> TypeScript / JavaScript</li>
                <li><FaPhp className="inline-block text-teal-600 mr-2" /> PHP / Laravel</li>
                <li><FaReact className="inline-block text-teal-600 mr-2" /> React, Next.js, Vite</li>
                <li><FaNodeJs className="inline-block text-teal-600 mr-2" /> Node.js, Express</li>
                <li><FaDatabase className="inline-block text-teal-600 mr-2" /> PostgreSQL, MongoDB</li>
                <li><SiTailwindcss className="inline-block text-teal-600 mr-2" /> TailwindCSS, Bootstrap</li>
                <li><SiJest className="inline-block text-teal-600 mr-2" /> Jest, Mocha, Sinon, Chai</li>
                <li><SiSwagger className="inline-block text-teal-600 mr-2" /> Swagger</li>
                <li><FaUserAlt className="inline-block text-teal-600 mr-2" /> Cors, JWT, Helmet</li>
              </ul>
            </div>

            {/* Habilidades Interpessoais */}
            <div className="bg-white shadow-lg rounded-lg p-6 border-l-2 border-teal-500 font-semibold">
              <h3 className="text-2xl font-bold text-teal-800 mb-4">Habilidades Interpessoais</h3>
              <ul className="text-teal-700 list-inside space-y-4">
                <li><FaCommentAlt className="inline-block text-teal-600 mr-2" /> Comunicação Clara e Eficaz</li>
                <li><FaPlayCircle className="inline-block text-teal-600 mr-2" /> Proatividade</li>
                <li><FaTools className="inline-block text-teal-600 mr-2" /> Resolução de Problemas</li>
                <li><FaUsers className="inline-block text-teal-600 mr-2" /> Trabalho em Equipe</li>
                <li><FaHandshake className="inline-block text-teal-600 mr-2" /> Colaboração</li>
                <li><FaClock className="inline-block text-teal-600 mr-2" /> Gestão de Tempo</li>
                <li><FaHeart className="inline-block text-teal-600 mr-2" /> Dedicação</li>
                <li><FaCheckCircle className="inline-block text-teal-600 mr-2" /> Comprometimento</li>
                <li><FaHandsHelping className="inline-block text-teal-600 mr-2" /> Empatia</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Botão de contato via WhatsApp */}
        <div className="mt-16 text-center ">
          <p className="text-2xl font-semibold text-teal-800 mb-6 px-4 py-3 bg-teal-50 rounded-xl shadow-lg max-w-2xl mx-auto border-l-2 border-r-2 border-teal-500 ">
            Quer saber mais? <span className="text-teal-600">Seu próximo passo</span> está a um clique! <br />
            Entre em contato pelo <span className="underline">WhatsApp</span> e tire todas as suas dúvidas!
          </p>
  
          <a
            href="https://wa.me/5581996687008"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-teal-500 hover:bg-teal-600 rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-400"
          >
            <FaWhatsapp className="w-8 h-8 mr-2" />
            Fale pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
