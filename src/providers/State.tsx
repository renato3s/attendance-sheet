import React, { useState } from 'react';

export const ModalStateContext = React.createContext({});

export const ModalStateProvider = (props) => {

    const [ modalState, setModalState ] = useState("modalCompleteOff");

    const [ menuData, setMenuData ] = useState([
        {
            "studentId":"1",
            "name":"test1"
        },
        {
            "student_id":"2",
            "name":"test2"
        },
        {
            "studentId":"3",
            "name":"test3"
        },
        {
            "studentId":"4",
            "name":"test4"
        },
        {
            "studentId":"5",
            "name":"test5"
        },
        {
            "studentId":"6",
            "name":"test6"
        },
        {
            "studentId":"7",
            "name":"test7"
        },
        {
            "studentId":"8",
            "name":"test8"
        },
        {
            "studentId":"9",
            "name":"test9"
        },
        {
            "studentId":"10",
            "name":"test10"
        },
        {
            "studentId":"11",
            "name":"test11"
        },
        {
            "studentId":"12",
            "name":"test12"
        },
        {
            "studentId":"13",
            "name":"test13"
        },
        {
            "studentId":"14",
            "name":"test14"
        },
        {
            "studentId":"15",
            "name":"teste15"
        },
        {
            "studentId":"16",
            "name":"teste16"
        },
    ]);

    return (
        <ModalStateContext.Provider value={{modalState, setModalState, menuData, setMenuData}}>
            {props.children}
        </ModalStateContext.Provider>
    );
}

