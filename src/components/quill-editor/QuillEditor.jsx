import React,{ useEffect } from 'react'
import { modules, formats } from '../quill-options/QuillOptions.js'
import axios from 'axios'

import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import 'react-quill/dist/quill.snow.css'


function QuillEditor({ notes, setNotes }) {
    
    const handleChange = (content, delta, source, editor) => {
        setNotes(`${content}`)
    }
    
    // var quill = new Quill(editor, {
    //     modules: {
    //     toolbar: toolbar
    //     }
    // });

    return (
        <div className='quill-editor'>
            <ReactQuill 
                theme='snow' 
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
