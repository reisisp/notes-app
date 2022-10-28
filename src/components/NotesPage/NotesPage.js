import React from "react";
import { Layout } from 'antd';
import classes from './NotesPage.module.scss'

import Sidebar from "../SideBar";
import PageHeader from "../PageHeader";
import PageContent from "../PageContent";


export const NotesPage = () => {
    return (
        <Layout className={classes.container}>
            <Sidebar />
            <Layout>
                <PageHeader />
                <PageContent/>
            </Layout>
        </Layout>
    )
}