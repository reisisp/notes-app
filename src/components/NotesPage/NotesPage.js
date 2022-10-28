import React from "react";
import { useContext } from "react";
import NotesContext from "../../context/NotesContext";

export const NotesPage = () => {
    const { notesList } = useContext(NotesContext)
    console.log(notesList)
    return (
        <p>notes</p>
    )
}