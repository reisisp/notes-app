import React from "react";
import { useContext } from "react";
import NoteCard from "../NoteCard";
import Icon, { CloseOutlined } from '@ant-design/icons';
// import CloseOutlined
import NotesContext from "../../context/NotesContext";
import classes from './NoteItem.module.scss'

export const NoteItem = ({ note }) => {
    const { setCurrentNoteId, removeNoteItem } = useContext(NotesContext)
    const { title, id } = note;
    return (
        <div className={classes.note}>
            <NoteCard title={title} onClick={() => setCurrentNoteId(id)} />
            <Icon component={CloseOutlined} className={classes.note__close} onClick={() => removeNoteItem(id)} />
        </div>
    )
}