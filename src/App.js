import './App.css';

import React, { Component } from 'react';
import Navabar from './components/Navabar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // link
}from "react-router-dom";

export default class App extends Component {
 pageSize=9;
 state={
   progress:0
 }
 setProgress=(progress)=>{
   this.setState({progress: progress})
  
 }

  render() {
    return (

     <div>
       <Router>
       <Navabar/>
       <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => this.setProgress(0)}
      />
       {/* <News this.setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="general"/> */}
       <Routes>
         <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/>}> </Route>
         <Route exact path="/Business"element= {<News setProgress={this.setProgress} key="Business" pageSize={this.pageSize} country="in" category="Business"/>}></Route>
         <Route exact path="/Entertainment" element={ <News setProgress={this.setProgress} key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment"/>}></Route>
         <Route exact path="/general"element= {<News setProgress={this.setProgress} key="Genernal" pageSize={this.pageSize} country="in" category="general"/>}></Route>
         <Route exact path="/Health" element={ <News setProgress={this.setProgress} key="Health" pageSize={this.pageSize} country="in" category="Health"/>}></Route>
         <Route exact path="/Science"element= {<News setProgress={this.setProgress} key="Science" pageSize={this.pageSize} country="in" category="Science"/>}></Route>
         <Route exact path="/Sports" element= {<News setProgress={this.setProgress} key="Sports" pageSize={this.pageSize} country="in" category="Sports"/>}></Route>
         <Route exact path="/Technology" element= {<News setProgress={this.setProgress} key="Technology" pageSize={this.pageSize} country="in" category="Technology"/>}></Route>
       </Routes>
       </Router>
    </div>
    )
  }
}


