import React, { useContext } from "react";
import { Typography } from 'antd';
import NotesContext from "../../context/NotesContext";

const { Paragraph } = Typography;

export const NoteView = () => {
    const { currentNoteId, notesList } = useContext(NotesContext);
    const currentTitle = notesList.filter(el => el.id === currentNoteId)[0]?.title
    return (
        <Paragraph>{currentTitle}</Paragraph>
    )
}