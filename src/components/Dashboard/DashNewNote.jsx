import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button, InputGroup, FormControl } from 'react-bootstrap'
import { CloseButton } from 'react-bootstrap';
import axios from 'axios';
import userStore  from '../Users/GetUsers.js';



function DashNewNote({ history }) {

    const [modal, setModal] = useState(false)
    const [subject, setSubject] = useState('')
    const currentUser = userStore(state => state.currentUser)
    const setNotes = userStore(state => state.setNotes) 


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


    function openModal() {
        setModal(true)
    }

    function closeModal() {
        setModal(false)
    }


    const newNote = () => {
        const urlNotes = `https://zatta1.herokuapp.com/api/notes/${currentUser[0]._id}`
        axios.post(urlNotes, { subject: subject, text: '' })
            .then((res) => {
                axios.get(urlNotes).then(res => {
                    setNotes(res.data)
                })
                history.push(`/notes/${res.data._id}`)
            })
    }

    return (
        
        <div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Button style={{display: "flex", justifyContent: "right"}} onClick={openModal} variant="outline-secondary">New Note</Button>
            </div>
            <div className= "modalDiv">
                <Modal isOpen= {modal} onRequestClose={() => setModal(false)} style={modalStyle}>
                    <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}}>
                        <h3>New Note</h3>   
                        <CloseButton onClick={closeModal}/>
                    </div>
                    <InputGroup className="mb-3">
                        <FormControl placeholder="Enter Note Name" style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}} value={subject} onChange={(e) => setSubject(e.target.value)} />
                        <Button variant="outline-secondary" onClick={newNote} >Create</Button>
                    </InputGroup>                
                </Modal>
            </div>
        </div>
    );
}

export default DashNewNote;