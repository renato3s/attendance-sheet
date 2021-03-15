import { useContext, useState } from "react";
import { ModalStateContext } from "../providers/State";
import "../styles/componentsStyles/CreatePeople.css"

export default function CreatePeople() {

    interface modalEffectProps {
        modalState: string;
        setModalState: (p: string) => void;
        menuData: [{
            studentId: String;
            name: String;
        }];
        setMenuData: (p: [{
            studentId: String;
            name: String;
        }] ) => void;
    }

    const [ personName, setPersonName ] = useState("null");

    const modalEffect = useContext(ModalStateContext) as modalEffectProps;

    function handleAddPerson() {
        if (personName === "null") {
            return;
        }

        var resultId = modalEffect.menuData.map(person => ([ person.studentId ]))
        const lastId = resultId.length

        const newPerson = {
            studentId: String(lastId + 1),
            name: personName
        }

        modalEffect.menuData.push(newPerson)      
    }

    /// remove

    function testPersons () {
        var resultName = modalEffect.menuData.map(person => ([ person.name ]))

        console.log(resultName)
    }

    ///remove

    return(
        <div className="userContainer">
            <h1>Edit Users</h1>
            <div className="content">
                <p>Inserir</p>
                <input id="personName" type="text" onChange={event => setPersonName(event.target.value)}/>
                <button onClick={handleAddPerson}>Please Click me!!!</button>
                <button onClick={testPersons}>test</button>
            </div>
        </div>
    );
}