import React, { useState, useEffect } from 'react';
import DashFilter from './DashFilter'
import DashNewTodo from './DashNewTodo';
import { useMediaQuery } from 'react-responsive';
import { Button, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import userStore  from '../Users/GetUsers.js';
import './styles/Dashboard.css';




function DashTodo(props) {


    const currentUser = userStore(state => state.currentUser)
    const todos = userStore(state => state.todos)
    const urlTodos = userStore(state => state.urlTodos)

    const [task, setTask] = useState(todos)
    const [taskFilter, setTaskFilter] = useState("")
    const screen = useMediaQuery({query: "(min-width: 1024px)"})
    const [check, setCheck] = useState("")

    
    useEffect(() => {
        axios.get(urlTodos + `author/${currentUser._id}`).then(res => {
            setTask(res.data)
        })        
    } ,[todos])


    function deleteNote(id)  {
        axios.delete(urlTodos + id)
            .then(() => {
                axios.get(urlTodos + `author/${currentUser._id}`).then(res => {
                    setTask(res.data)
                })
            })
    }


    return (
        
        <div>
            
            <div style={{display: "flex", flexDirection:"row", justifyContent: "center", alignItems: "baseline", flexWrap: "wrap"}}>
                <DashFilter 
                filter={taskFilter}
                setFilter={setTaskFilter}
                />
                <DashNewTodo />



            </div>
            <div className='dash-task-container'>
                <section className='dash-task-box'>
                    {task.filter((file) => {
                        if (taskFilter === "") {
                            return file.subject //
                        } else if (file.subject.toLowerCase().includes(taskFilter.toLowerCase())) { //
                            return file.subject //
                        } else return null 
                    }).map(filter => {
                        return (
                            <div className='task-card' style={{display: "flex", justifyContent: "center",alignItems:"center" , marginTop:"10px"}}>

                                {/* <Button variant="outline-dark" style={{height:"25px", width: "25px", justifyContent:"center"}} onClick={() => setCheck("✔")}>{check}</Button> */}
                                {/* <InputGroup.Checkbox aria-label="Checkbox for tasks" /> */}
                                <input style={{height:"25px", width:"25px"}} type="checkbox" value="true"/>    
                                <div style={{display:"flex", flexWrap:"wrap", justifyContent:"flex-start", width:"88%", marginLeft:"10px", height:"100%"}}>
                                    {filter.subject}
                                </div>
                                <Button variant="outline-danger" onClick={() => deleteNote(filter._id)} style={{float: "center", padding: "2px 10px 2px 10px"}}>X</Button>
                            </div>
                        )
                    })
                    }
                </section>
            </div>
            
        </div>
    );
}

export default DashTodo;