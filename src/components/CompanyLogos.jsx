import { companyLogos } from "../constants";

import { companyLogos } from "../constants"; // Importa os logotipos das empresas a partir dos constantes

/**
 * Componente CompanyLogos
 *
 * O componente CompanyLogos exibe uma lista de logotipos de empresas que colaboram ou estão associadas
 * com o produto ou serviço. Ele é utilizado para mostrar parceiros ou clientes de forma visual e atraente.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {string} [props.className] - Classe CSS adicional a ser aplicada ao componente.
 *
 * @returns {JSX.Element} O JSX para renderizar o componente de logotipos.
 */
const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      {/* Título descritivo sobre o papel das empresas */}
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      {/* Lista de logotipos das empresas */}
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            {/* Imagem do logotipo */}
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
