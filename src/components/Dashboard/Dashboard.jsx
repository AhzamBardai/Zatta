import React, { useState, useEffect } from 'react';
// import DashHeader from './DashHeader';
import Navigation from '../Landing/Navigation';
import DashTodo from './DashTodo';
import DashFiles from './DashFiles';
import { useMediaQuery } from 'react-responsive';
import userStore  from '../Users/GetUsers.js';
import axios from 'axios';

function Dashboard({ history }) {

    const currentUser = userStore(state => state.currentUser)
    const notes = userStore(state => state.notes)
    const urlNotes = userStore(state => state.urlNotes)
    const isLoggedIn = userStore(state => state.isLoggedIn)
    const [files, setFiles] = useState(notes)                      //setting state and variable for the files
    const [filter, setFilter] = useState("")                    //setting state and variable for the filter function
    const [search, setSearch] = useState("")                    //setting state and variable for the search function
    
    const screen = useMediaQuery({query: "(min-width: 1024px)"})

    useEffect(() => {
        axios.get(urlNotes + `author/${currentUser._id}`).then(res => {
            setFiles(res.data)
        })        
    } ,[notes])

    return (
        <div style={{backgroundColor:"#F3F4F6", height: "100vh"}}>
            {screen 
            ?
                <div>
                    <Navigation />
                    <div style={{display: "flex", justifyContent: 'space-around', marginTop:"20px", marginBottom:"20px"}}>
                        <div style={{display:"flex", flexDirection: 'row',justifyContent:"center",overflowY: "auto", height: "83vh", width: "65%", backgroundColor: "white", boxShadow:"0 0 10px darkgray", borderRadius:"15px", padding: "10px", marginLeft:"30px", marginRight:"30px", marginBottom: "10px"}}>
                            <DashFiles 
                                filter= {filter}
                                files= {files}
                                setFiles= {setFiles}
                                setFilter= {setFilter}
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
                    <Navigation />
                    <div style={{display: "flex", justifyContent: 'space-around', marginTop:"10px"}}> 
                        <div style={{flexDirection: 'row', height: "88vh",overflowY: "auto", width: "80%", backgroundColor: "white", boxShadow:"0 0 10px darkgray", borderRadius:"15px", padding: "10px"}}>
                            <DashFiles 
                                filter= {filter}
                                files= {files}
                                setFiles= {setFiles}
                                setFilter= {setFilter}
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