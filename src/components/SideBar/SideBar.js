import React from "react";
import { Layout } from 'antd';
import NoteList from "../NoteList";
import classes from './SideBar.module.scss'

const { Sider } = Layout;

export const Sidebar = () => {
    return (
        <Sider className={classes.sidebar}>
            <NoteList />
        </Sider>
    )
}