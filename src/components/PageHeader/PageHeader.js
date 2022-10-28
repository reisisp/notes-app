import React from "react";
import SearchItem from "../SearchItem";
import { Layout } from 'antd';
import classes from './PageHeader.module.scss';

const { Header } = Layout;


export const PageHeader = () => {
    return (
        <Header className={classes.header}>
            <SearchItem />
        </Header>
    )
}