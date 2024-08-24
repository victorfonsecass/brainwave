import SectionSvg from "../assets/svg/SectionSvg";
const Section = ({
  className,      // Classe CSS opcional para customização adicional
  id,             // ID opcional para o elemento <div> raiz
  crosses,        // Booleano que determina se linhas cruzadas serão renderizadas
  crossesOffset,  // Deslocamento opcional para as linhas cruzadas
  customPaddings, // Padding personalizado opcional para substituir o padding padrão
  children        // Conteúdo a ser exibido dentro da seção
}) => {
  return (
    <div
      id={id}
      className={`relative ${
      customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      }
      ${className || ""}`}
    >
      {/* Renderiza os elementos filhos (children) dentro do <div> */}
      {children}

       {/* Linhas verticais laterais - visíveis apenas em dispositivos médios e maiores */}
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {/* Condicionalmente renderiza elementos adicionais se "crosses" estiver definido como verdadeiro */}
      {crosses && (
        <>
         {/* Linha horizontal no topo da seção - visível apenas em dispositivos grandes e maiores */}
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          {/* Renderiza o componente SVG SectionSvg com offset para os crosses, se fornecido */}
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  )
}

export default Section
