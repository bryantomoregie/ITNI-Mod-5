import React, { Component, useState, useEffect } from 'react';
import { Tab, Feed, Icon, Card, Image, Grid, List, Button } from 'semantic-ui-react'
import { useParams, useHistory } from 'react-router-dom'
import CommentsListRow from '../components/CommentsListRow'
import PostListRow from '../components/PostListRow'
import ChangedMindList from '../components/ChangedMindList'
import MadeMeThinkList from '../components/MadeMeThinkList'
import PostsCard from '../components/PostsCard'
import UserFollowPostCards from './UserFollowPostCards'

export default function UserHomePage(props) {

    let history = useHistory()

    console.log(props.user)

    if (props.user === null) {
        return <h1>loading</h1>
    }

    return (
        <div>
            {(props.user.follows[0])
                ?
                <Grid>
                    <Grid.Row columns={3}>
                        {props.user.follows.map(post => <UserFollowPostCards user={props.user} post={post} key={post.id} />)}
                    </Grid.Row>
                </Grid >
                :
                <div style={{ textAlign: "center" }}>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <h1>Hmm...looks like you're not participating in any discussions yet</h1>
                <h2>No worries! We've got you covered</h2>
                <Button primary onClick={() => history.push('/')}>
                    Join a Discussion
                </Button>
                <br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                </div>
            }
        </div>
    )
}