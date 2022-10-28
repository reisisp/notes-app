import React from "react";
import { useContext } from "react";
import { Layout } from 'antd';
import classes from './NotesPage.module.scss'

import NotesContext from "../../context/NotesContext";

const { Header, Footer, Sider, Content } = Layout;


export const NotesPage = () => {
    const { notesList } = useContext(NotesContext)

    return (
        <Layout className={classes.container}>
            <Sider>Side</Sider>
            <Layout>
                <Header>Head</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    )
}