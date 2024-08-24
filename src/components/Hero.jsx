import { curve, heroBackground, robot } from "../assets"; // Importa imagens usadas no componente
import Button from "./Button"; // Importa o componente de botão
import Section from "./Section"; // Importa o componente de seção
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero"; // Importa componentes de design específicos para o Hero
import { heroIcons } from "../constants"; // Importa ícones usados no componente Hero
import { ScrollParallax } from "react-just-parallax"; // Importa um componente para criar efeito parallax ao rolar
import { useRef } from "react"; // Importa o hook useRef do React para criar referências
import Generating from "./Generating"; // Importa componente de estado de geração
import Notification from "./Notification"; // Importa componente de notificação
import CompanyLogos from "./CompanyLogos"; // Importa componente de logotipos de empresas

/**
 * Componente Hero
 *
 * O componente Hero é a seção de destaque de uma página que apresenta o conceito principal
 * de um aplicativo de chat de IA chamado Brainwave. Ele contém um título, uma descrição,
 * um botão de call-to-action, imagens e elementos visuais para atrair o usuário.
 *
 * Este componente utiliza efeitos de parallax, animações, e uma combinação de imagens e texto
 * para criar uma apresentação visualmente atraente da aplicação.
 */

const Hero = () => {
  const parallaxRef = useRef(null); // Cria uma referência para o parallax

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]" // Classe CSS para definir padding top e margin top negativa
      crosses // Propriedade para desenhar linhas de cruzamento (visual)
      crossesOffset="lg:translate-y-[5.25rem]" // Offset para a posição das linhas de cruzamento
      customPaddings // Indica que a seção tem padding personalizado
      id="hero" // ID HTML para a seção
    >
      <div className="container relative" ref={parallaxRef}>
        {/* Container principal do conteúdo do Hero */}
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          {/* Título principal do Hero */}
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
            <span className="inline-block relative">
              Brainwave{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          {/* Parágrafo de descrição do Hero */}
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          {/* Botão de call-to-action para direcionar o usuário para a página de preços */}
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>

        {/* Seção para exibição de imagens e elementos com efeito Parallax */}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          {/* Container de gradiente para o efeito visual */}
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              {/* Exibição da imagem de um robô com escala e posição ajustadas */}
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                {/* Componente de geração (provavelmente um estado visual) */}
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                {/* Efeito Parallax para uma lista de ícones */}
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                {/* Efeito Parallax para notificação de geração de código */}
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            {/* Gradiente de fundo para efeito visual */}
            <Gradient />
          </div>

          {/* Imagem de fundo com posicionamento ajustado */}
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          {/* Círculos de fundo para efeito visual adicional */}
          <BackgroundCircles />
        </div>

        {/* Logotipos de empresas que aparecem na seção Hero */}
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      {/* Linha inferior para dividir o conteúdo da seção */}
      <BottomLine />
    </Section>
  );
};

export default Hero;
