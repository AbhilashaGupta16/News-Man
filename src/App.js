import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="general" country="in" pSize={6} category="general" color="primary"/>}></Route>
          <Route exact path="/business" element={<News key="business" country="in" pSize={6} category="business" color="danger"/>}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" country="in" pSize={6} category="entertainment" color="success"/>}></Route>
          <Route exact path="/health" element={<News key="health" country="in" pSize={6} category="health" color="warning"/>}></Route>
          <Route exact path="/science" element={<News key="science" country="in" pSize={6} category="science" color="info"/>}></Route>
          <Route exact path="/sports" element={<News key="sports" country="in" pSize={6} category="sports" color="secondary"/>}></Route>
          <Route exact path="/technology" element={<News key="technology" country="in" pSize={6} category="technology" color="danger"/>}></Route>
        </Routes>
      </Router>
        
        
    )
  }
}

