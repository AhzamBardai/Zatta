import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button, InputGroup, FormControl, CloseButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import userStore  from '../Users/GetUsers.js';



function DashNewTodo({ history }) {

    const [modal, setModal] = useState(false)
    const [subject, setSubject] = useState('')
    const screen = useMediaQuery({query: "(min-width: 1197px)"})
   
    const currentUser = userStore(state => state.currentUser)

    //todo states
    const urlTodos = userStore(state => state.urlTodos)
    const setTodos = userStore(state => state.setTodos)


    
    const modalStyle = {
        content: {
            top: '35%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            overflowY: "auto",
            zIndex: 2
        },
    };
    
    function openModal() {
        setModal(true)
    }

    function closeModal() {
        setModal(false)
        setSubject("")
    }

    const newTodo = () => {
        axios.post(urlTodos + currentUser._id, { subject: subject, text: '' })
            .then((res) => {
                axios.get(urlTodos + `/author/${currentUser._id}`).then(res => {
                    setTodos(res.data)
                })
                setSubject("")
                closeModal()
            })
    }


    return (
        
        <div>

            <div className="newTodo-button-container">
                <Button style={{display: "flex", justifyContent: "right", marginLeft:"10px", backgroundColor:"black"}} onClick={openModal} variant="dark">{screen ? "New Task" : "+"}</Button>
            </div>
            <div>
                <Modal isOpen= {modal} onRequestClose={() => setModal(false)} style={modalStyle}>
                    <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}}>
                        <h3>New Task</h3>   
                        <CloseButton onClick={closeModal}/>
                    </div>
                    <InputGroup className="mb-3" style={{marginTop:"20px"}}>
                        <FormControl placeholder="Enter Task" style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}} value={subject} onChange={(e) => setSubject(e.target.value)} />
                        <Link to="/dashboard"><Button style={{backgroundColor:"black"}} variant="dark" onClick={newTodo} >Create</Button></Link>
                    </InputGroup>                
                </Modal>
            </div>
            
        </div>
    );
}

export default DashNewTodo;