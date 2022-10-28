import React from "react";
import { Layout } from 'antd';
import NewNoteView from "../NewNoteView";
const { Content } = Layout

export const PageContent = () => {
    return (
        <Content>
            <NewNoteView />
        </Content>
    )
}
