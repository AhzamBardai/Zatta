import React, { useState, useEffect } from 'react';
import DashHeader from './DashHeader';
import DashFilter from './DashFilter';
import DashFiles from './DashFiles';
import DashNewNote from './DashNewNote';
import userStore  from '../Users/GetUsers.js';

function Dashboard({ history }) {

    const currentUser = userStore(state => state.currentUser)
    const notes = userStore(state => state.notes)
    const [files, setFiles] = useState([])                      //setting state and variable for the files
    const [filter, setFilter] = useState("")                    //setting state and variable for the filter function
    const [search, setSearch] = useState("")                    //setting state and variable for the search function
    
    useEffect(() => {
        const arr = notes.filter(item => item.author === currentUser[0]._id)
        console.log(currentUser[0]._id)
        setFiles(arr)
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