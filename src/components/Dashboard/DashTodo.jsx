import React, { useState, useEffect } from 'react';
import './styles/Dashboard.css';
import DashFilter from './DashFilter'
import DashNewTodo from './DashNewTodo';
import { useMediaQuery } from 'react-responsive';
import { Button, InputGroup, FormControl, CloseButton } from 'react-bootstrap';
import axios from 'axios';
import userStore  from '../Users/GetUsers.js';






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




    return (
        
        <div>
            
            {/* <div style={{display: "flex", flexDirection:"row", justifyContent: "flex-end", alignItems: "baseline", flexWrap: "wrap", marginBottom:"10px"}}> */}
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
                                    <div className='task-card' style={{display: "flex", justifyContent: "center", marginTop:"10px"}}>
                                            <Button variant="outline-dark" style={{height:"25px", width: "25px", justifyContent:"center"}} onClick={() => setCheck("✔")}>{check}</Button>
                                            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"flex-start", width:"88%", marginLeft:"10px", height:"100%"}}>
                                                {filter.subject}
                                            </div>
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