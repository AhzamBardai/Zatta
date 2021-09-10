export const modules = {
    toolbar: 
    [
        [{ 'font': [] }],
        [{ 'header': [1, 2, 3, 4, false] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline','strike'],
        ['blockquote','code-block', 'code'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}, {'script': 'sub'}, {'script': 'super'}],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
       
        [ {'direction': 'rtl'}, { 'align': [] }],

        ['link', 'image', 'video'],
        ['clean']
    ]
  }

export const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'color', 'background', 'font', 'align',
    'list', 'bullet', 'indent',
    'link', 'image', 'code-block', 'code', 'video', 'script', 'direction', 'size'
]



