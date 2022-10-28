import React from "react";
import { Input } from 'antd';
import NotesContext from "../../context/NotesContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const NewNoteView = () => {
    const { currentNoteId, notesList, updateNoteItem, addNoteItem } = useContext(NotesContext)
    const [title, setTitle] = useState('')

    useEffect(() => {
        if (currentNoteId) {
            for (const note of notesList) {
                if (note.id === currentNoteId) {
                    setTitle(note.title)
                    break
                }
            }
        }
    }, [currentNoteId, notesList])

    useEffect(() => {
        if (!currentNoteId) setTitle('')
    }, [currentNoteId])

    const changeTitle = (e) => {
        if (currentNoteId) {
            updateNoteItem(currentNoteId, { title: e.target.value })
        }
        setTitle(e.target.value)
    }

    const createNewNote = () => {
        if (title) addNoteItem(title)
        setTitle('');
    }

    return (
        <Input placeholder="Write note title here... " bordered={false} value={title} onChange={changeTitle} onPressEnter={!currentNoteId && createNewNote} />
    )
}