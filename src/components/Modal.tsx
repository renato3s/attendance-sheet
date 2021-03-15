import { useContext } from "react"
import { ModalStateContext } from "../providers/State"
import "../styles/componentsStyles/Modal.css"

export default function Modal() {

    interface modalEffectProps {
        modalState: string;
        setModalState: (p: string) => void;
    }

    const modalClass = useContext(ModalStateContext) as modalEffectProps;
    
    return (
      <div className={ modalClass.modalState }>
          <div className="modalGrid">
            <div className="modalContent">
                <img src="checklistImg.png" alt="checklistImg"/>
                <p>Call list completed</p>
                <button onClick={() => (modalClass.setModalState("modalCompleteOff"))}>Close</button>
            </div>
          </div>
      </div>
    )
    
}