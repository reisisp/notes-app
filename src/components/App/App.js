import React from "react";
import { NotesContextProvider } from "../../context/NotesContext";
import NotesPage from "../NotesPage";

export const App = () => {
    return (
        <NotesContextProvider>
            <NotesPage />
        </NotesContextProvider>
    )
}
