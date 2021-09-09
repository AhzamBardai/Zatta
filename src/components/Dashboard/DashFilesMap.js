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
            ).map(filter => (

            
                <div className='files'>
                    <Link to= {`/notes/${filter._id}`} key= {filter.subject} className='file-link'>
                        <div className='file-card'>
                            
                            <div className="file-image-container">
                                <img className="file-image" src= {fileImage} alt= {filter.subject}/>
                            </div> 

                            <div className="file-name">
                                {filter.subject}
                            </div>

                        </div>
                    </Link>
                </div>
            
            ))
    )


}

export default DashFilesMap
