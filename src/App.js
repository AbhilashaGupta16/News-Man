import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Scroll from './components/Scroll';

export default class App extends Component {

  constructor(){
    super()
    this.state={
        mode:"primary"
    }
  }

  toggleMode=()=>{
    if(this.state.mode=="primary"){
      this.setState({mode:"dark"})
      document.body.style.backgroundColor="#031322f0"
      }
    else{
      this.setState({mode:"primary"})
      document.body.style.backgroundColor="#c6c8c963"
    }
  }

  render() {
    return (
      <Router>
        <Navbar toggleMode={this.toggleMode} mode={this.state.mode} />
        <Routes>
          <Route exact path="/" element={<News mode={this.state.mode} key="general" country="in" pSize={6} category="general" color="primary"/>}></Route>
          <Route exact path="/general" element={<News mode={this.state.mode} key="general" country="in" pSize={6} category="general" color="primary"/>}></Route>
          <Route exact path="/business" element={<News mode={this.state.mode} key="business" country="in" pSize={6} category="business" color="danger"/>}></Route>
          <Route exact path="/entertainment" element={<News mode={this.state.mode} key="entertainment" country="in" pSize={6} category="entertainment" color="success"/>}></Route>
          <Route exact path="/health" element={<News mode={this.state.mode} key="health" country="in" pSize={6} category="health" color="warning"/>}></Route>
          <Route exact path="/science" element={<News mode={this.state.mode} key="science" country="in" pSize={6} category="science" color="info"/>}></Route>
          <Route exact path="/sports" element={<News mode={this.state.mode} key="sports" country="in" pSize={6} category="sports" color="secondary"/>}></Route>
          <Route exact path="/technology" element={<News mode={this.state.mode} key="technology" country="in" pSize={6} category="technology" color="danger"/>}></Route>
        </Routes>
        {/* <Scroll/> */}
      </Router>
          
    )
  }
}

