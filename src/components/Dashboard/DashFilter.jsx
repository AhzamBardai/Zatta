import React from 'react';
import { CloseButton, FormControl } from 'react-bootstrap';



function DashSearch({ setFilter, filter }) {


    function resetFilter (e) {
        e.preventDefault()
        setFilter("")
    }

    return (
        <div>
            
            <form style={{display: "flex", flexDirection: 'row',alignItems:"center", borderRadius:"5px", border:"1px solid #CCC"}}>
                <FormControl placeholder="Filter" value={filter} onChange={e => {setFilter(e.target.value)}} style={{marginRight: '4px', border:"none"}} />
                <CloseButton onClick={(e) => resetFilter(e)}/>
            </form>

        </div>

    );
}

export default DashSearch;