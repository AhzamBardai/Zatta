import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import userStore  from '../Users/GetUsers';



function DashHeader(props) {

    const setLogedIn = userStore(state => state.setLoggedIn)
    
    return (
        <div>
            <Link to="/dashboard" style={{textDecoration: "none"}}>
            <h1 style={{textAlign: "center", backgroundColor: "blue", padding: "30px", color: "white"}}>Zatta</h1>

            <Link to="/login" style={{textDecoration: "none"}}>
                <Button style={{display: "flex", justifyContent: "right"}} onClick={() => setLogedIn(false)} variant="primary">Log out</Button>
            </Link>


            </Link>
        </div>
    );
}

export default DashHeader;