import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Comment, Form, Header, Modal, Icon, Image } from 'semantic-ui-react';
import CommentCard from '../components/CommentCard'


export default function CommentCardContainer(props) {

  let history = useHistory()
  let params = useParams()

  // let id = parseInt(localStorage.id)

  let [comments, setComments] = useState([])

  let initialValues = { text: "", stance: null, rating: null, flag: null, user_id: null, post_id: null }

  let [comment, setComment] = useState({ initialValues })

  let setValue = (key, value) => {
    setComment({ ...comment, [key]: value })
  }


  let handleClick = (comment) => {

    fetch('http://localhost:3000/comments', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: comment.text,
        stance: comment.stance,
        changed_mind: 0,
        made_me_think: 0,
        flag: 0,
        user_id: props.user.id,
        post_id: props.post.id
      })
    })
      .then(resp => resp.json())
      .then(comment => setComments([...comments, comment]))
    setComment({ initialValues })
  }

  useEffect(() => {
    fetch('http://localhost:3000/comments', {
      method: 'GET',
      credentials: 'include'
    })
      .then(resp => resp.json())
      .then(comments => setComments(comments))
  }, [])

  // debugger
  let postComments = comments.filter(comment => comment.post_id === props.post.id)

  return (

    <Comment.Group threaded>
      <Header as='h3' dividing>
        Comments
      </Header>
      {postComments.map(comment => <CommentCard comment={comment} key={comment.id} />)}
      <Form reply>
        <Form.TextArea value={comment.text} onChange={(e) => setValue('text', e.target.value)} />

        {props.user
          ?
          <div>
            <Button onClick={() => handleClick(comment)} content='Add Reply' labelPosition='left' icon='edit' color='green' />
            <Button onClick={() => setValue('stance', 'no')} content='Disssent' labelPosition='left' icon='hand paper outline' primary />
          </div>
          :
          <div>
            <Modal trigger={<Button content='Add Reply' labelPosition='left' icon='edit' color='green' />}>
              <Modal.Content>
                <Modal.Description style={{ textAlign: "center" }}>
                  <p>
                   We're so glad you want to join the discussion!
                 </p>
                  <p>Please log in to let your voice be heard!</p>
                  <Button onClick={() => history.push('/login')}content='Log In' labelPosition='left' icon='edit' color='grey' />

                </Modal.Description>
              </Modal.Content>
            </Modal>
            <Button onClick={() => setValue('stance', 'no')} content='Disssent' labelPosition='left' icon='hand paper outline' primary />
          </div>
        }
      </Form>
    </Comment.Group>
  )
}