import React, { Component, useState, useEffect } from 'react';
import { Tab, Feed, Icon, Card, Image, Grid, List } from 'semantic-ui-react'



export default function CommentsListRow(props) {
    console.log(props)

    let array = props.user.posts

    let x = array.filter(posts => posts.id === props.user.post_id)

    // debugger
    return (

        <List.Item>
            <Image avatar src={x[0].image} />
            <List.Content onClick={console.log("hello")}>
                <List.Header onClick={console.log("hello")}>{props.user.first_name} </List.Header>
                Changed Mind: {props.comment.changed_mind} Made Me Think: {props.comment.made_me_think} Flag: {props.comment.flag}<br></br>
                {props.comment.text}
            </List.Content>
        </List.Item>


    )
}