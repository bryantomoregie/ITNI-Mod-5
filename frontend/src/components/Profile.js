import React, { Component, useState, useEffect } from 'react';
import { Tab, Feed, Icon, Card, Image, Grid, List } from 'semantic-ui-react'
import { useParams, useHistory } from 'react-router-dom'
import CommentsListRow from '../components/CommentsListRow'
import PostListRow from '../components/PostListRow'
import ChangedMindList from '../components/ChangedMindList'
import MadeMeThinkList from '../components/MadeMeThinkList'
import UserHomePage from '../components/UserHomePage'



export default function Profile(props) {
  

    console.log(props)

    const panes = [
        {
            menuItem: 'Following',
            render: () => <Tab.Pane>
                <UserHomePage user={props.user}/>
            </Tab.Pane>,
        },
        {
            menuItem: 'Posts',
            render: () => <Tab.Pane>
                <List celled>
                  
                    {props.user.posts.map(post => <PostListRow post={post} user={props.user} />)}
                 
                </List>
            </Tab.Pane>,
        },
        {
            menuItem: 'Comments',
            render: () => <Tab.Pane>
                <List celled>
                   
                    {props.user.comments.map(comment => <CommentsListRow comment={comment} user={props.user} />)}
                  
                </List>
            </Tab.Pane>,
        },
        {
            menuItem: 'Changed Your Mind',
            render: () => <Tab.Pane>
                <List celled>
                {props.user.changedminds.map(comment => <ChangedMindList user={props.user} comment={comment}/>)}
                </List>
                </Tab.Pane>,
        },
        {
            menuItem: 'Made Me Think',
            render: () => <Tab.Pane>
                 <List celled>
                {props.user.mademethinks.map(comment => <MadeMeThinkList user={props.user} comment={comment}/>)} 
                </List>
                </Tab.Pane>,
        },
      
    ]

    // let sum = () => {
    //     total = 0;
    //     for (var idx = 0; idx <= input.length - 1; idx++) {
    //         total += input[idx];
    //     }
    //     return total;
    // }

    if (props.user === null){
        return <h1>loading</h1>
    }

    console.log(props.user)

    return (
        <Grid style={{backgroundColor: "#f0f0f5"}}>
            <Grid.Column width={12}>
                <Tab panes={panes} />
            </Grid.Column>
            <Grid.Column width={4}>
                <Card >
                    <Image src={props.user.image} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{props.user.first_name} {props.user.last_name}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2020</span>
                        </Card.Meta>
                        <Card.Description>
                            Minds Changed: {props.user.changedminds.length} <br></br>Thoughts Generated: {props.user.mademethinks.length}
          </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
        {props.user.one_line_credential}
          </a>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </Grid>
    )

}