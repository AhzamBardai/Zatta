import React, { useEffect } from 'react';
import DashNavigation from '../Landing/DashNavigation';
import DashTodo from './DashTodo';
import DashFiles from './DashFiles';
import { useMediaQuery } from 'react-responsive';
import userStore  from '../Users/GetUsers.js';
import axios from 'axios';

function Dashboard({ history }) {

    const currentUser = userStore(state => state.currentUser)

    // notes states
    const urlNotes = userStore(state => state.urlNotes)
    const setNotes = userStore(state => state.setNotes)

    //todo states
    const urlTodos = userStore(state => state.urlTodos)
    const setTodos = userStore(state => state.setTodos)



    const screen = useMediaQuery({query: "(min-width: 1024px)"})

    useEffect(() => {
        axios.get(urlNotes + `author/${currentUser._id}`).then(res => {
            setNotes(res.data)
        })
        axios.get(urlTodos + `author/${currentUser._id}`).then(res => {
            setTodos(res.data)
        })     
    } ,[])

    

    return (
        <div style={{backgroundColor:"#F3F4F6", height: "100vh"}}>

            {screen 
            ?
                <div>
                    <DashNavigation />
                    <div style={{display: "flex", justifyContent: 'space-around', marginTop:"20px", marginBottom:"20px"}}>
                        <div style={{display:"flex", flexDirection: 'row',justifyContent:"center",overflowY: "auto", height: "83vh", width: "65%", backgroundColor: "white", boxShadow:"0 0 10px darkgray", borderRadius:"15px", padding: "10px", marginLeft:"30px", marginRight:"30px", marginBottom: "10px"}}>
                            <DashFiles 
                                history={history}
                            />
                        </div>
                        <div style={{display: "flex", flexDirection: 'column',overflowY: "auto", backgroundColor: "white", boxShadow:"0 0 10px darkgray", borderRadius:"15px", padding: "10px", height: "83vh", marginRight:"20px", width:"30%", marginBottom:"10px"}}>
                            <DashTodo />
                        </div>
                    </div>
                </div>
            :
                <div style={{backgroundColor:"#F3F4F6"}}>
                    <DashNavigation />
                    <div style={{display: "flex", justifyContent: 'space-around', marginTop:"10px"}}> 
                        <div style={{flexDirection: 'row', height: "88vh",overflowY: "auto", width: "80%", backgroundColor: "white", boxShadow:"0 0 10px darkgray", borderRadius:"15px", padding: "10px"}}>
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