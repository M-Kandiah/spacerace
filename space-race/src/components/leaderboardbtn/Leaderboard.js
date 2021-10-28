import React from 'react'
import '../../App.css';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function Leaderboard() {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href= '/leaderboard'
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Check where you stack up against your friends!
        </Tooltip>
    );
    return (
        <div >
            <OverlayTrigger placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
            <button className="mainMenuBtns" onClick={handleClick}>LEADERBOARDS</button>

            </OverlayTrigger>
        </div>
    )
}
