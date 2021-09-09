import React from 'react';
import userStore  from '../Users/GetUsers.js';
import { CloseButton, FormControl } from 'react-bootstrap';
import axios from 'axios';



function DashSearch({ setFilter, filter }) {


    function resetFilter (e) {
        e.preventDefault()
        setFilter("")
    }

    return (
        <div>
            
            <form style={{display: "flex", flexDirection: 'row',alignItems:"center", borderRadius:"5px", border:"1px solid #CCC"}}>
                <FormControl placeholder="Filter" value={filter} onChange={e => {setFilter(e.target.value)}} style={{marginRight: '10px', border:"none"}} />
                <CloseButton onClick={(e) => resetFilter(e)}/>
            </form>

        </div>

    );
}

export default DashSearch;