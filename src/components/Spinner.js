import React, { Component } from 'react'
import loading from './Spinner.gif'

export class Spinner extends Component {
    render() {
        return (
            <div>
                <div className="text-center">
                    <img src={loading} alt="" style={{width:"100px",height:"100px"}} />
                </div>
            </div>
        )
    }
}

export default Spinner
