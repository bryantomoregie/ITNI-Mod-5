import React, { Component, useState, useEffect } from 'react';
import { Menu, Segment, Button } from 'semantic-ui-react';
// import './Homepage.css'


export default function Welcome() {



return(
    <div>
    <div>
    <header style={{backgroundcolor: "black"}}>
        
    <Segment style={{backgroundColor: "black"}}  key="massive" size="massive">
         <h1 style={{fontSize: 80, color: "white", fontFamily: "Bradley Hand"}}>Welcome to ITNI</h1>
         <br></br>
         <h1 style={{fontSize: 45, color: "white", fontFamily: "Bradley Hand"}}>The best place on the internet for respectful, civil discussions.</h1>
    </Segment>
      
    </header>
    
    </div>
    <h1>Pick a topic to discuss</h1>
    </div>
  )


}