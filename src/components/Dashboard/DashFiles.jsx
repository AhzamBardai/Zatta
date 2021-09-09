import React,{ useEffect } from 'react';
import DashFilter from './DashFilter';
import DashNewNote from './DashNewNote';
import { useMediaQuery } from 'react-responsive';
import userStore  from '../Users/GetUsers.js';
import axios from 'axios';
import './styles/Dashboard.css'
import DashFilesMap from './DashFilesMap';


function DashFiles({  history }) {



    const currentUser = userStore(state => state.currentUser)
    const screen = useMediaQuery({query: "(min-width: 1024px)"})

    // notes states
    const urlNotes = userStore(state => state.urlNotes)
    const setNotes = userStore(state => state.setNotes)
    const setNotesFilter = userStore(state => state.setNotesFilter)
    const notesFilter = userStore(state => state.notesFilter)

    useEffect(() => {
        axios.get(urlNotes + `author/${currentUser._id}`).then(res => {
            setNotes(res.data)
        })       
    } ,[currentUser._id, setNotes, urlNotes])


    return (

        <div style={{width:"95%"}}>
            
            {screen
                ?
                <div>
                    <div style={{display: "flex", flexDirection:"row", justifyContent: "center", alignItems: "baseline", flexWrap: "wrap"}}>
                        
                        <DashFilter setFilter= {setNotesFilter}  filter= {notesFilter}/>

                        <DashNewNote setFilter= {setNotesFilter}  filter= {notesFilter} history={history} />

                        
                    </div>
                    <section className='dash-files-box' style={{display: "flex", flexDirection: "row", flexWrap: "wrap", marginTop: '50px' }}>
                        
                        <DashFilesMap />
                    
                    </section>
                </div>
                :
                <div>
                    <div style={{display: "flex", flexDirection:"row", justifyContent: "center", alignItems: "baseline", flexWrap: "wrap"}}>
                        
                        <DashFilter setFilter= {setNotesFilter}  filter= {notesFilter}/>

                        <DashNewNote history={history} />
                    </div>

                    <section className='dash-files-box' style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
                        
                        <DashFilesMap />
                    
                    </section>
                </div>
            }
                
        </div>
    );
}


export default DashFiles;