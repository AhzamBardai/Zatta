import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button, InputGroup, FormControl, CloseButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';



//https://www.npmjs.com/package/react-modal#installation


function DashNewTodo({ history }) {

    const [modal, setModal] = useState(false)
    const [subject, setSubject] = useState('')
    // const currentUser = userStore(state => state.currentUser)
    // const setNotes = userStore(state => state.setNotes) 
    const screen = useMediaQuery({query: "(min-width: 1180px)"})

    
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
    }

    // //change to tasks instead of notes
    // const newNote = () => {
    //     const urlNotes = `https://zatta1.herokuapp.com/api/notes/`
    //     axios.post(urlNotes, { subject: subject, text: '', author: currentUser[0]._id })
    //         .then((res) => {
    //             axios.get(urlNotes).then(res => {
    //                 setNotes(res.data)
    //             })
    //             history.push(`/notes/${res.data._id}`)
    //         })
    //     closeModal()
    // }


    return (
        
        <div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Button style={{display: "flex", justifyContent: "right", marginLeft:"10px", backgroundColor:"black"}} onClick={openModal} variant="dark">{screen ? "New Task" : "+"}</Button>
            </div>
            <div className= "modalDiv">
                <Modal isOpen= {modal} onRequestClose={() => setModal(false)} style={modalStyle}>
                    <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}}>
                        <h3>New Task</h3>   
                        <CloseButton onClick={closeModal}/>
                    </div>
                    <InputGroup className="mb-3">
                        <FormControl placeholder="Enter Task" style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}} value={subject} onChange={(e) => setSubject(e.target.value)} />
                        {/* add the onclick to make the task in database */}
                        <Link to="/dashboard"><Button style={{backgroundColor:"black"}} variant="dark" >Create</Button></Link>
                    </InputGroup>                
                </Modal>
            </div>
        </div>
    );
}

export default DashNewTodo;