import React, { useContext } from "react";
import NoteCard from "../NoteCard";
import NotesContext from "../../context/NotesContext";

export const NewNoteItem = () => {
    const { setCurrentNoteId } = useContext(NotesContext);
    const title = "New Notes"
    return (
        <NoteCard title={title} onClick={() => setCurrentNoteId('')} />
    )
}