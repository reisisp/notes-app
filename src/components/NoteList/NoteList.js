import React, { useContext } from "react";
import NoteItem from "../NoteItem";
import { List } from 'antd';
import NotesContext from "../../context/NotesContext";
import classes from './NoteList.module.scss'
import NewNoteItem from "../NewNoteItem";

export const NoteList = () => {
    const { notesList } = useContext(NotesContext)
    return (
        <List
            itemLayout="horizontal"
        >
            <List.Item className={classes.list__item}>
                <NewNoteItem />
            </List.Item>
            {notesList.map(noteItem => (
                <List.Item className={classes.list__item} key={noteItem.id}>
                    <NoteItem note={noteItem} />
                </List.Item>
            ))}
        </List>
    )
}