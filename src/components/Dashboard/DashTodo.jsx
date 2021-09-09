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

    //todo states
    const urlTodos = userStore(state => state.urlTodos)
    const setTodos = userStore(state => state.setTodos)
    const todos = userStore(state => state.todos)
    const setTodosFilter = userStore(state => state.setTodosFilter)
    const todosFilter = userStore(state => state.todosFilter)


    const screen = useMediaQuery({query: "(min-width: 1024px)"})
    const [check, setCheck] = useState("")

    
    useEffect(() => {
        axios.get(urlTodos + `author/${currentUser._id}`).then(res => {
            setTodos(res.data)
        })       
    } ,[])


    function deleteNote(id)  {
        axios.delete(urlTodos + id)
            .then(() => {
                axios.get(urlTodos + `author/${currentUser._id}`).then(res => {
                    setTodos(res.data)
                })
                console.log('todo delete') 
            })
    }


    return (
        
        <div>
            
            <div style={{display: "flex", flexDirection:"row", justifyContent: "center", alignItems: "baseline", flexWrap: "wrap"}}>
                <DashFilter 
                filter={todosFilter}
                setFilter={setTodosFilter}
                />
                <DashNewTodo />



            </div>
            <div className='dash-task-container'>
                <section className='dash-task-box'>
                    {todos.filter((file) => {
                        if (todosFilter === "") {
                            return file.subject //
                        } else if (file.subject.toLowerCase().includes(todosFilter.toLowerCase())) { //
                            return file.subject //
                        } else return null 
                    }).map((filter, index) => {
                        return (
                            <div className='task-card' style={{display: "flex", justifyContent: "center",alignItems:"center" , marginTop:"10px"}}>

                                {/* <Button variant="outline-dark" style={{height:"25px", width: "25px", justifyContent:"center"}} onClick={() => setCheck("✔")}>{check}</Button> */}
                                {/* <InputGroup.Checkbox aria-label="Checkbox for tasks" /> */}
                                <div style={{display:"flex", flexWrap:"wrap", justifyContent:"flex-start", width:"88%", marginLeft:"10px", height:"100%"}}>
                                    {index + 1 +'. ' + filter.subject}
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