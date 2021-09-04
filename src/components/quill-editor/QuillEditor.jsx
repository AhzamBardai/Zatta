import React from 'react'
import { modules, formats } from '../quill-options/QuillOptions.js'
import Toolbar from '../quill-options/QuillTestToolbar.js'


import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import 'react-quill/dist/quill.snow.css'


function QuillEditor(props) {
    
    const handleChange = (content, delta, source, editor) => {
        props.setNotesInput(`${content}`)
        console.log(content, props.notesInput)
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
                value={props.notesInput} 
                onChange={handleChange} 
            />
        </div>
    )
}

export default QuillEditor
