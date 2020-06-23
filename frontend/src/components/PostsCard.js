import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Card, Icon, Image, Grid, Modal, Header, Button, Comment, Form } from 'semantic-ui-react'
import CommentCardContainer from '../containers/CommentCardContainer'


export default function PostCard(props) {
    //  debugger

    let history = useHistory()
    let params = useParams()



    let [post, setPost] = useState({
        original_post: null,
        image: null,
        user_id: null,
        discussion_id: null
    })

    useEffect(() => {
        fetch(`http://localhost:3000/posts/${props.post.id}`)
            .then(resp => resp.json())
            .then(post => setPost(post))
            // debugger
            // console.log(post)
    }, [])

    console.log(props)

    return (
        <Modal size={'fullscreen'} trigger={
            <Grid.Column>

                <Card>
                    <Image src={props.post.image} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header style={{ textAlign: "center" }}>{props.post.original_post}</Card.Header>

                        <Card.Meta>
                            <span className='date'>Created in 2020</span>
                        </Card.Meta>
                        <Card.Description>
                           
      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='conversation' />
       {props.post.comments.length} Contributions to civil discourse
      </a>
                    </Card.Content>
                </Card>

            </Grid.Column>
        }>
            <Modal.Header><h4></h4></Modal.Header>
            <Modal.Content image scrolling>
                <Image size='medium' src={props.post.image} wrapped />

                <Modal.Description>
                <Header>
                    <h1>
                    {post.original_post}
                    </h1>
                    
                </Header>
                    <CommentCardContainer user={props.user} post={post} />
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
            </Modal.Actions>
        </Modal>
    )
}