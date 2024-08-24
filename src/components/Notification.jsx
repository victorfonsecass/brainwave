import { notification1 } from "../assets"; // Importa uma imagem específica para a notificação
import { notificationImages } from "../constants"; // Importa uma lista de imagens usadas na notificação

/**
 * Componente Notification
 *
 * Este componente é usado para exibir uma notificação estilizada com uma imagem, título, e uma lista
 * de imagens adicionais. Também exibe uma marcação de tempo estática ("1m ago").
 *
 * @param {string} className - Classes adicionais de estilo para o componente.
 * @param {string} title - O título a ser exibido na notificação.
 */
const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      {/* Imagem principal da notificação */}
      <img
        src={notification1} // Fonte da imagem importada
        width={62} // Largura da imagem
        height={62} // Altura da imagem
        alt="image" // Texto alternativo para acessibilidade
        className="rounded-xl" // Classe CSS para bordas arredondadas
      />

      {/* Container para o conteúdo textual e imagens adicionais da notificação */}
      <div className="flex-1">
        {/* Título da notificação */}
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        {/* Container para a lista de imagens e a marcação de tempo */}
        <div className="flex items-center justify-between">
          {/* Lista de imagens adicionais dentro da notificação */}
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index} // Chave única para cada item da lista
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={item} // Fonte da imagem do item
                  className="w-full" // Classe CSS para definir a largura da imagem como 100%
                  width={20} // Largura da imagem
                  height={20} // Altura da imagem
                  alt={item} // Texto alternativo para acessibilidade
                />
              </li>
            ))}
          </ul>

          {/* Marcação de tempo estática para a notificação */}
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
