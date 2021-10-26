import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { io } from 'socket.io-client';
import { socket } from '../../App';
export default function JoinRoom(props) {

    const [modalShow, setModalShow] = React.useState(false);
    
    const handlesubmit = (e) => {
        e.preventDefault()
        const roomName = e.target[0].value
        const id = socket.id
        socket.emit('join-room', roomName, id)
    }

    return (
        <div>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                JOIN ROOM
            </Button>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                onHide={() => setModalShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Join Room
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handlesubmit}>
                        <input type="text" placeholder="Enter Room Code" />
                        <input type="submit" />
                    </form>
                </Modal.Body>

            </Modal>
        </div>
    )
}
