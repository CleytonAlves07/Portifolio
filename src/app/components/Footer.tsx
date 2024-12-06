import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-teal-500">
      <div className="container mx-auto px-4 flex justify-between items-center text-teal-800">
        <p>© 2024 Cleyton Alves. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/CleytonAlves07"
            className="text-2xl hover:text-teal-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/cleyton-alves/"
            className="text-2xl hover:text-teal-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="https://wa.me/5581996687008"
            className="text-2xl hover:text-teal-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}
