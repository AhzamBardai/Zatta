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

        <div className="files-container">
            
            
                <div>
                    <div className="files-filter-newNote-container">
                        
                        <DashFilter setFilter= {setNotesFilter}  filter= {notesFilter}/>

                        <DashNewNote setFilter= {setNotesFilter}  filter= {notesFilter} history={history} />

                        
                    </div>
                    <section className="files-map-container">
                        
                        <DashFilesMap />
                    
                    </section>
                </div>
                
                
        </div>
    );
}


export default DashFiles;