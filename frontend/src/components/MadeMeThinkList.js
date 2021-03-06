import React, { Component, useState, useEffect } from 'react';
import { Tab, Feed, Icon, Card, Image, Grid, List } from 'semantic-ui-react'



export default function MadeMeThinkList(props) {

console.log(props)
    return (


        <List.Item>
        
        <Image avatar src={props.comment.comment.post.image} />
        <List.Content >
            <br></br>
            <List.Header >{props.user.first_name} </List.Header>
            Changed Mind: {props.comment.comment.changed_mind} Made Me Think: {props.comment.comment.made_me_think} Flag: {props.comment.comment.flag}<br></br>
            {props.comment.comment.text}
     <br></br>
        </List.Content>
    </List.Item>
    )
}