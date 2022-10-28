import React from "react";
import { NotesContextProvider } from "../../context/NotesContext";
import NotesPage from "../NotesPage";
import 'antd/dist/antd.min.css';

export const App = () => {
    return (
        <NotesContextProvider>
            <NotesPage />
        </NotesContextProvider>
    )
}
