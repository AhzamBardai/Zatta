import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap'


function DashSearch({ search, setSearch, match, setFilter, filter }) {

    function resetFilter () {
        setFilter("")
        
    }

    function handleChange (e) {
        setSearch(e.target.value)
    }

    function handleSubmit (e) {
        if (search == "") {
            e.preventDefault()
        } else {
        match.history.push(`/${search}`)
        setSearch("")
        }
    }



    return (
        <div>
            <InputGroup className="mb-3">
                <form onClick= {handleSubmit}>
                    <FormControl placeholder="Search Notes" type= "text" onChange= {handleChange} value= {search} />
                    <Button type= "submit"  variant="outline-secondary">Search</Button>
                </form>
            </InputGroup>
            <InputGroup className="mb-3">
                <form>
                    <FormControl placeholder="Filter Notes" value={filter} onChange={e => {setFilter(e.target.value)}} />
                    <Button type= "submit" onClick={resetFilter} variant="outline-secondary">Reset</Button>
                </form>
            </InputGroup>
            {/* <input type= "text" placeholder= "Filter Search" value={filter} onChange={e => {setFilter(e.target.value)}}/> */}
            {/* <button type= "submit" onClick={resetFilter} >Reset</button> */}
        </div>

    );
}

export default DashSearch;