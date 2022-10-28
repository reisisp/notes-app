import React from "react";
import { Input } from 'antd';
import NotesContext from "../../context/NotesContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const NewNoteView = () => {
    const { currentNoteId, notesList, updateNoteItem } = useContext(NotesContext)
    const [title, setTitle] = useState('')

    useEffect(() => {
        for (const note of notesList) {
            if (note.id === currentNoteId) {
                setTitle(note.title)
                break
            }
        }
    }, [currentNoteId, notesList])

    const changeTitle = (e) => {
        setTitle(e.target.value)
        updateNoteItem(currentNoteId, { title: e.target.value })
    }

    return (
        <Input placeholder="Write note title here... " bordered={false} value={title} onChange={changeTitle} />
    )
}