import React, { useContext } from "react";
import NoteCard from "../NoteCard";
import NotesContext from "../../context/NotesContext";

export const NewNoteItem = () => {
    const { addNoteItem } = useContext(NotesContext);
    const title = "New Notes"
    return (
        <NoteCard title={title} onClick={() => addNoteItem('New Card')} />
    )
}