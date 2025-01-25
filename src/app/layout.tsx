import { Poppins, Roboto, VT323 } from "next/font/google";
import "./globals.css";

// Fonte Poppins para títulos
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],  
  variable: "--font-poppins", // Variável para uso no CSS
});

// Fonte Roboto para textos
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto", // Variável para uso no CSS
});

// Fonte VT323 para o código
const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-vt323", // Variável para uso no CSS
});

export const metadata = {
  title: "Cleyton Alves | Portfólio",
  description: "Desenvolvedor Web com foco em JavaScript, TypeScript, React, e muito mais!",
  icons: {
    icon: "/images/favicon.ico", // Ícone padrão
    shortcut: "/images/favicon.ico", // Atalho para navegadores antigos
    apple: "/images/favicon.ico", // Ícone para iOS
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable} ${vt323.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
