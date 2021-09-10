import React from 'react';
import { CloseButton, FormControl } from 'react-bootstrap';
import './styles/Dashboard.css'



function DashSearch({ setFilter, filter }) {


    function resetFilter (e) {
        e.preventDefault()
        setFilter("")
    }

    return (
        <div>
            
            <form className="filter-form">
                <FormControl style={{marginRight: '10px', border:"none"}} placeholder="Filter" value={filter} onChange={e => {setFilter(e.target.value)}} />
                <CloseButton onClick={(e) => resetFilter(e)}/>
            </form>

        </div>

    );
}

export default DashSearch;