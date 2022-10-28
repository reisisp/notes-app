import React, { useContext } from "react";
import NoteItem from "../NoteItem";
import { List } from 'antd';
import NotesContext from "../../context/NotesContext";

export const NoteList = () => {
    const { notesList } = useContext(NotesContext)
    return (
        <List
            itemLayout="horizontal"
        >
            {notesList.map(noteItem => (
                <List.Item key={noteItem.id}>
                    <NoteItem note={noteItem} />
                </List.Item>
            ))}
        </List>
    )
}