import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps={
        country:"in",
        // pSize:6,
        category:"general"

    }

    static propTypes={
        country:PropTypes.string,
        // pSize:PropTypes.number,
        category:PropTypes.string,
    }
    
    constructor(){
        super()
        // console.log("Hiiii")
        this.state={
            articles : [],
            loading : false,
            page:1
        }
    }

    async componentDidMount(){
        // console.log("cdm")
        let url=`https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/in.json`
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cc99ded31acb4d398644fe8a5fa33f8c&page=1&pagesize=${this.props.pSize}`
        this.setState({loading:true})
        let data= await fetch(url)
        let parsedData=await data.json()
        // console.log(parsedData)
        this.setState({
            articles:parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false
        })
    }

    handlePrevClick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cc99ded31acb4d398644fe8a5fa33f8c&page=${this.state.page-1}&pagesize=${this.props.pSize}`
        this.setState({loading:true})
        let data= await fetch(url)
        let parsedData=await data.json()
        // console.log(parsedData)
        this.setState({
            page:this.state.page-1,
            articles:parsedData.articles,
            loading:false
        })
    }

    handleNextClick=async()=>{
        if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pSize))){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cc99ded31acb4d398644fe8a5fa33f8c&page=${this.state.page+1}&pagesize=${this.props.pSize}`
        this.setState({loading:true})
        let data= await fetch(url)
        let parsedData=await data.json()
        // console.log(parsedData)
        this.setState({
            page:this.state.page+1,
            articles:parsedData.articles,
            loading:false
        })
        }
    }

    render() {
        let {mode,color,category}=this.props
        return (
            <div className="container my-3 ">
                <h1 className={`text-center text-${mode=="primary"?"dark":"light"}`} style={{marginTop:"100px"}}>NewsWorld - Top {category[0].toUpperCase()+category.substr(1,)} Headlines!</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                {!this.state.loading && this.state.articles.map((ele)=>{
                    return <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 text-center my-3"  key={ele.url}>
                        <Newsitem title={ele.title?ele.title.slice(0,45):""} desc={ele.description?ele.description.slice(0,100):""} imgurl={ele.urlToImage?ele.urlToImage: "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13590/production/_97584297_breaking_news.png"} newsurl={ele.url} author={ele.author?"By "+ele.author+" ":"By Unknown "} date={ele.publishedAt?"on "+new Date(ele.publishedAt).toGMTString()+" ":" "} source={ele.source.name} color={color} mode={mode}/>
                    </div>                                
                   
                })}
                </div>
                {/* <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/pSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </div>
        )
    }
}

export default News
