import React from "react";
import { Layout } from 'antd';
import NotesContext from "../../context/NotesContext";
import { useContext } from "react";
import NewNoteView from "../NewNoteView";
const { Content } = Layout

export const PageContent = () => {
    const { currentNoteId } = useContext(NotesContext);
    return (
        <>
            {currentNoteId
                ? <NewNoteView />
                : <Content>Content</Content>
            }
        </>
    )
}
