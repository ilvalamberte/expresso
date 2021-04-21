import React, {useState} from 'react';
import Modal from '../layout/Modal.js'
import Button from './ModalButton.js'


const Package = ({packages}) => {

    const {zone, name, installed} = packages
  
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }
    return (
        <div className="flex-table--row">
    
    <span>{zone}</span>
        <span>{name}</span>
        <span>{installed}</span>
       <span>
        <button onClick={openModal} className="badge success">Edit</button>
        <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
        </span>
        </div>
    )


}

export default Package