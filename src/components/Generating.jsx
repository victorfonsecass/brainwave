import { loading } from "../assets"; // Importa a imagem de loading (carregamento)

/**
 * Componente Generating
 *
 * Este componente exibe uma mensagem de "AI is generating" (IA está gerando) com um indicador de carregamento.
 * É usado para indicar ao usuário que um processo de geração de IA está em andamento.
 *
 * @param {string} className - Classes adicionais de estilo para o componente.
 */
const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      {/* Indicador de carregamento (imagem) */}
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      {/* Texto exibido durante o carregamento */}
      AI is generating
    </div>
  );
};

export default Generating;
