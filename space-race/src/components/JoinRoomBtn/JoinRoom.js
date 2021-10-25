import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function JoinRoom(props) {
    const [modalShow, setModalShow] = React.useState(false);

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
                    <form>
                    <input type="text" placeholder="Enter Room Code"/>
                    <input type="submit"/>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
