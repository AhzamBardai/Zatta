import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button, CloseButton } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import DashTodo from './DashTodo';
import NewNoteModal from './NewNoteModal.js';



function DashNewNote({ history, filter }) {

    const [subject, setSubject] = useState('')
    const [modal, setModal] = useState(false)
    const [taskModal, setTaskModal] = useState(false)
    const screen = useMediaQuery({query: "(min-width: 1024px)"})

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

    function openTaskModal() {
        setTaskModal(true)
    }

    function closeTaskModal() {
        setTaskModal(false)
    }

    
    return (
        
        <div>

            {screen
            ?
                <div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Button style={{display: "flex", justifyContent: "right", marginLeft:"10px", backgroundColor:"black"}} onClick={openModal} variant="dark">{screen ? "New Note" : "+"}</Button>
                    </div>

                    <NewNoteModal subject={subject} setSubject={setSubject} modal={modal} setModal={setModal} history={history} />

                </div>
            :
                <div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Button style={{display: "flex", justifyContent: "right", marginLeft:"10px", backgroundColor:"black"}} onClick={openModal} variant="dark">{screen ? "New Note" : "Note"}</Button>
                        <Button style={{display: "flex", justifyContent: "right", marginLeft:"10px", backgroundColor:"black"}} onClick={openTaskModal} variant="dark">Task</Button>
                    </div>

                    <NewNoteModal subject={subject} setSubject={setSubject} modal={modal} setModal={setModal} history={history} />

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