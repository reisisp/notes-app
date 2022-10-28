import React from "react";
import { Layout } from 'antd';
import classes from './NotesPage.module.scss'

import Sidebar from "../SideBar";
import PageHeader from "../PageHeader";

const { Footer, Content } = Layout;


export const NotesPage = () => {
    return (
        <Layout className={classes.container}>
            <Sidebar />
            <Layout>
                <PageHeader />
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    )
}