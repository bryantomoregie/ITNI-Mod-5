import React, { Component, useState, useEffect } from 'react';
import { Tab, Feed, Icon, Card, Image, Grid, List } from 'semantic-ui-react'



export default function PostListRow(props) {
 

    // let array = props.user.posts

    // let x = array.filter(posts => posts.id === props.comment.post_id)

    return (

        <List.Item>
            <Image avatar src={props.post.image} />
            <List.Content >
            <List.Header >{props.user.first_name} </List.Header>
                
                {props.post.original_post}
            </List.Content>
        </List.Item>


    )
}