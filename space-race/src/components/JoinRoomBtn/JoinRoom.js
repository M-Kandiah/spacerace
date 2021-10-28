import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import {UserContext} from '../../contexts'
import { socket } from '../../App'
import {io} from 'socket.io-client'
import '../../App.css';

export default function JoinRoom(props) {
    const history = useHistory()
    const [modalShow, setModalShow] = React.useState(false);
    const {lobby, setLobby} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = localStorage.getItem('username')
        const roomId =  e.target[0].value
        socket.emit("join-room",roomId, user)
        setLobby('waiting');
        history.push("/waitingroom")
    }

    return (
        <div>
            <button className="mainMenuBtns" aria-label="join" variant="primary" onClick={() => setModalShow(true)}>
                JOIN ROOM
            </button>
            <div className="d-flex justify-content-center">
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                onHide={() => setModalShow(false)}
                className="modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className="text-center">
                        Join Room
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter Room Code" className="w-75"/>
                    <input type="submit"/>
                    </form>
                </Modal.Body>

            </Modal>
            </div>
        </div>
    )
}
