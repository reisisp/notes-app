import React from "react";
import { Layout } from 'antd';
import classes from './NotesPage.module.scss'

import Sidebar from "../SideBar";

const { Header, Footer, Content } = Layout;


export const NotesPage = () => {
    return (
        <Layout className={classes.container}>
            <Sidebar />
            <Layout>
                <Header>Head</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    )
}