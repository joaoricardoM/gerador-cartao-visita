"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";

const ResultPage = () => {
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "Nome e Sobrenome";
  const phone = searchParams.get("phone") || "(00) 0000-0000";
  const email = searchParams.get("email") || "meuemail@email.com";

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#6b50e7]">
      {/* Header */}
      <header className="w-full bg-white py-4 px-8 flex justify-between items-center border-b border-gray-200">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo Resultados Digitais"
            width={120} /* Reduzido para dispositivos menores */
            height={32}
          />
        </div>
        <div className="text-base font-semibold text-gray-800 md:text-lg">
          Gerador de Cartão de Visita
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl p-4 md:p-8 flex flex-col md:flex-row xss:mt-8 justify-between items-center relative">
        {/* Left side with illustration */}
        <div className="hidden md:block mr-16 w-3/4">
          <Image
            src="/images/landingpage.png"
            alt="Ilustração"
            width={600} /* Ajuste menor para responsividade */
            height={600}
          />
        </div>

        {/* Right side with card result */}
        <div className="relative w-full h-auto md:w-3/4 rounded-xl p-4 md:p-8 flex flex-col items-center mb-10">
          {/* Gerar outro cartão */}
          <a
            href="/"
            className="absolute -top-6 left-12 flex items-center text-gray-300 font-mono text-sm md:text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="white"
              className="w-6 h-6 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Gerar outro cartão
          </a>

          {/* Card Design */}
          <div className="w-full p-4 border border-gray-200 bg-white shadow-xl rounded-3xl flex flex-col md:flex-row items-center space-x-4">
            <div className="flex-shrink-0 ml-0 md:ml-10 mb-4 md:mb-0">
              <Image
                src="/images/symbol.png"
                alt="Logo"
                width={60}
                height={60}
              />{" "}
              {/* Ajuste menor */}
            </div>
            <div className="hidden md:block absolute left-48 -ml-0.5 w-0.5 h-36 bg-gray-300"></div>{" "}
            {/* Apenas em telas maiores */}
            <div className="text-center md:text-left ml-0 md:ml-20" style={{ marginLeft: "80px" }}>
              <p className="text-sm md:text-lg font-semibold text-gray-600 mb-4">
                {name}
              </p>
              <p className="text-sm md:text-lg text-gray-600 mb-4">{phone}</p>
              <p className="text-sm md:text-lg text-gray-600 mb-4">{email}</p>
            </div>
          </div>

          {/* Baixar Cartão Button and RD Station Link */}
          <div className="w-full flex flex-col items-center mt-4">
            <button
              className="mt-6 w-full py-3 bg-gray-300 text-gray-500 font-semibold rounded-lg"
              disabled
            >
              BAIXAR CARTÃO
            </button>

            <a
              href="https://app.rdstation.com.br/signup"
              className="mt-4 text-gray-300 underline font-semibold text-sm md:text-base xss:font-medium"
            >
              FAZER UM TESTE GRÁTIS DO RD STATION MARKETING →
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#F1F3F5] py-4 px-8 flex justify-center border-t border-gray-200">
        <p className="text-xs md:text-sm text-gray-600">
          <a href="#" className="underline text-gray-700 mr-2">
            Política de Privacidade
          </a>
          © 2023 Resultados Digitais
        </p>
      </footer>
    </div>
  );
};

export default ResultPage;
