import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Comment, Form, Header, Grid, Image, Segment } from 'semantic-ui-react';
import CommentCard from '../components/CommentCard'
import PostsCard from '../components/PostsCard';

export default function TopicContainer(props) {
    console.log(props.user)

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
                setTopic(data.filter(discussion => discussion.id === id ))
            )
    }, [])

    
    if (topic.length === 0 ){
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
            <Button primary >Start a Conversation</Button>
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