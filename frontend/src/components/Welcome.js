import React, { Component, useState, useEffect } from 'react';
import { Menu, Segment, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

// import './Homepage.css'


export default function Welcome() {

  let history = useHistory()

  return (
    <div>
      <div class="transbox">
        <header >

          <Segment style={{ backgroundColor: "white" }} key="massive" size="massive">
            <h1 style={{ fontSize: 80, color: "black" }}>ITNI</h1>
            <br></br>
            <h1 style={{ fontSize: 45, color: "black" }}>The best place online for civil discourse.</h1>
          </Segment>

        </header>

      </div>

    </div>
  )


}