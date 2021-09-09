import React from 'react';
import { Link } from 'react-router-dom'
import fileImage from '../images/file.png'
import userStore  from '../Users/GetUsers.js';


function FileList({ filter }) {


    const files = userStore(state => state.notes)


    return (
        <div>
                    <section className='dash-files-box' style={{display: "flex", flexDirection: "row", flexWrap: "wrap", marginTop: '50px'}}>
                        {files.filter((file) => filter === ""
                                                ? file.subject
                                                : file.subject.toLowerCase().includes(filter.toLowerCase())
                                                ? file.subject
                                                : null
                            ).map(filter => {
                                return (
                                    <div className='dash-files' style={{width: "8rem"}}>
                                        <Link to= {`/notes/${filter._id}`} key= {filter.subject} className='dash-file-link' style={{display: "flex", flexDirection: "column", margin: "20px", textDecoration: "none", color: "black"}}>
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
                                )
                            })
                        }
                    </section>
        </div>
    );
}

export default FileList;