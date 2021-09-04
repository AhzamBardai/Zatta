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

            <InputGroup style={{display: "flex", justifyContent: "right"}} className="mb-3">
                <form>
                    <FormControl placeholder="Filter Notes" value={filter} onChange={e => {setFilter(e.target.value)}} />
                    <Button style={{float: "right"}} type= "submit" onClick={resetFilter} variant="outline-secondary">Reset</Button>
                </form>
            </InputGroup>

        </div>

    );
}

export default DashSearch;