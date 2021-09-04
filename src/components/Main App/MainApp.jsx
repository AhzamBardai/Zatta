import React, { useState, useEffect } from 'react'
import QuillEditor from '../quill-editor/QuillEditor'
import axios from 'axios'
import './MainApp.css'

export default function MainApp({ note }) {

    const [notes, setNotes] = useState('')
    const [subject, setSubject] = useState('')
    const urlNotes = 'https://zatta1.herokuapp.com/api/notes/'

    useEffect(() => {
        axios.get(urlNotes+note).then(res => {
            setNotes(res.data.text)
            setSubject(res.data.subject)
        }) 

    },[])

    const saveNote = () => axios.put(urlNotes+note, {text: notes}).then(res => console.log(res.data))


    
    return (
        <div className='main-note-pg'>
            <div className='notes-header'>
                <h1>{subject}</h1>
                <button className='save-note' onClick={saveNote} >Save</button>
            </div>
            <QuillEditor notes={notes} setNotes={setNotes} />
        </div>
    )
}
