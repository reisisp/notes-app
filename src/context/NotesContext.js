import React from 'react';
import { createContext, useState } from 'react';

const NotesContext = createContext();


export function NotesContextProvider({ children }) {
    const [notesList, setNotesList] = useState(null);

    return (
        <NotesContext.Provider value={{ notesList }}>{children}</NotesContext.Provider>
    )
}

export default NotesContext
