import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import DashHeader from './DashHeader';
import DashFilter from './DashFilter';
import DashFiles from './DashFiles';
import DashNewNote from './DashNewNote';
import DummyData from './DummyData.json';


function Dashboard(props) {

    const [files, setFiles] = useState(DummyData)           //setting state and variable for the files
    const [filter, setFilter] = useState("")                //setting state and variable for the filter function
    const [search, setSearch] = useState("")                //setting state and variable for the search function

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