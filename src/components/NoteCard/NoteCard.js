import React from "react";
import { Card } from 'antd';
import classes from './NoteCard.module.scss'


export const NoteCard = ({ title, ...props }) => {
    return (
        <Card size="small" title={title} className={classes.card} {...props}>
            <p>Card content</p>
        </Card>
    )
}