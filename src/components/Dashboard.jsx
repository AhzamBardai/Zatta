import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import DashHeader from './DashHeader';
import DashFilter from './DashFilter';
import DashFiles from './DashFiles';
import DashNewNote from './DashNewNote';


function Dashboard(props) {

    const [files, setFiles] = useState([])                      //setting state and variable for the files
    const [filter, setFilter] = useState("")                    //setting state and variable for the filter function
    const [search, setSearch] = useState("")                    //setting state and variable for the search function

    useEffect(() => {                                           //fetching backend data
        const url = "https://zatta1.herokuapp.com/api/notes"
        fetch(url)
        .then((res) => {return res.json()})
        .then((res) => {
            setFiles(res)
            console.log(files)
        })
        .catch(console.error)
    }, [])

    // function newNote() {
    //     axios.put(`http://localhost:4000/gifs/${currentlyEditing}`, {
    //         name,
    //         url
    //       })
    //       .then((resp) => {
    //         console.log(resp)
    //         addPictures(resp.data)
    //         $('#modal-edit').modal('close')
    //       })
    // }


    return (
        <div>

            {/* pass in the dashbopard header */}
                <DashHeader />

            {/* search bar / file filter */}
            <Route  render= {(routerProps) => (
                <DashFilter 
                    files = {files}
                    setFilter= {setFilter}
                    filter= {filter}
                    search = {search}
                    setSearch= {setSearch}
                    match= {routerProps}
                />
            )} />

            {/* new file button */}
            <DashNewNote />

            {/* run a fetch and map out the files here. opening them will then lead to the note page */}
            <DashFiles 
                files= {files}
                filter= {filter}
            />

        </div>
    );
}

export default Dashboard;