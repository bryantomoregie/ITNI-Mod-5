import React, { Component, useState, useEffect } from 'react';
import { Tab, Feed, Icon, Card, Image, Grid, List, Modal } from 'semantic-ui-react'
import ChangedMindModal from './ChangeMindModal'


export default function ChangedMindList(props) {

console.log(props)
    

return (

       
<Modal trigger={
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
   }>
       <ChangedMindModal user={props.user} comment={props.comment}/>
   </Modal>
    )
}