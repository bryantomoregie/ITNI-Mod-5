import React, { Component, useState, useEffect } from 'react';
import { Tab, Feed, Icon, Card, Image, Grid } from 'semantic-ui-react'

export default function Profile() {

    let [user, setUser] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/users', {
          method: 'GET',
          credentials: 'include'
        })
          .then(res => res.json())
          .then(users => {
            console.log(users)
            setUser(users)
            // debugger
          })
        console.log(user)
      }, [])




    const panes = [
        {
            menuItem: 'All Activities',
            render: () => <Tab.Pane>
                <Feed>
                    <Feed.Event>
                        <Feed.Label>
                            <img src='http://tiny.cc/ywh9pz' />
                        </Feed.Label>
                        <Feed.Content>
                            <Feed.Summary>
                                <Feed.User>Elliot Fu</Feed.User> added you as a friend
          <Feed.Date>1 Hour Ago</Feed.Date>
                            </Feed.Summary>
                            <Feed.Meta>
                                <Feed.Like>
                                    <Icon name='like' />4 Likes
          </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>

                    <Feed.Event>
                        <Feed.Label image='http://tiny.cc/ywh9pz' />
                        <Feed.Content>
                            <Feed.Summary>
                                <a>Helen Troy</a> added <a>2 new illustrations</a>
                                <Feed.Date>4 days ago</Feed.Date>
                            </Feed.Summary>
                            <Feed.Extra images>
                                <a>
                                    <img src='http://tiny.cc/ywh9pz' />
                                </a>
                                <a>
                                    <img src='http://tiny.cc/ywh9pz' />
                                </a>
                            </Feed.Extra>
                            <Feed.Meta>
                                <Feed.Like>
                                    <Icon name='like' />1 Like
          </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>

                    <Feed.Event>
                        <Feed.Label image='http://tiny.cc/ywh9pz' />
                        <Feed.Content>
                            <Feed.Summary
                                date='2 Days Ago'
                                user='Jenny Hess'
                                content='add you as a friend'
                            />
                            <Feed.Meta>
                                <Feed.Like>
                                    <Icon name='like' />8 Likes
          </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>

                    <Feed.Event>
                        <Feed.Label image='http://tiny.cc/ywh9pz' />
                        <Feed.Content>
                            <Feed.Summary>
                                <a>Joe Henderson</a> posted on his page
          <Feed.Date>3 days ago</Feed.Date>
                            </Feed.Summary>
                            <Feed.Extra text>
                                Ours is a life of constant reruns. We're always circling back to where
                                we'd we started, then starting all over again. Even if we don't run
                                extra laps that day, we surely will come back for more of the same
                                another day soon.
        </Feed.Extra>
                            <Feed.Meta>
                                <Feed.Like>
                                    <Icon name='like' />5 Likes
          </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>

                    <Feed.Event>
                        <Feed.Label image='http://tiny.cc/ywh9pz' />
                        <Feed.Content>
                            <Feed.Summary>
                                <a>Justen Kitsune</a> added <a>2 new photos</a> of you
          <Feed.Date>4 days ago</Feed.Date>
                            </Feed.Summary>
                            <Feed.Extra images>
                                <a>
                                    <img src='http://tiny.cc/ywh9pzg' />
                                </a>
                                <a>
                                    <img src='http://tiny.cc/ywh9pz' />
                                </a>
                            </Feed.Extra>
                            <Feed.Meta>
                                <Feed.Like>
                                    <Icon name='like' />
            41 Likes
          </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
            </Tab.Pane>,
        },
        {
            menuItem: 'Posts',
            render: () => <Tab.Pane>Posts</Tab.Pane>,
        },
        {
            menuItem: 'Comments',
            render: () => <Tab.Pane>Comments</Tab.Pane>,
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
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Matthew</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>
                            Matthew is a musician living in Nashville.
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