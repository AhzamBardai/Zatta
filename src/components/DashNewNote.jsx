import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/modal.css'

//https://www.npmjs.com/package/react-modal#installation


function DashNewNote(props) {

    let modalTitle

    const [modal, setModal] = useState(false)

    function openModal() {
        setModal(true)
    }

    function colorModal() {
        modalTitle.style.color = "#f00"
    }

    function closeModal() {
        setModal(false)
    }

    return (
        <div>
            <button onClick={openModal}>New Note</button>
            <div className= "modalDiv">
                <Modal isOpen= {modal} onRequestClose={() => setModal(false)}>
                    <h2>New Note</h2>   
                        <form>
                            <input placeholder="Enter New Note Name"/>
                            <button>Create</button>
                        </form>
                    <button onClick= {closeModal}>Cancel</button>
                </Modal>
            </div>
        </div>
    );
}

export default DashNewNote;