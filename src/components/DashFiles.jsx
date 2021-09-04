import React from 'react';
import { Link } from 'react-router-dom'
import fileImage from '../images/file.png'

function DashFiles({ files, filter }) {
    return (
        <div>
            <section>
                {files.filter((files) => {
                    if (filter == "") {
                        return files.subject
                    } else if (files.subject.toLowerCase().includes(filter.toLowerCase())) {
                        return files.subject
                    }
                }).map(filter => {
                    return (
                        <div>
                            <Link to= {`/${filter.subject}`} key= {filter.subject} style={{textDecoration:"none",color: "black", display: "flex", flexDirection:"column"}}>
                                <img src= {fileImage} alt= {filter.subject} width= "60px" height= "100%"/>
                                {filter.subject}
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