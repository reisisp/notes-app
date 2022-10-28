import React from "react";
import { Layout } from 'antd';
import NoteList from "../NoteList";

const { Sider } = Layout;

export const Sidebar = () => {
    return (
        <Sider>
            <NoteList />
        </Sider>
    )
}