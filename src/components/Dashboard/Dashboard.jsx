import React, { useEffect } from 'react';
import DashNavigation from './DashNavigation';
import DashTodo from './DashTodo';
import DashFiles from './DashFiles';
import { useMediaQuery } from 'react-responsive';
import userStore  from '../Users/GetUsers.js';
import axios from 'axios';
import './styles/Dashboard.css'



function Dashboard({ history }) {

    const currentUser = userStore(state => state.currentUser)

    // notes states
    const urlNotes = userStore(state => state.urlNotes)
    const setNotes = userStore(state => state.setNotes)

    //todo states
    const urlTodos = userStore(state => state.urlTodos)
    const setTodos = userStore(state => state.setTodos)


    const screen = useMediaQuery({query: "(min-width: 1024px)"})
    const height890 = useMediaQuery({query: "(min-height: 890px)"})

    useEffect(() => {
        if(currentUser._id){
            axios.get(urlNotes + `author/${currentUser._id}`).then(res => {
                setNotes(res.data)
            }).catch(() => console.log('dash useeffect'))
            axios.get(urlTodos + `author/${currentUser._id}`).then(res => {
                setTodos(res.data)
            }).catch(() => console.log('dash useeffect'))
        }
    } ,[currentUser._id, setNotes, setTodos, urlNotes, urlTodos])

    

    return (
        <div className="dashboard-background" style={height890 ? {height: '100vh'} : {height: '100%'}}>

            {screen 
            ?
                <div>

                    <DashNavigation />
                    <div className="dashboard-container">
                        <div className="dashboard-files-container">
                            <DashFiles 
                                history={history}
                            />
                        </div>
                        <div className="dashboard-todo-container">
                            <DashTodo />
                        </div>
                    </div>

                </div>
            :
                <div className="dashboard-background">

                    <DashNavigation />
                    <div className="responsive-dashboard-container">
                        <div className="responsive-dashboard-files">
                            <DashFiles 
                                history={history}
                            />
                        </div>
                    </div>
                </div>
            }
            
        </div>
    );
}
export default Dashboard;