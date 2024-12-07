import { FaDownload, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Header = () => (
  <header className="relative w-full h-auto bg-white mt-10">
    <div className="relative w-full h-full">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center md:space-y-0 space-y-12">
        {/* Coluna da Imagem de Perfil e Botões */}
        <div className="w-full md:w-1/2 flex flex-col items-center space-y-6">
          <Image
            src="/images/perfil.jpeg"
            alt="Foto de Cleyton Alves"
            className="w-48 h-48 object-cover rounded-full border-4 border-teal-500 shadow-md"
            width={200}
            height={200}
          />
          <a
            href="/curriculo.pdf"
            download="curriculo.pdf"
            className="text-purple-800 font-bold px-6 py-3 flex items-center justify-center hover:scale-105 transition-transform"
          >
            <FaDownload className="mr-2" /> Download Currículo
          </a>
          <div className="flex space-x-4">
            <a
              href="https://github.com/CleytonAlves07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-cyan-500 transition-colors"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/cleyton-alves/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-cyan-500 transition-colors"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href="https://wa.me/5581996687008"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-cyan-500 transition-colors"
            >
              <FaWhatsapp className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Coluna do Código e Descrição */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          {/* Const Developer com Descrição na Fonte VT323 */}
          <p
            className="text-2xl md:text-xl text-cyan-700 p-4"
          >
            <code className="typing-effect">
              const developer = &#123;<br />
              &nbsp;&nbsp; nome: `Cleyton Alves`,<br />
              &nbsp;&nbsp; cargo: `Desenvolvedor Full Stack`,<br />
              &nbsp;&nbsp; especialidades: [`JavaScript`, `TypeScript`, `React`],<br />
              &nbsp;&nbsp; outras_stack: &#91;`PHP`, `Laravel`&#93;,<br />
              &nbsp;&nbsp; filosofia: `A melhor maneira de prever o futuro é inventá-lo - Alan Kay`<br />
              &#125;
            </code>
          </p>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
