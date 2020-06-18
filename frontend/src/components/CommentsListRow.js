import React, { Component, useState, useEffect } from 'react';
import { Tab, Feed, Icon, Card, Image, Grid, List } from 'semantic-ui-react'



export default function CommentsListRow(props) {

    console.log(props)

    // let array = props.user.posts //This gives me an array of all posts

    // let x = array.filter(posts => posts.id === props.comment.post_id) 

    // if (x[0] === undefined){
    //     return ''
    // }

    return (

        <List.Item>
            <Image avatar src={props.comment.post.image} />
            <List.Content >
                <List.Header >{props.user.first_name} </List.Header>
                Changed Mind: {props.comment.changed_mind} Made Me Think: {props.comment.made_me_think} Flag: {props.comment.flag}<br></br>
                {props.comment.text}
            </List.Content>
        </List.Item>


    )
}