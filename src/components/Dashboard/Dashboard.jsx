import React, { useState, useEffect } from 'react';
import DashHeader from './DashHeader';
import DashFilter from './DashFilter';
import DashFiles from './DashFiles';
import DashNewNote from './DashNewNote';


function Dashboard(props) {

    const [filter, setFilter] = useState("")                    //setting state and variable for the filter function
    const [search, setSearch] = useState("")                    //setting state and variable for the search function

    


    return (
        <div>

            {/* pass in the dashbopard header */}
                <DashHeader />

            {/* search bar / file filter */}
            
            <div style={{display: "flex", flexDirection: 'row', justifyContent: 'center'}}>
            <DashFilter 
                    files = {props.files}
                    setFilter= {setFilter}  
                    filter= {filter}
                    search = {search}
                    setSearch= {setSearch}
            />

            {/* new file button */}
            <DashNewNote />
            </div>

            {/* run a fetch and map out the files here. opening them will then lead to the note page */}
            <DashFiles 
                files= {props.files}
                filter= {filter}
            />

        </div>
    );
}

export default Dashboard;