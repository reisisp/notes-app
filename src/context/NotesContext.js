import React from 'react';
import { useEffect } from 'react';
import { createContext, useState } from 'react';
import NotesService from '../services/notes-service';

const NotesContext = createContext();
const service = new NotesService()


export function NotesContextProvider({ children }) {
    const [notesList, setNotesList] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [currentNoteId, setCurrentNoteId] = useState('')

    function getNotesList() {
        service
            .getNotesList()
            .then((res) => {
                setNotesList(res)
            })
            .catch(() => {
                console.log('Smth wrong')
            })
    }

    function addNoteItem(title) {
        service
            .addNewNote(title)
            .then(() => {
                getNotesList()
            })
            .catch(() => {
                console.log('Smth wrong')
            })
    }

    function removeNoteItem(id) {
        service
            .removeNoteByID(id)
            .then(() => {
                getNotesList()
            })
            .catch(() => {
                console.log('Smth wrong')
            })
    }


    function updateNoteItem(id, obj) {
        service
            .updateNoteById(id, obj)
            .then(() => {
                getNotesList()
            })
            .catch(() => {
                console.log('Smth wrong')
            })
    }


    useEffect(() => {
        getNotesList()
    }, [])

    return (
        <NotesContext.Provider value={{ notesList, addNoteItem, removeNoteItem, updateNoteItem, searchValue, setSearchValue, currentNoteId, setCurrentNoteId }}>{children}</NotesContext.Provider>
    )
}

export default NotesContext
