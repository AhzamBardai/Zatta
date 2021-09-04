import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import DashHeader from './DashHeader';
import DashFilter from './DashFilter';
import DashFiles from './DashFiles';
import DashNewNote from './DashNewNote';


function Dashboard(props) {

    const [files, setFiles] = useState([])                      //setting state and variable for the files
    const [filter, setFilter] = useState("")                    //setting state and variable for the filter function
    const [search, setSearch] = useState("")                    //setting state and variable for the search function
    
    useEffect(() => {                                           //fetching backend data
        const url = "https://zatta1.herokuapp.com/api/notes"
        fetch(url)
        .then((res) => {return res.json()})
        .then((res) => {
            setFiles(res)
            console.log(files)
        })
        .catch(console.error)
    }, [])


    return (
        <div>

            {/* pass in the dashbopard header */}
            <Route  render= {(routerProps) => (
                <DashHeader
                    search = {search}
                    setSearch= {setSearch}
                    match= {routerProps} />
            )} />

            {/* search bar / file filter */}
            <DashFilter 
                files = {files}
                setFilter= {setFilter}
                filter= {filter}
            />

            {/* new file button */}
            <DashNewNote />

            {/* run a fetch and map out the files here. opening them will then lead to the note page */}
            <DashFiles 
                files= {files}
                filter= {filter}
            />

        </div>
    );
}

export default Dashboard;