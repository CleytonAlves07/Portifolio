import { FaDownload, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Header = () => (
  <header className="relative w-full h-auto">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bannertop.png')",
      }}
    />
    <div className="relative w-full h-full">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center md:space-y-0 space-y-12">
        {/* Coluna da Imagem de Perfil e Botões */}
        <div className="w-full md:w-1/2  mt-20 flex flex-col items-center space-y-6">
          <Image
            src="/images/perfil.jpeg"
            alt="Foto de Cleyton Alves"
            className="w-48 h-48 object-cover rounded-full border-4 border-gray-400 shadow-md"
            width={200}
            height={200}
          />
          <a
            href="/curriculo.pdf"
            download="curriculo.pdf"
            className="text-white bg-gray-800 border-2 rounded-md font-bold px-6 py-3 flex items-center justify-center hover:bg-gray-700 hover:scale-105 transition-transform"
          >
            <FaDownload className="mr-2 text-gray-300" /> Download Currículo
          </a>
          <div className="flex space-x-4">
            <a
              href="https://github.com/CleytonAlves07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 bg-white border border-white rounded-full hover:text-black transition-colors"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/cleyton-alves/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href="https://wa.me/5581996687008"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-500 transition-colors"
            >
              <FaWhatsapp className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Coluna do Código e Descrição */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          {/* Const Developer com Descrição na Fonte VT323 */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 p-4">
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
