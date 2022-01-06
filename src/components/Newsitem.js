import React, { Component } from 'react'

export class Newsitem extends Component {

    render() {
        let {title,desc,imgurl,newsurl,author,date,source,color,mode}=this.props
        let cardBg=(mode=="primary")?"white":"#11202f"
        console.log(cardBg)
        return (
            <div>
                <div className={`card text-${mode=="primary"?"dark":"light"}`} style={{width: "100%",backgroundColor:cardBg,border:"1px solid white"}}>
                <span className={`position-absolute top-0 translate-middle badge rounded-pill bg-${color}`} style={{zIndex:1,left:"85%"}}>{source}</span>
                <img src={imgurl} className="card-img-top" style={{height: "250px"}} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{desc}...</p>
                    <p className="card-text"><small className={`text-${mode=="primary"?"muted":"light"}`}>{author}{date}</small></p>
                    <a href={newsurl} target="_blank" className={`btn btn-${mode=="primary"?"dark":"primary"}`}>Read More...</a>
                </div>
                </div>
            </div>
        )
    }
}

export default Newsitem

