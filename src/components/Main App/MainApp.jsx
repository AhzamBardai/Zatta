import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
>>>>>>> 41446ce (merge with zavier)
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

<<<<<<< HEAD
    const saveNote = () => axios.put(urlNotes+note, { subject: subject , text: notes}).then(res => console.log(res.data))
=======
    const saveNote = () => axios.put(urlNotes+note, {text: notes}).then(res => console.log(res.data))
>>>>>>> 41446ce (merge with zavier)


    
    return (
        <div className='main-note-pg'>
            <div className='notes-header'>
<<<<<<< HEAD
                <input className='main-note-sbj' type='text' value={subject} onChange={(e) => setSubject(e.target.value)} />
                <div >
                    <Link to='/dashboard'><button className='save-note' onClick={saveNote} >Dashboard</button></Link>
                    <Link to='/dashboard'><button className='save-note' onClick={saveNote} >Save</button></Link>
                </div>
            </div>

=======
                <h1>{subject}</h1>
                <button className='save-note' onClick={saveNote} >Save</button>
            </div>
>>>>>>> 41446ce (merge with zavier)
            <QuillEditor notes={notes} setNotes={setNotes} />
        </div>
    )
}
