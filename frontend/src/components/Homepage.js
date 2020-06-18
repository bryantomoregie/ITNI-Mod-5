import React, { Component, useState, useEffect } from 'react';
import { Menu, Segment, Button } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react'
import { Grid, Image } from 'semantic-ui-react'
import DiscussionTopicCard from '../components/DiscussionTopicCard';
import PostsCard from '../components/PostsCard';

export default function Homepage(props) {




  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Segment style={{ border: "1px solid black", textAlign: "center", backgroundColor: "white"}}>
          <h1>Pick from our popular topics</h1>
          {/* <Icon name='triangle down' size='big' /> */}
        </Segment>
        <div class="a">
        <Grid >
        <Grid.Row columns={3}>
            {props.discussions.map(discussion => <DiscussionTopicCard user={props.user} discussion={discussion} key={discussion.id}/>)}
        </Grid.Row>
        </Grid>
        </div>
        <br></br><br></br>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1 > Or join a conversation going on right now</h1>
        <Icon name='triangle down' size='big' />
      </div>
      <Grid>
        <Grid.Row columns={4}>
          {props.posts.map(post => <PostsCard user={props.user} post={post} key={post.id}/>)}
        </Grid.Row>
      </Grid>
    </div>
  )
}