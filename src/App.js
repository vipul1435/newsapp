import './App.css';
 import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
 export default class App extends Component {
  apiKey = process.env.REACT_APP_API
  state = {
    progress:0,
  }
  setProgress = (progress)=>{
    this.setState({progress:progress});
  }
  pagesize = 20;
   render() {
     return (
       <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element = {<News apiKey={this.apiKey} setProgress={this.setProgress} key='general' pagesize={this.pagesize}  category = 'general' coutry = 'in'></News>}></Route>
          <Route exact path='/business' element = {<News apiKey={this.apiKey} setProgress={this.setProgress} key='business' pagesize={this.pagesize} category = 'business' coutry = 'in'></News>}></Route>
          <Route exact path='/entertainment' element = {<News apiKey={this.apiKey} setProgress={this.setProgress} key='entertainment' pagesize={this.pagesize} category = 'entertainment' coutry = 'in'></News>}></Route>
          <Route exact path='/health' element = {<News apiKey={this.apiKey} setProgress={this.setProgress} key='health' pagesize={this.pagesize} category = 'health' coutry = 'in'></News>}></Route>
          <Route exact path='/science' element = {<News apiKey={this.apiKey} setProgress={this.setProgress} key='science' pagesize={this.pagesize} category = 'science' coutry = 'in'></News>}></Route>
          <Route exact path='/sports' element = {<News apiKey={this.apiKey} setProgress={this.setProgress} key='sports' pagesize={this.pagesize} category = 'sports' coutry = 'in'></News>}></Route>
          <Route exact path='/technology' element = {<News apiKey={this.apiKey} setProgress={this.setProgress} key='technology' pagesize={this.pagesize} category = 'technology' coutry = 'in'></News>}></Route>
        </Routes>
        </Router>
       </div>
     )
   }
 }
 