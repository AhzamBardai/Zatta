import React from 'react';
import { Link } from 'react-router-dom'
import fileImage from '../../images/file.png'
import './Dashboard.css'

function DashFiles({ files, filter }) {
    return (
        <div className='dash-files-container'>
            <section className='dash-files-box'>
                {files.filter((files) => {
                    if (filter === "") {
                        return files.subject
                    } else if (files.subject.toLowerCase().includes(filter.toLowerCase())) {
                        return files.subject
                    } else return null 
                }).map(filter => {
                    return (
                        <div className='dash-files'>
                            <Link to= {`/notes/${filter._id}`} key= {filter.subject} className='dash-file-link'>
                                <div className='dash-card'>
                                        <img src= {fileImage} alt= {filter.subject} width= "60px" height= "100%"/>
                                        <span>{filter.subject}</span>
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

export default DashFiles;