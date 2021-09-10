import React from 'react'
import { modules, formats } from '../quill-options/QuillOptions.js'
import axios from 'axios'
import userStore  from '../Users/GetUsers.js';
import ReactQuill from 'react-quill'


function QuillEditor({ notes, subject }) {

    const urlNotes = userStore(state => state.urlNotes)

    
    const handleChange = (content) => {
        const url = window.location.pathname.split('/')
        axios.put(urlNotes + url[2], { text: content })
    }
    

    return (
        <div className='quill-editor '>
            <ReactQuill 
                modules={modules} 
                formats={formats} 
                placeholder='Enter Notes Here...'
                value={notes} 
                onChange={handleChange} 
            />
        </div>
    )
}

export default QuillEditor
