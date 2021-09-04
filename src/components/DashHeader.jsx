import React from 'react';

function DashHeader({ search, setSearch, match }) {

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
            <h2>Dashboard Header</h2>
            <form onSubmit= { handleSubmit }>
                <input
                    placeholder= "Search Notes"
                    type= "text"
                    onChange= { handleChange }
                    value= { search } />
                <button type= "submit">Search</button>
            </form>
        </div>
    );
}

export default DashHeader;