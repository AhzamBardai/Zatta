import React, { useState, useEffect } from 'react';
import DashHeader from './DashHeader';
import DashFilter from './DashFilter';
import DashFiles from './DashFiles';
import DashNewNote from './DashNewNote';
import userStore  from '../Users/GetUsers.js';
import axios from 'axios';

function Dashboard({ history }) {

    const currentUser = userStore(state => state.currentUser)
    const notes = userStore(state => state.notes)
    const urlNotes = userStore(state => state.urlNotes)
    const [files, setFiles] = useState(notes)                      //setting state and variable for the files
    const [filter, setFilter] = useState("")                    //setting state and variable for the filter function
    const [search, setSearch] = useState("")                    //setting state and variable for the search function
    
    useEffect(() => {
        axios.get(urlNotes + `/author/${currentUser._id}`).then(res => {
            setFiles(res.data)
        })        
    } ,[])

    return (
        <div>

            {/* pass in the dashbopard header */}
                <DashHeader />

            {/* search bar / file filter */}
            
            <div style={{display: "flex", flexDirection: 'row', justifyContent: 'center'}}>
            <DashFilter 
                    files = {files}
                    setFilter= {setFilter}  
                    filter= {filter}
                    search = {search}
                    setSearch= {setSearch}
            />

            {/* new file button */}
            <DashNewNote history={history} />
            </div>

            {/* run a fetch and map out the files here. opening them will then lead to the note page */}
            <DashFiles 
                files= {files}
                filter= {filter}
            />

        </div>
    );
}

export default Dashboard;