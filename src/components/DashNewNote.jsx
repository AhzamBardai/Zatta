import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button, InputGroup, FormControl } from 'react-bootstrap'
import { CloseButton } from 'react-bootstrap';

//https://www.npmjs.com/package/react-modal#installation


function DashNewNote(props) {

    const modalStyle = {
        content: {
          top: '25%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    const [modal, setModal] = useState(false)

    function openModal() {
        setModal(true)
    }

    function closeModal() {
        setModal(false)
    }

    // function closeCreateModal() {
    //     setModal(false)
    //     <Alert>New note successfully made!</Alert>
    // }

    return (
        
        <div>
            <Button onClick={openModal} variant="outline-secondary">New Note</Button>
            <div className= "modalDiv">
                <Modal isOpen= {modal} onRequestClose={() => setModal(false)} style={modalStyle}>
                    <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}}>
                        <h3>New Note</h3>   
                        <CloseButton onClick={closeModal}/>
                    </div>
                    <InputGroup className="mb-3">
                        <FormControl placeholder="Enter New Note Name" style={{display: "flex", flexDirection:"row", justifyContent: "space-between", alignItems: "baseline"}}/>
                        <Button type= "submit"  variant="outline-secondary">Search</Button>
                    </InputGroup>                
                </Modal>
            </div>
        </div>
    );
}

export default DashNewNote;