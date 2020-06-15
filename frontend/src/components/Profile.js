import React, { Component, useState, useEffect } from 'react';
import { Tab, Feed, Icon, Card, Image, Grid, List } from 'semantic-ui-react'
import { useParams, useHistory } from 'react-router-dom'
import CommentsListRow from '../components/CommentsListRow'
import PostListRow from '../components/PostListRow'


export default function Profile(props) {


    let [user, setUser] = useState(null)
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
            .then(currentUser => setUser(currentUser))
    }, [])

    if (user === null) {
        return <h1>Loading</h1>
    }
    console.log(user)



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
            menuItem: 'Learned From',
            render: () => <Tab.Pane>Learned From</Tab.Pane>,
        },
        {
            menuItem: 'Flagged',
            render: () => <Tab.Pane>Flagged</Tab.Pane>,
        },
        {
            menuItem: 'Changed Your Mind',
            render: () => <Tab.Pane>Changed Your Mind</Tab.Pane>,
        },
    ]


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
                            Minds Changed: 70 <br></br>Thoughts Generated: 124
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