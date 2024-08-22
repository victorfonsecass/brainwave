import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { brainwave } from "../assets";
import { navigation } from "/home/victor/code/victorfonsecass/brainwave/src/components/constants"
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  // Obtém o caminho atual da URL.
  const pathname = useLocation();
  // Estado para controlar se a navegação está aberta ou fechada.
  const [openNavigation, setOpenNavigation] = useState(false);

  // Função para alternar a abertura e fechamento da navegação.
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  // Função para lidar com o clique em um item de navegação.
  const handleClick = () => {
    if (!openNavigation) return; // Se a navegação não estiver aberta, não faz nada.

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50  border-b border-n-6
      lg:bg-n-8/90 lg:backdrop-blur-sm first-letter:${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo da empresa com link para a seção hero */}
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave"/>
        </a>

         {/* Menu de navegação */}
        <nav className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">

            {/* Mapeia e cria um link para cada item de navegação */}
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        {/* Botão para criar uma nova conta */}
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        {/* Botão para fazer login */}
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        {/* Botão para abrir e fechar o menu de navegação em telas pequenas */}
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} /> {/* Componente SVG que reflete o estado do menu */}
        </Button>

      </div>
    </div>
  )
}

export default Header
