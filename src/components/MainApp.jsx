import React, { useState, useEffect } from 'react'
import QuillEditor from './quill-editor/QuillEditor'
import axios from 'axios'

export default function MainApp() {

    const [editMode, setEditMode] = useState(false)
    const [notesInput, setNotesInput] = useState('')
    const [user, setUser] = useState('')
    const [noteSubject, setNoteSubject] = useState('First Note')
    const url = 'https://zatta1.herokuapp.com/api/'

    // useEffect(() => {
    //     editMode && axios.get(url + 'notes/6132b30effa00c0004c709c1/').then(res => setNotesInput(res.data.text) )
    //     console.log(notesInput)
    // }, [])

    // Save New Note in the Database
    const newNote = () => {
        const urlUsers = url + `users/61337912ff3bed0016fed742` // has the user's id not note

        axios.get(urlUsers)
            .then(res => {
                const newUser = res.data._id
                const urlNotes = `https://zatta1.herokuapp.com/api/notes/${newUser}`
                axios.post(urlNotes, { subject: noteSubject, text: notesInput, author: newUser })
                    .then(res => console.log(res))
            })

        console.log('done')
    }

    // Edit notes in the database
    const editNote = () => {
        const urlNotes = url + `notes/6132b30effa00c0004c709c1/` // has the note's id not user

        axios.put(urlNotes, { subject: noteSubject, text: notesInput })
            .then(() => window.alert('save successful'))

        console.log('done')
    }
    
    return (
        <div>
            <div className='notes-header'>
                <h1>{noteSubject}</h1>
                <h2>Hello, {user}</h2>
                <button className='save-note' onClick={() => editMode ? editNote() : newNote()} >Save Note</button>
            </div>
            <QuillEditor notesInput={notesInput} setNotesInput={setNotesInput} />
        </div>
    )
}
