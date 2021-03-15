import { useContext, useState } from "react";
import { ModalStateContext } from "../providers/State";
import "../styles/componentsStyles/StudentsList.css"

export default function StudentsList() {

    interface modalEffectProps {
        modalState: string;
        setModalState: (p: string) => void;
        menuData: [{
            studentId: String;
            name: String;
        }];
    }

    const modalEffect = useContext(ModalStateContext) as modalEffectProps;

    const [ checkedButtons, setCheckedButtons ] = useState([] as any)

    var isNotPresent = false;

    function handleCallButton (id: string, isBlocked: boolean) {
        console.log(checkedButtons);
        var buttonNum = document.getElementById(id);
        var buttonNotPresent = document.getElementById(`buttonImg${id}`);

            if(buttonNum?.className === "buttonUncheck" && isBlocked === false) {
            buttonNum?.classList.remove('buttonUncheck')
            buttonNum?.classList.add('buttonCheck')
            setCheckedButtons([...checkedButtons,id]);
            buttonNotPresent?.setAttribute("disabled","disabled");
            rollCallVerificantion();
            return;
        } if(isBlocked === true && isNotPresent === false ) {
            setCheckedButtons([...checkedButtons,id]);
            buttonClassRemover(id, true);
            rollCallVerificantion();
            isNotPresent = true;
            return;
        }

        buttonNotPresent?.removeAttribute("disabled");
        var oldButtons = checkedButtons;
        var newButtons = oldButtons.filter(x => x != id);
        setCheckedButtons(newButtons);    
        buttonClassRemover(id, false)
    }

    function handleNotPresentButton(id: string) {
        var buttonNotPresent = document.getElementById(`buttonImg${id}`);
        var presentButton = document.getElementById(id);

        if(buttonNotPresent?.className === "buttonClassSelected") {
            buttonNotPresent?.classList.remove('buttonClassSelected');
            buttonNotPresent?.classList.add('none')
            presentButton?.removeAttribute("disabled");
            isNotPresent = true;
            handleCallButton(id, true)
            return;
        }

        presentButton?.setAttribute("disabled","disabled");
        buttonNotPresent?.classList.remove('none');
        buttonNotPresent?.classList.add('buttonClassSelected')
        handleCallButton(id, true)
    }

    function buttonClassRemover(id:string, isBlocked: boolean) {
        var buttonNum = document.getElementById(id);

        if(isBlocked === true) {
            buttonNum?.classList.remove('buttonUnCheck')
            buttonNum?.classList.add('buttonBlock')
            return;
        }
            buttonNum?.classList.remove('buttonBlock')
            buttonNum?.classList.remove('buttonCheck')
            buttonNum?.classList.add('buttonUncheck')
    }

    function rollCallVerificantion() {
        var resultId = modalEffect.menuData.map(person => ([person.studentId]))

      if (checkedButtons.length === 7 ) {
        modalEffect.setModalState("modalCompleteOn");
        resetButtons(false);
      }
      
    }

    function resetButtons(isUpdate: boolean) {
       
        isUpdate ? console.log("update") : setCheckedButtons([]);

        
        for(var i = 1; i < 9; i++) {
            let buttonNum = String(i) as any;
            console.log(buttonNum)
            buttonClassRemover(buttonNum, false);
            var buttonNotPresent = document.getElementById(`buttonImg${i}`);
            var presentButton = document.getElementById(buttonNum);
            presentButton?.removeAttribute("disabled");
            buttonNotPresent?.classList.remove('buttonClassSelected');
            buttonNotPresent?.classList.add('none')
            buttonNotPresent?.removeAttribute("disabled");
            console.log("yes")
        }
    }

    function getMenuItems() {

        var resultId = modalEffect.menuData.map(person => ([person.studentId]))
        var resultName = modalEffect.menuData.map(person => ( [person.name] ));

        let menuItems : any = [];
        for (var i = 1; i < 8 + 1; i++) {
        let buttonNum = String(i) as any;
        console.log(`numberfuncton${buttonNum}`);
        menuItems.push(
            <div className="student">
                <button 
                id={`buttonImg${buttonNum}`}
                className="none"
                onClick={ () => handleNotPresentButton(buttonNum) }
                >
                </button>
                <p>{resultName[i - 1]}</p>
                <button 
                className="buttonUncheck" 
                onClick={() => handleCallButton(buttonNum, false)} 
                id={buttonNum}
                >
                    X
                </button>
            </div>

        )

            
    } 
        console.log("right")
        return menuItems;
    }



    return (
        <div id="test" className="studentsList">
                {getMenuItems()}
        </div>
    );
}