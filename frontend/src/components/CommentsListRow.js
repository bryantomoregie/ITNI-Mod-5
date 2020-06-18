import React, { Component, useState, useEffect } from 'react';
import { Tab, Feed, Icon, Card, Image, Grid, List, Modal, Button } from 'semantic-ui-react'
import ProfileCommentModal from '../components/ProfileCommentModal'


export default function CommentsListRow(props) {

    console.log(props)

    return (

        <div >
            <Modal trigger={<List.Item >
                <Image avatar src={props.comment.post.image} />
                <List.Content >
                    <List.Header >{props.user.first_name} </List.Header>
                Changed Mind: {props.comment.changed_mind} Made Me Think: {props.comment.made_me_think} Flag: {props.comment.flag}<br></br>
                    {props.comment.text}
                </List.Content>
            </List.Item>
            }>
              <ProfileCommentModal user={props.user} post={props.comment.post} key={props.comment.post.id} />  
            </Modal>

        </div>

    )
}