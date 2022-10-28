import React, { useContext } from "react";
import NoteItem from "../NoteItem";
import { List } from 'antd';
import NotesContext from "../../context/NotesContext";
import classes from './NoteList.module.scss'
import NewNoteItem from "../NewNoteItem";
import { Typography } from 'antd';
const { Paragraph } = Typography;

export const NoteList = () => {
    const { notesList, searchValue } = useContext(NotesContext)
    const notesArr = !searchValue ? notesList : notesList.filter(el => el.title.toLowerCase().includes(searchValue))
    return (
        <List
            itemLayout="horizontal"
        >
            {!searchValue &&
                <List.Item className={classes.list__item}>
                    <NewNoteItem  />
                </List.Item>
            }

            {notesArr.map(noteItem => (
                <List.Item className={classes.list__item} key={noteItem.id}>
                    <NoteItem note={noteItem} />
                </List.Item>
            ))}

            {!notesArr.length &&
                <Paragraph>No result</Paragraph>
            }
        </List>
    )
}