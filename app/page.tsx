"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import InputMask from "react-input-mask";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validações
    if (name.length < 2) {
      setError("O nome deve ter pelo menos 2 caracteres");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Insira um e-mail válido");
      return;
    }

    const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
      setError("Insira um telefone válido");
      return;
    }

    const query = new URLSearchParams({
      name,
      phone,
      email,
    }).toString();

    router.push(`/result?${query}`);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#6b50e7] flex flex-col items-center justify-center overflow-hidden">
        <div className="flex flex-col w-full max-w-7xl items-center justify-between xss:mt-10 xss:mb-10">
          <div className="text-center w-full xss:mb-8">
            <h1 className="text-4xl font-bold text-[#ffffff] mb-4">
              Gerador de Cartão de Visita
            </h1>
            <p className="text-[#E0E0E0] mb-8 text-lg font-sans">
              Crie grátis seu cartão de visita em passos rápidos! Você o insere
              no Instagram e demais canais digitais.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/images/landingpage.png"
                width={500}
                height={500}
                alt="Ilustração"
                className="mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2 px-10">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-[#0D0D27]">
                    Nome*
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="nome@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0D0D27]">
                    Telefone*
                  </label>
                  <InputMask
                    mask="(99) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="(00) 0 0000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0D0D27]">
                    E-mail*
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="nome@email.com"
                  />
                </div>

                <div className="flex items-center mt-4">
                  <input type="checkbox" id="agree" className="mr-2" required />
                  <label htmlFor="agree" className="text-sm text-[#F1F3F5]">
                    Ao preencher o formulário, concordo * em receber
                    comunicações de acordo com meus interesses.
                  </label>
                </div>

                <div className="flex items-center mt-4">
                  <input type="checkbox" id="agree" className="mr-2" required />
                  <label htmlFor="agree" className="text-sm text-[#F1F3F5]">
                    Ao preencher o formulário, concordo com a{" "}
                    <a
                      href="https://legal.rdstation.com/pt/privacy-policy/"
                      className="underline text-blue-600"
                    >
                      Política de Privacidade
                    </a>
                    .
                  </label>
                </div>

                <div className="flex items-center mt-4">
                  <label htmlFor="agree" className="text-sm text-[#F1F3F5]">
                    * Você pode alterar suas permissões de comunicação a
                    qualquer tempo.
                  </label>
                </div>

                {error && <p className="text-red-500">{error}</p>}

                <button
                  type="submit"
                  className="w-full py-3 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 font-semibold"
                >
                  GERAR CARTÃO GRÁTIS →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
