import React from 'react';
import { Link } from 'react-router-dom'
import fileImage from '../images/file.png'
import './styles/Dashboard.css'
import DashFilter from './DashFilter';
import DashNewNote from './DashNewNote';
import { useMediaQuery } from 'react-responsive';

function DashFiles({ files, filter, setFilter, history }) {

    const screen = useMediaQuery({query: "(min-width: 1024px)"})

    return (

        <div style={{width:"95%"}}>
            {screen
            ?
                <div>
                    <div style={{display: "flex", flexDirection:"row", justifyContent: "center", alignItems: "baseline", flexWrap: "wrap"}}>
                        <DashFilter 
                            files = {files}
                            setFilter= {setFilter}  
                            filter= {filter}
                        />

                        <DashNewNote 
                        files={files}
                        filter={filter}
                        history={history}
                        />

                        
                    </div>
                    <section className='dash-files-box' style={{display: "flex", flexDirection: "row", flexWrap: "wrap", marginTop: '50px' }}>
                        {files.filter((file) => filter === ""                                                 // if 
                                                ? file.subject 
                                                : file.subject.toLowerCase().includes(filter.toLowerCase())   // else if  
                                                ? file.subject 
                                                : null                                                        // else      
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
            :
            <div>
            <div style={{display: "flex", flexDirection:"row", justifyContent: "center", alignItems: "baseline", flexWrap: "wrap"}}>
                <DashFilter 
                    files = {files}
                    setFilter= {setFilter}  
                    filter= {filter}
                />

                <DashNewNote history={history} />
            </div>
            <section className='dash-files-box' style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
                {files.filter((file) => filter === ""                                                 // if 
                                        ? file.subject 
                                        : file.subject.toLowerCase().includes(filter.toLowerCase())   // else if  
                                        ? file.subject 
                                        : null                                                        // else      
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
            }
                
        </div>
    );
}


export default DashFiles;