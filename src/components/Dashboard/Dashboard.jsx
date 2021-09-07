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
    const [files, setFiles] = useState(notes)                      //setting state and variable for the files
    const [filter, setFilter] = useState("")                    //setting state and variable for the filter function
    const [search, setSearch] = useState("")                    //setting state and variable for the search function
    
    const screen = useMediaQuery({query: "(min-width: 1024px)"})

    useEffect(() => {
        axios.get(urlNotes + `/author/${currentUser._id}`).then(res => {
            setFiles(res.data)
        })        
    } ,[])

    return (
        <div style={{backgroundColor:"#F3F4F6"}}>
            {screen 
            ?
                <div>
                    <Navigation />
                    <div style={{display: "flex", justifyContent: 'space-around', marginTop:"10px"}}>
                        <div style={{flexDirection: 'row', width: "70%", backgroundColor: "white", boxShadow:"0 0 10px darkgray", borderRadius:"20px", padding: "10px"}}>
                            <DashFiles 
                                filter= {filter}
                                files= {files}
                                setFiles= {setFiles}
                                setFilter= {setFilter}
                            />
                        </div>
                        <div style={{display: "flex", flexDirection: 'column', backgroundColor: "white", boxShadow:"0 0 10px darkgray", borderRadius:"20px", padding: "10px"}}>
                            <DashTodo />
                        </div>
                    </div>
                </div>
            :
                <div style={{backgroundColor:"#F3F4F6"}}>
                    <Navigation />
                    <div style={{display: "flex", justifyContent: 'space-around', marginTop:"10px"}}> 
                        <div style={{flexDirection: 'row', width: "80%", backgroundColor: "white", boxShadow:"0 0 10px darkgray", borderRadius:"20px", padding: "10px"}}>
                            <DashFiles 
                                filter= {filter}
                                files= {files}
                                setFiles= {setFiles}
                                setFilter= {setFilter}
                            />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
export default Dashboard;