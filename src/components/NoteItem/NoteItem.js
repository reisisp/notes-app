import React from "react";
import { useContext } from "react";
import NoteCard from "../NoteCard";
import NotesContext from "../../context/NotesContext";

export const NoteItem = ({ note }) => {
    const { setCurrentNoteId } = useContext(NotesContext)
    const { title, id } = note;
    return (
        <NoteCard title={title} onClick={() => setCurrentNoteId(id)} />
    )
}