import React, {useState} from 'react';
import Modal from '../layout/Modal.js'


const Button = () => {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }
    return (
                <td><button onClick={openModal} className="badge success">Edit</button></td>


    )

}

export default Button