import React from 'react';
import { Link } from 'react-router-dom'
import fileImage from '../../images/file.png'

function DashFiles({ files, filter }) {
    return (
        <div>
            <section style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginLeft: "20%", marginRight: "20%"}}>
                {files.filter((files) => {
                    if (filter === "") {
                        return files.subject
                    } else if (files.subject.toLowerCase().includes(filter.toLowerCase())) {
                        return files.subject
                    } else return null 
                }).map(filter => {
                    return (
                        <div>
                            <div>
                                <Link to= {`/notes/${filter._id}`} key= {filter.subject} style={{display: "flex", flexDirection: "column", margin: "20px"}}>
                                    <img src= {fileImage} alt= {filter.subject} width= "60px" height= "100%"/>
                                    {filter.subject}
                                </Link>
                            </div>
                        </div>
                    )
                })
                }
            </section>
        </div>
    );
}

export default DashFiles;