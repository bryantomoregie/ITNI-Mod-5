import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Comment, Form, Header, Grid, Image, Segment, Modal } from 'semantic-ui-react';
import CommentCard from '../components/CommentCard'
import PostsCard from '../components/PostsCard';

export default function TopicContainer(props) {
    console.log(props.user)

    let history = useHistory()
    let params = useParams()
    let id = parseInt(params.id)

    let [posts, setPost] = useState([])
    let [topic, setTopic] = useState([])

    // let topicDiscussion = topic[0]
    // debugger

    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then(resp => resp.json())
            .then(data =>
                setPost(data.filter(post => post.discussion_id === id))
            )
    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/discussions')
            .then(resp => resp.json())
            .then(data =>
                setTopic(data.filter(discussion => discussion.id === id))
            )
    }, [])


    if (topic.length === 0) {
        return <h1>Loading</h1>
    }


    console.log(topic)
    return (
        <div style={{ textAlign: "center" }}>

            <div>
                <Segment style={{ textAlign: "center", backgroundColor: "white" }} key="massive" size="massive">

                    <br></br>
                    <h1 style={{ fontSize: 80, color: "black" }}>{topic[0].title}</h1>
                    <br></br>
                </Segment>
                {props.user
                    ?
                    <Button primary onClick={() => history.push(`/createpost/${id}`)} >Start a Conversation</Button>
                    :
                    <Modal trigger={<Button primary >Start a Conversation</Button>}>
                         <Modal.Content>
                <Modal.Description style={{ textAlign: "center" }}>
                
                  <p style={{ fontSize: 30, color: "black" }}>
                  <span role="img" aria-label="face-hat">🥳</span>
                    We're so glad you want to join the discussion!
                    <span role="img" aria-label="face-hat">🥳</span>
                 </p>
                  <p style={{ fontSize: 20, color: "black" }}>Please log in to let your voice be heard!</p>
                  <Button onClick={() => history.push('/login')} content='Log In' labelPosition='left' icon='edit' primary />

                </Modal.Description>
              </Modal.Content>
                    </Modal>

                }

                <br></br><br></br>
                <Grid>
                    <Grid.Row columns={3}>
                        {posts.map(post => <PostsCard user={props.user} post={post} key={post.id} />)}
                    </Grid.Row>
                </Grid >
            </div>
        </div>
    )
}