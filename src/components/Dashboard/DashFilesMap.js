import React from 'react';
import { Link } from 'react-router-dom'
import fileImage from '../images/file.png'
import './styles/Dashboard.css'
import userStore  from '../Users/GetUsers.js';



function DashFilesMap() {


    const notes = userStore(state => state.notes)
    const notesFilter = userStore(state => state.notesFilter)

    return (
        notes.filter((file) => notesFilter === ""
                ? file.subject
                : file.subject.toLowerCase().includes(notesFilter.toLowerCase())
                ? file.subject
                : null
            ).map((filter, index) => (

            
                <div className='dash-files' style={{width: "8rem"}} key={index + 1}>
                    <Link to= {`/notes/${filter._id}`} className='dash-file-link' style={{display: "flex", flexDirection: "column", margin: "20px", textDecoration: "none", color: "black"}}>
                        <div className='dash-card' style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                            
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <img src= {fileImage} alt= {filter.subject} width= "60px" height= "100%"/>
                            </div> 

                            <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap", textAlign:"center"}}>
                                {filter.subject}
                            </div>

                        </div>
                    </Link>
                </div>
            
            ))
    )


}

export default DashFilesMap
