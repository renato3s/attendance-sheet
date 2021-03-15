import StudentsList from "./StudentsList";
import "../styles/componentsStyles/Wrapper.css"
import { useState } from "react";

export default function Wrapper() {

    return (
        <div className="wrapper">
            <h1></h1>
            <StudentsList />
        </div>
        
    );
}