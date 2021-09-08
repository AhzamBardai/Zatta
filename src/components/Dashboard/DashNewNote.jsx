import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button, InputGroup, FormControl, CloseButton } from 'react-bootstrap';
import axios from 'axios';
import userStore  from '../Users/GetUsers.js';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import DashTodo from './DashTodo';



function DashNewNote({ history, filter }) {

    const [modal, setModal] = useState(false)
    const [subject, setSubject] = useState('')
    const currentUser = userStore(state => state.currentUser)
    const setNotes = userStore(state => state.setNotes) 
    const notes = userStore(state => state.notes)

    const [taskModal, setTaskModal] = useState(false)
    const screen = useMediaQuery({query: "(min-width: 1024px)"})


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

      const taskModalStyle = {
        content: {
            top: '45%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2
          },
      }


    function openModal() {
        setModal(true)
    }

    function closeModal() {
        setModal(false)
    }

    function openTaskModal() {
        setTaskModal(true)
    }

    function closeTaskModal() {
        setTaskModal(false)
    }



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
        
        <div>

            {screen
            ?
                <div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Button style={{display: "flex", justifyContent: "right", marginLeft:"10px", backgroundColor:"black"}} onClick={openModal} variant="dark">{screen ? "New Note" : "+"}</Button>
                    </div>
                    <div className= "modalDiv">
                        <Modal isOpen= {modal} onRequestClose={() => setModal(false)} style={modalStyle}>
                            <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}}>
                                <h3>New Note</h3>   
                                <CloseButton onClick={closeModal}/>
                            </div>
                            <InputGroup className="mb-3">
                                <FormControl placeholder="Enter Note Name" style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}} value={subject} onChange={(e) => setSubject(e.target.value)} />
                                <Link to="/dashboard"><Button style={{backgroundColor:"black"}} variant="dark" onClick={newNote} >Create</Button></Link>
                            </InputGroup>                
                        </Modal>
                    </div>
                </div>
            :
                <div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Button style={{display: "flex", justifyContent: "right", marginLeft:"10px", backgroundColor:"black"}} onClick={openModal} variant="dark">{screen ? "New Note" : "Note"}</Button>
                        <Button style={{display: "flex", justifyContent: "right", marginLeft:"10px", backgroundColor:"black"}} onClick={openTaskModal} variant="dark">Task</Button>
                    </div>
                    <div className= "modalDiv">
                        <Modal isOpen= {modal} onRequestClose={() => setModal(false)} style={modalStyle}>
                            <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}}>
                                <h3>New Note</h3>   
                                <CloseButton onClick={closeModal}/>
                            </div>
                            <InputGroup className="mb-3">
                                <FormControl placeholder="Enter Note Name" style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}} value={subject} onChange={(e) => setSubject(e.target.value)} />
                                <Link to="/dashboard"><Button style={{backgroundColor:"black"}} variant="dark" onClick={newNote}>Create</Button></Link>
                            </InputGroup>                
                        </Modal>
                    </div>
                    <div className= "modalDiv">
                        <Modal isOpen= {taskModal} onRequestClose={() => setTaskModal(false)} style={taskModalStyle}>
                            <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}}>
                                <h3>Task List</h3>   
                                <CloseButton onClick={closeTaskModal}/>
                            </div>
                            <DashTodo />
                        </Modal>
                    </div>
                </div>
            }

        </div>
    );
}

export default DashNewNote;