import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap'


function DashSearch({ search, setSearch, setFilter, filter }) {

    function resetFilter (e) {
        e.preventDefault()
        setFilter("")
    }

    return (
        <div style={{display: "flex",  justifyContent: "center", width: '20rem' }}>

                <form style={{display: "flex", flexDirection: 'row'}}>
                    <FormControl placeholder="Filter Notes" value={filter} onChange={e => {setFilter(e.target.value)}} style={{marginRight: '10px'}} />
                    <Button  type= "submit" onClick={(e) => resetFilter(e)} variant="outline-secondary">Reset</Button>
                </form>

        </div>

    );
}

export default DashSearch;