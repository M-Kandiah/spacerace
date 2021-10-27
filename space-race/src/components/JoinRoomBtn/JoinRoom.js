import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import {UserContext} from '../../contexts'

import {io} from 'socket.io-client'

export default function JoinRoom(props) {
    const history = useHistory()
    const [modalShow, setModalShow] = React.useState(false);
    const {lobby, setLobby} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const socket = io('http://localhost:3001')
        const user = "MathusanKandiah"
        const room =  e.target[0].value
        socket.emit("join-room",room, user)
        setLobby('waiting');
        history.push("/waitingroom")
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
                    <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter Room Code"/>
                    <input type="submit"/>
                    </form>
                </Modal.Body>

            </Modal>
        </div>
    )
}
