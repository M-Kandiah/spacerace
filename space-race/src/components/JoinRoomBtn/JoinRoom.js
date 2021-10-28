import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { UserContext } from '../../contexts'
import { socket } from '../../App'
import { io } from 'socket.io-client'
import '../../App.css';

export default function JoinRoom(props) {
    const history = useHistory()
    const [modalShow, setModalShow] = React.useState(false);
    const { lobby, setLobby } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = localStorage.getItem('username')
        const roomId = e.target[0].value
        socket.emit("join-room", roomId, user)
        setLobby('waiting');
        history.push("/waitingroom")
    }
    const renderTooltip = (props) => {
        <Tooltip id="button-tooltip" {...props}>
            Join a room with your friends!
        </Tooltip>
};

    return (
        <div>
            <OverlayTrigger placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <button className="mainMenuBtns" aria-label="join" variant="primary" onClick={() => setModalShow(true)}>
                    JOIN ROOM
                </button>
            </OverlayTrigger>
            <Modal
                {...props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                onHide={() => setModalShow(false)}
                className="modal ms-5"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Join Room
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter Room Code" />

                        <input type="submit" />

                    </form>
                </Modal.Body>

            </Modal>
            </div>
        
    )
}
