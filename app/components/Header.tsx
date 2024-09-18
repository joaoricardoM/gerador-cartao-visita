import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full bg-white py-4 px-4 xs:px-8 flex flex-col xs:flex-row xss:px-2 xss:flex-row justify-between items-center border-b border-gray-200">
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="Logo Resultados Digitais" width={150} height={40} />
      </div>
      <div className="mt-2 md:text-base xs:mt-0 xss:mt-0 text-center xs:text-right xss:text-right text-lg font-semibold text-gray-800 xss:text-sm">
        Gerador de Cartão de Visita
      </div>
    </header>
  );
};

export default Header;
