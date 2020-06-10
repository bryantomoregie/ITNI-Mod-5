import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import CommentCard from '../components/CommentCard'


export default function CommentCardContainer(props) {

  let params = useParams()

  let [comments, setComments] = useState([])

  let initialValues =  {text: "", stance: null, rating: null, flag: null, user_id: null, post_id: null}
  
  let [comment, setComment] = useState({initialValues})

  let setValue = (key, value) => {
    setComment({ ...comment, [key]: value })
    // console.log(comment.text)
  }

  
  let handleClick = (comment) => {
    fetch('http://localhost:3000/comments', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: comment.text,
        stance: null,
        rating: null,
        flag: null,
        user_id: props.user.id,
        post_id: props.post.id
      })
    })
    .then(resp => resp.json())
    .then(comment => setComments([...comments, comment]))
    // .then(comment => setComment([initialValues]))
    // setComment({initialValues})
  }

  useEffect(() => {
    fetch('http://localhost:3000/comments', {
      method: 'GET',
      credentials: 'include'
    })
      .then(resp => resp.json())
      // .then(comments => console.log(comments))
      .then(comments => setComments(comments))
  }, [])
  // debugger 



  return (
    <Comment.Group>
      <Header as='h3' dividing>
        Comments
      </Header>
      {comments.map(comment => <CommentCard comment={comment} key={comment.id}/>)}
      <Form reply>
        <Form.TextArea value={comment.text} onChange={(e) => setValue('text', e.target.value)} />
        <Button onClick={() => handleClick(comment)} content='Add Reply' labelPosition='left' icon='edit' primary />
      </Form>
    </Comment.Group>
  )
}