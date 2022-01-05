import React, { Component } from 'react'

export class Newsitem extends Component {

    render() {
        let {title,desc,imgurl,newsurl,author,date,source,color}=this.props
        return (
            <div>
                <div className="card" style={{width: "100%"}}>
                <span className={`position-absolute top-0 translate-middle badge rounded-pill bg-${color}`} style={{zIndex:1,left:"85%"}}>{source}</span>
                <img src={imgurl} className="card-img-top" style={{height: "250px"}} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{desc}...</p>
                    <p className="card-text"><small className="text-muted">{author}{date}</small></p>
                    <a href={newsurl} target="_blank" className="btn btn-dark">Read More...</a>
                </div>
                </div>
            </div>
        )
    }
}

export default Newsitem

