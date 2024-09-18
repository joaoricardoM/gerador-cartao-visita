const Footer = () => {
    return (
      <footer className="w-full bg-[#F1F3F5] py-4 px-4 xss:px-6 xs:px-8 flex flex-col xss:flex-row justify-center xss:justify-between lg:justify-center items-center border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center xss:text-left">
          <a href="#" className="underline text-gray-700 mr-4">Política de Privacidade</a>
        </p>
        <p className="text-sm text-gray-600 mt-2 xss:mt-0 text-center xss:text-right">
          © 2023 Resultados Digitais
        </p>
      </footer>
    );
  };
  
  export default Footer;
  