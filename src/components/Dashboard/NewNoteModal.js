import React from 'react';
import Modal from 'react-modal';
import { Button, InputGroup, FormControl, CloseButton } from 'react-bootstrap';
import axios from 'axios';
import userStore  from '../Users/GetUsers.js';
import { Link } from 'react-router-dom';

function NewNoteModal({ subject, setSubject, modal, setModal, history }) {

    const currentUser = userStore(state => state.currentUser)
    const setNotes = userStore(state => state.setNotes) 
    
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


    function closeModal() {
        setModal(false)
    }

    const newNote = () => {
        const urlNotes = `https://zatta1.herokuapp.com/api/notes/`
        axios.post(urlNotes + currentUser._id, { subject: subject, text: '' })
            .then((res) => {
                axios.get(urlNotes + `/author/${currentUser._id}`).then(res => {
                    setNotes(res.data)
                })
                history.push(`/notes/${res.data._id}`)
            })
    }

    return (
        <div>
        <Modal isOpen= {modal} onRequestClose={() => setModal(false)} style={modalStyle}>
            <div className="newNote-modal-header">
                <h3>New Note</h3>   
                <CloseButton onClick={closeModal}/>
            </div>
            <InputGroup className="mb-3" style={{marginTop:"20px"}}>
                <FormControl placeholder="Enter Note Name" style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}} value={subject} onChange={(e) => setSubject(e.target.value)} />
                <Link to="/dashboard"><Button style={{backgroundColor:"black"}} variant="dark" onClick={newNote} >Create</Button></Link>
            </InputGroup>                
        </Modal>
    </div>
)
}

export default NewNoteModal
