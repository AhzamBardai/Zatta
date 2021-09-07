import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button, InputGroup, FormControl, CloseButton } from 'react-bootstrap';
import axios from 'axios';
import userStore  from '../Users/GetUsers.js';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import todo from './todo.json';
import DashTodoFilter from './DashFilter'
import fileImage from '../images/file.png';



function DashNewNote({ history, filter }) {

    const [modal, setModal] = useState(false)
    const [subject, setSubject] = useState('')
    const currentUser = userStore(state => state.currentUser)
    const setNotes = userStore(state => state.setNotes) 
    const notes = userStore(state => state.notes)

    // todo
    const [taskModal, setTaskModal] = useState(false)
    const [task, setTask] = useState(todo)
    const [taskFilter, setTaskFilter] = useState("")
    const screen = useMediaQuery({query: "(min-width: 1024px)"})


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
                        <Button style={{display: "flex", justifyContent: "right", marginLeft:"10px"}} onClick={openModal} variant="primary">{screen ? "New Note" : "+"}</Button>
                    </div>
                    <div className= "modalDiv">
                        <Modal isOpen= {modal} onRequestClose={() => setModal(false)} style={modalStyle}>
                            <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}}>
                                <h3>New Note</h3>   
                                <CloseButton onClick={closeModal}/>
                            </div>
                            <InputGroup className="mb-3">
                                <FormControl placeholder="Enter Note Name" style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}} value={subject} onChange={(e) => setSubject(e.target.value)} />
                                <Link to="/dashboard"><Button variant="outline-secondary" onClick={newNote} >Create</Button></Link>
                            </InputGroup>                
                        </Modal>
                    </div>
                    <section className='dash-files-box' style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
                        {notes.filter((file) => filter === ""                                                 // if 
                                                ? file.subject 
                                                : file.subject.toLowerCase().includes(filter.toLowerCase())   // else if  
                                                ? file.subject 
                                                : null                                                        // else      
                            ).map(filter => {
                                return (
                                    <div className='dash-files' style={{width: "8rem"}}>
                                        <Link to= {`/notes/${filter._id}`} key= {filter.subject} className='dash-file-link' style={{display: "flex", flexDirection: "column", margin: "20px", textDecoration: "none", color: "black"}}>
                                            <div className='dash-card' style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                <div style={{display: "flex", justifyContent: "center"}}>
                                                    <img src= {fileImage} alt= {filter.subject} width= "60px" height= "100%"/>
                                                </div>    
                                                <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap", textAlign:"center"}}>
                                                    {filter.subject}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </section>
                </div>
            :
                <div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Button style={{display: "flex", justifyContent: "right", marginLeft:"10px"}} onClick={openModal} variant="primary">{screen ? "New Note" : "+"}</Button>
                        <Button style={{display: "flex", justifyContent: "right", marginLeft:"10px"}} onClick={openTaskModal} variant="primary">Task</Button>
                    </div>
                    <div className= "modalDiv">
                        <Modal isOpen= {modal} onRequestClose={() => setModal(false)} style={modalStyle}>
                            <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}}>
                                <h3>New Note</h3>   
                                <CloseButton onClick={closeModal}/>
                            </div>
                            <InputGroup className="mb-3">
                                <FormControl placeholder="Enter Note Name" style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}} value={subject} onChange={(e) => setSubject(e.target.value)} />
                                <Link to="/dashboard"><Button variant="outline-secondary" onClick={newNote}>Create</Button></Link>
                            </InputGroup>                
                        </Modal>
                    </div>
                    <div className= "modalDiv">
                        <Modal isOpen= {taskModal} onRequestClose={() => setTaskModal(false)} style={modalStyle}>
                            <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}}>
                                <h3>Task List</h3>   
                                <CloseButton onClick={closeTaskModal}/>
                            </div>
                            <InputGroup className="mb-3">
                                <FormControl placeholder="Enter Task" style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}} value={subject} onChange={(e) => setSubject(e.target.value)} />
                                <Link to="/dashboard"><Button variant="outline-secondary">Create</Button></Link>
                            </InputGroup>
                            <DashTodoFilter 
                                taskFilter={taskFilter}
                                setTaskFilter={setTaskFilter}
                            />
                            <div className='dash-task-container'>
                            <section className='dash-task-box'>
                                {task.filter((file) => {
                                    if (taskFilter === "") {
                                        return file.subject
                                    } else if (file.subject.toLowerCase().includes(taskFilter.toLowerCase())) {
                                        return file.subject
                                    } else return null 
                                }).map(filter => {
                                    return (
                                        <div className='dash-task'>
                                            <div className="dash-task-name">
                                                <div className='task-card' style={{display: "flex", justifyContent: "center", marginTop: "5px"}}>
                                                <InputGroup>
                                                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                                    <FormControl aria-label={filter.subject} />
                                                </InputGroup>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            </section>
                        </div>               
                        </Modal>
                    </div>
                </div>
            }
        </div>
    );
}

export default DashNewNote;