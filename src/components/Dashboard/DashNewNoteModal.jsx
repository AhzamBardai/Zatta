import React, { useState } from 'react';
import { Button, InputGroup, FormControl, CloseButton } from 'react-bootstrap';
import axios from 'axios';
import userStore  from '../Users/GetUsers.js';
import { Link } from 'react-router-dom';



function DashNewNoteModal({history, closeModal}) {

    const [subject, setSubject] = useState('')
    const currentUser = userStore(state => state.currentUser)
    const setNotes = userStore(state => state.setNotes) 
    const notes = userStore(state => state.notes)
    

    const newNote = () => {
        const urlNotes = `https://zatta1.herokuapp.com/api/notes/`
        axios.post(urlNotes + currentUser._id, { subject: subject, text: '' })
            .then((res) => {
                axios.get(urlNotes + `/author/${currentUser._id}`).then(res => {
                    setNotes(res.data)
                })
                console.log('/notes/' + res.data._id)
                history.push(`/notes/${res.data._id}`)
            })
    }


    return (
        <div className= "modalDiv">
            <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}}>
                <h3>New Note</h3>   
                <CloseButton onClick={closeModal}/>
            </div>
            <InputGroup className="mb-3" style={{marginTop:"20px"}}>
                <FormControl placeholder="Enter Note Name" style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}} value={subject} onChange={(e) => setSubject(e.target.value)} />
                <Link to="/dashboard"><Button style={{backgroundColor:"black"}} variant="dark" onClick={newNote} >Create</Button></Link>
            </InputGroup>                
        </div>
    );
}

export default DashNewNoteModal;