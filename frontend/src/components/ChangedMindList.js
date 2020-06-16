import React, { Component, useState, useEffect } from 'react';
import { Tab, Feed, Icon, Card, Image, Grid, List } from 'semantic-ui-react'



export default function ChangedMindList(props) {


    return (


     <List.Item>
         <Image avatar />
         <List.Content>
             <List.Header >{props.user.first_name} </List.Header>
             Changed Mind: {props.comment.changed_mind} Made Me Think: {props.comment.made_me_think} Flag: {props.comment.flag}<br></br>
             {props.comment.text}
         </List.Content>
     </List.Item>
    )
}