import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import QuillEditor from '../quill-editor/QuillEditor'
import axios from 'axios'
import './MainApp.css'

export default function MainApp({ note }) {

    const [notes, setNotes] = useState('')
    const [subject, setSubject] = useState('')
    const urlNotes = 'https://zatta1.herokuapp.com/api/notes/'

    useEffect(() => {
        axios.get(urlNotes+ '/note/' + note).then(res => {
            setNotes(res.data.text)
            setSubject(res.data.subject)
        }) 

    },[])

    const subjectChange = (e) => {
        e.preventDefault()
        const url = window.location.pathname.split('/')
        axios.put(urlNotes + url[2], { subject: subject })
        
    }

    
    return (
        <div className='main-note-pg'>
            <div className='notes-header'>
                <form onSubmit={subjectChange}>
                    <input className='main-note-sbj' type='text' value={subject} onChange={(e) => setSubject(e.target.value)} />
                    <button className='save-note' type='Submit' style={{marginLeft: '20px'}} >Save</button>
                </form>
                <div >
                    <Link to='/dashboard'><button className='save-note' >Dashboard</button></Link>
                </div>
            </div>

            <QuillEditor notes={notes} subject={subject} />
        </div>
    )
}
