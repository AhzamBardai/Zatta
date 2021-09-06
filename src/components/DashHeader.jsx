import React from 'react';
import { Link } from 'react-router-dom'

function DashHeader({ search, setSearch, match }) {

    function handleChange (e) {
        setSearch(e.target.value)
    }

    function handleSubmit (e) {
        match.history.push(`/${search}`)
        setSearch("")
    }
    return (
        <div>
            <Link to="/dashboard" style={{textDecoration: "none"}}>
            <h1 style={{textAlign: "center", backgroundColor: "blue", padding: "30px", color: "white"}}>Zatta</h1>
            </Link>
        </div>
    );
}

export default DashHeader;