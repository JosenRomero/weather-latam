import Modal from './Modal'
import useModal from '../hooks/useModal'

const Credits = () => {

  const { isOpenModal, openModal, closeModal } = useModal();

  return (
    <>
    
      <button className="px-4 py-2 font-semibold text-sm bg-sky-400 text-white rounded-md shadow-sm" onClick={openModal}>Credits</button>
    
      <Modal 
        isOpen={isOpenModal} 
        closeModal={closeModal}
        title={"Credits"}
      >
        <div className="text-center text-slate-500 mt-8 leading-7">
          <p>Desarrollado por <a href="https://github.com/JosenRomero" target="_blank">José Romero</a></p>
          <p>Idea conceptual por <a href="https://www.youtube.com/channel/UC6tSB9TnO0f01OBeo9UEJZA" target="_blank">Hina Misora</a></p>
          <p>Imágenes Diseñadas por <a href="https://twitter.com/Sr_Leo_" target="_blank">Sr_Leo_</a></p>
          <p>weather icon: <a href="https://www.iconpacks.net/free-icon-pack/free-weather-icon-pack-199.html" target="_blank">iconpacks</a></p>
          <p>Weather API: <a href="https://openweathermap.org/api" target="_blank">openweathermap</a></p>
        </div>
      </Modal>
      
    </>
  )

}

export default Credits