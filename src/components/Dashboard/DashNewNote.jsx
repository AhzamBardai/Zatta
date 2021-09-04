import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button, InputGroup, FormControl } from 'react-bootstrap'
import { CloseButton } from 'react-bootstrap';
import axios from 'axios';

//https://www.npmjs.com/package/react-modal#installation


function DashNewNote(props) {

    const [modal, setModal] = useState(false)
    const [subject, setSubject] = useState('')

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

    // function closeCreateModal() {
    //     setModal(false)
    //     <Alert>New note successfully made!</Alert>
    // }

    const newNote = () => {
        const url = 'https://zatta1.herokuapp.com/api/'
        const urlUser = url + `users/61337912ff3bed0016fed742` // has the user's id not note
        console.log(urlUser)
        axios.get(urlUser)
            .then(res => {
                const newUser = res.data._id
                const urlNotes = `https://zatta1.herokuapp.com/api/notes/${newUser}`
                axios.post(urlNotes, { subject: subject, text: '', author: newUser })
                    .then(res => console.log(res))
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