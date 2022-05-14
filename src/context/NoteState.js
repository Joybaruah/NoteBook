import React, { useState } from "react";
import NoteContext from "./noteContext"

const NoteState = (props)=> {
    const host = "https://notebook-joy.herokuapp.com/"
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)
    
    // Get all notes
    const getNotes = async ()=>{

        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method : 'GET',
            headers: {
                'Content-Type' : 'application/json',
                "auth-token" : localStorage.getItem('token')
            },
        })
        const json = await response.json()
        setNotes(json)
    }

    // Add note
    const addNote = async (title , description)=>{

        const response = await fetch(`${host}/api/notes/addnote`, {
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json',
                "auth-token" : localStorage.getItem('token')
            },
            body: JSON.stringify({title, description})
        });

        const note = await response.json();
        setNotes(notes.concat(note))
    }

    // Delete note
    const deleteNote = async (id)=>{

        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method : 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                "auth-token" : localStorage.getItem('token')
            },
        })

        console.log(response);
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
    }

    // Edit note
    const editNote = async (id, title, description)=> {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method : 'PUT',
            headers: {
                'Content-Type' : 'application/json',
                "auth-token" : localStorage.getItem('token')
            },
            body: JSON.stringify({title, description})
        })
        const json = response.json();
        console.log(json)

        let updatedNote = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < updatedNote.length; index++) {
            const element = updatedNote[index];
            if (element._id === id){
                updatedNote[index].title = title;
                updatedNote[index].description = description;
                break;
            }
        }
        setNotes(updatedNote)
    }
    return (
        <NoteContext.Provider value={{notes, setNotes, addNote,deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;