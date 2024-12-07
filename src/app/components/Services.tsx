import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { FaTools, FaDatabase, FaPalette } from "react-icons/fa";

// Define a interface do Service
interface Service {
  title: string;
  description: string;
  icon: JSX.Element; // O tipo aqui é JSX.Element
}

// Lista de serviços com ícones incluídos
const services: Service[] = [
  {
    title: "Criação de Websites",
    description:
      "Dê vida às suas ideias com sites profissionais, modernos e responsivos, projetados para engajar o público e destacar sua marca no digital.",
    icon: <BiCodeAlt className="w-12 h-12 text-teal-600" />,
  },
  {
    title: "Design de Landing Pages",
    description:
      "Atraia e converta visitantes em clientes com landing pages visualmente impactantes e estrategicamente otimizadas para resultados.",
    icon: <FaPalette className="w-12 h-12 text-teal-600 border-b-4 border-teal-600 transition-all duration-300 hover:scale-110" />,
  },
  {
    title: "Otimização para SEO",
    description:
      "Coloque seu site no topo dos motores de busca com estratégias personalizadas que impulsionam o tráfego orgânico e expandem sua presença online.",
    icon: <FaTools className="w-12 h-12 text-teal-600" />,
  },
  {
    title: "Integração de APIs",
    description:
      "Amplie as possibilidades do seu site ou aplicação com integrações de APIs personalizadas e robustas, garantindo alta performance.",
    icon: <FaDatabase className="w-12 h-12 text-teal-600" />,
  },
];


// Componente de Serviços
const Services = () => (
  <section
    id="services"
    className="bg-gradient-to-b from-cyan-50 to-white py-16 px-6 sm:px-12 lg:px-20"
  >
    <h2 className="text-center text-4xl font-bold text-teal-800 mb-12">
      Como posso ajudar
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
      {services.map((service) => (
        <div
          key={service.title}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-teal-200"
        >
          <div className="mb-4 flex justify-center items-center">
            {service.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center text-teal-700">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm text-center">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
