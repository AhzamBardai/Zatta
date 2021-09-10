import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import QuillEditor from '../quill-editor/QuillEditor'
import axios from 'axios'
import { Button, FormControl } from 'react-bootstrap'
import Modal from 'react-modal';
import './MainApp.css'
import userStore  from '../Users/GetUsers.js';
import { useMediaQuery } from 'react-responsive';
import { delSVG, dashSVG, saveSVG } from '../images/svg'


export default function MainApp({ note }) {

    const [notes, setNotes] = useState('')
    const [subject, setSubject] = useState('')
    const urlNotes = 'https://zatta1.herokuapp.com/api/notes/'
    const [modal, setModal] = useState(false)
    const currentUser = userStore(state => state.currentUser)

    //media queries
    const width550 = useMediaQuery({query: "(min-width: 550px)"})
    const width440 = useMediaQuery({query: "(min-width: 440px)"})
    // const width300 = useMediaQuery({query: "(min-width: 330px)"})




    useEffect(() => {
        axios.get(urlNotes+ '/note/' + note).then(res => {
            setNotes(res.data.text)
            setSubject(res.data.subject)
        }) 

    },[note])

    const subjectChange = (e) => {
        e.preventDefault()
        const url = window.location.pathname.split('/')
        axios.put(urlNotes + url[2], { subject: subject })

    }

   function deleteNote()  {
        axios.delete(urlNotes + note).then(() => {
            axios.get(urlNotes + `author/${currentUser._id}`)
                .then(res => setNotes(res.data))
        })
    }

    const modalStyle = {
        content: {
          top: '25%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2
        },
      };

      //style={width440 ? {border:"none"} ? width300 : {border: 'none' , width: '8rem'} : {border: 'none' , width: '6rem'} }  formcontrol
      //style={ width300 ? {marginRight: '20px'} : {marginRight: '10px'}} delete button
      //style={width550 ? {marginRight: '10px'}: null} cancel button
    
    return (
        <div className='main-note-pg'>
            <div className='notes-header'>
                <form className='main-subject' onSubmit={subjectChange} style={{display: "flex", flexDirection: 'row',alignItems:"center", borderRadius:"5px", border:"1px solid #CCC"}}>
                    <FormControl style={{border:"none"}} className='main-note-sbj' type='text' value={subject} onChange={(e) => setSubject(e.target.value)} />
                    <Button type='Submit' variant="outline-dark" style={{marginLeft: '3px'}}>
                        { width440 ? 'Save' : saveSVG }
                    </Button>
                </form>
                <div >
                    <Button variant="outline-danger" onClick={() => setModal(true)} style={{marginRight: '20px'}}>
                        { width550 ? 'Delete' : delSVG}
                    </Button>
                    <Link to='/dashboard'><Button variant="outline-dark"> { width550 ? 'Dashboard' : dashSVG} </Button></Link>
                </div>
            </div>
            <div className= "modalDiv">
                <Modal isOpen= {modal} onRequestClose={() => setModal(false)} style={modalStyle}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <h5>Are you sure you would like to delete this note?</h5>   
                    </div>
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop: "30px"}}>
                        <Button variant="outline-dark" onClick={() =>setModal(false)} style={{marginRight: '10px'}} >Cancel</Button>
                        <Link to="/dashboard"><Button variant="danger" onClick={() => deleteNote()}>Delete</Button></Link>
                    </div>    
                </Modal>
            </div>
           

            <QuillEditor notes={notes} subject={subject} />
        </div>
    )
}
