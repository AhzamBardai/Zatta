import React, { useState } from 'react';
import './styles/Dashboard.css';
import todo from './todo.json';
import DashFilter from './DashFilter'
import DashNewTodo from './DashNewTodo';
import { useMediaQuery } from 'react-responsive';
import { Button, InputGroup, FormControl, CloseButton } from 'react-bootstrap';






function DashTodo(props) {

    const [task, setTask] = useState(todo)
    const [taskFilter, setTaskFilter] = useState("")
    const screen = useMediaQuery({query: "(min-width: 1024px)"})




    return (
        
        <div>
            
            <div style={{display: "flex", flexDirection:"row", justifyContent: "flex-end", alignItems: "baseline", flexWrap: "wrap"}}>
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
                            <div className='dash-task'>
                                <div className="dash-task-name">
                                    <div className='task-card' style={{display: "flex", justifyContent: "center"}}>
                                        <span>{filter.subject}</span>
                                        {/* <InputGroup>
                                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                            <FormControl aria-label={filter.subject}/>
                                        </InputGroup> */}
                                    </div>
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