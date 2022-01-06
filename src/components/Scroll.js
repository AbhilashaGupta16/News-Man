import React, { Component } from 'react'
import "./newsman.css"
import "./newsman.js";

export class Scroll extends Component {
    render() {
        return (
            <div>
                <div className="progress-bar" />
                <button className="back-to-top hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="back-to-top-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                </button>
                {/* <div className="progress-bar" /> */}
            </div>
        )
    }
}

export default Scroll
