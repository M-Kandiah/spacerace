import React from 'react'
import '../../App.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function CreateRoom() {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href = '/lobby'
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Create a room!
        </Tooltip>
    );
    return (
        <div>
            <OverlayTrigger placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <button className="mainMenuBtns" aria-label="create" onClick={handleClick}>CREATE ROOM</button>

            </OverlayTrigger>
        </div>
    )
}
