import React from "react";
import NoteCard from "../NoteCard";

export const NoteItem = ({ note }) => {
    const { title, id } = note;
    return (
        <NoteCard title={title} onClick={() => console.log(id)} />
    )
}