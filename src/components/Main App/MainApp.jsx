import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import QuillEditor from '../quill-editor/QuillEditor'
import axios from 'axios'
import { Button, FormControl } from 'react-bootstrap'
import Modal from 'react-modal';
import './MainApp.css'
import userStore  from '../Users/GetUsers.js';



export default function MainApp({ note }) {

    const [notes, setNotes] = useState('')
    const [subject, setSubject] = useState('')
    const urlNotes = 'https://zatta1.herokuapp.com/api/notes/'
    const [modal, setModal] = useState(false)
    const currentUser = userStore(state => state.currentUser)

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

   function deleteNote()  {
        axios.delete(urlNotes + note).then(() => {
            axios.get(urlNotes + `author/${currentUser._id}`)
                .then(res => setNotes(res.data))
            console.log('delete note') 
        })
    }

    const modalStyle = {
        content: {
          top: '35%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2
        },
      };

    
    return (
        <div className='main-note-pg'>
            <div className='notes-header'>
                <form onSubmit={subjectChange} style={{display: "flex", flexDirection: 'row',alignItems:"center", borderRadius:"5px", border:"1px solid #CCC"}}>
                    <FormControl style={{border:"none"}} className='main-note-sbj' type='text' value={subject} onChange={(e) => setSubject(e.target.value)} />
                    <Button type='Submit' variant="outline-dark" style={{marginLeft: '20px'}}>Save</Button>
                </form>
                <div >
                    <Button variant="outline-danger" onClick={() => setModal(true)} style={{marginRight: '20px'}}>Delete</Button>
                    <Link to='/dashboard'><Button variant="outline-dark">Dashboard</Button></Link>
                </div>
            </div>
            <div className= "modalDiv">
                <Modal isOpen= {modal} onRequestClose={() => setModal(false)} style={modalStyle}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <h5>Are you sure you would like to delete this note?</h5>   
                    </div>
                    <div style={{display:"flex", justifyContent:"center", alignItems:"baseline"}}>
                        <Button variant="outline-dark" onClick={() => setModal(false)}>Cancel</Button>
                        <Link to='/dashboard'><Button variant="danger" onClick={() => deleteNote()}>Delete</Button></Link>
                    </div>    
                </Modal>
            </div>
           

            <QuillEditor notes={notes} subject={subject} />
        </div>
    )
}
