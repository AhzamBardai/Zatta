import React from 'react';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';


function PasswordModal({ modal, setModal, string }) {

    const modalStyle = {
        content: {
          top: '35%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2
        },
      };


    function closeModal() {
        setModal(false)
    }


    return (
        <div>
        <Modal isOpen= {modal} onRequestClose={() => setModal(false)} style={modalStyle}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <h3>{string}</h3>
                <Button style={{marginTop:"10px",width:"5rem", backgroundColor:"black"}} variant="dark" onClick={closeModal}>Close</Button>
            </div>
        </Modal>
    </div>
)
}

export default PasswordModal