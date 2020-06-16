import React, { Component, useState, useEffect } from 'react';
import { Tab, Feed, Icon, Card, Image, Grid, List } from 'semantic-ui-react'
import { useParams, useHistory } from 'react-router-dom'
import CommentsListRow from '../components/CommentsListRow'
import PostListRow from '../components/PostListRow'
import ChangedMindList from '../components/ChangedMindList'
import MadeMeThinkList from '../components/MadeMeThinkList'



export default function Profile(props) {


    let [user, setUser] = useState(null)
    let [comments, setComments] = useState([])
    let [changedmindtotal, setChangedmindtotal] = useState(0)
    let params = useParams()
    let id = parseInt(params.id)
    

    useEffect(() => {
        fetch(`http://localhost:3000/users/${id}`, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(currentUser => {setUser(currentUser)
                setChangedmindtotal(currentUser.changedminds.length)
            }
            )
            
            // sum()
    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/comments', {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(comments => setComments(comments))
    }, [])


    if (user === null || comments === []) {
        return <h1>Loading</h1>
    }
    console.log(comments)
    console.log(user)

    let changedMindComments = comments.filter(comment => user.changedminds.map(changedmind => changedmind.comment_id === comment.id))
    let madeMeThinkComments = comments.filter(comment => user.mademethinks.map(mademethink => mademethink.comment_id === comment.id))

    console.log(madeMeThinkComments)
    console.log(changedMindComments)
    console.log(comments)

    const panes = [
        {
            menuItem: 'All Activities',
            render: () => <Tab.Pane>
            </Tab.Pane>,
        },
        {
            menuItem: 'Posts',
            render: () => <Tab.Pane>
                <List celled>
                    {user.posts.map(post => <PostListRow post={post} user={user} />)}
                </List>
            </Tab.Pane>,
        },
        {
            menuItem: 'Comments',
            render: () => <Tab.Pane>
                <List celled>
                    {user.comments.map(comment => <CommentsListRow comment={comment} user={user} />)}
                </List>
            </Tab.Pane>,
        },
        {
            menuItem: 'Changed Your Mind',
            render: () => <Tab.Pane>
                {changedMindComments.map(comment => <ChangedMindList user={user} comment={comment}/>)}
                </Tab.Pane>,
        },
        {
            menuItem: 'Made Me Think',
            render: () => <Tab.Pane>
                {madeMeThinkComments.map(comment => <MadeMeThinkList user={user} comment={comment}/>)}
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


    return (
        <Grid>
            <Grid.Column width={12}>
                <Tab panes={panes} />
            </Grid.Column>
            <Grid.Column width={4}>
                <Card >
                    <Image src={user.image} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{user.first_name} {user.last_name}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>
                            Minds Changed: {changedmindtotal} <br></br>Thoughts Generated: 124
          </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
            22 Friends
          </a>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </Grid>
    )

}