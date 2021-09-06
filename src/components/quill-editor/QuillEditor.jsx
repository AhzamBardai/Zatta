import React from 'react'
import { modules, formats } from '../quill-options/QuillOptions.js'

import ReactQuill from 'react-quill'


function QuillEditor({ notes, setNotes }) {
    
    const handleChange = (content, delta, source, editor) => {
        setNotes(`${content}`)
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
