import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Button, Comment, Form, Header, Icon, Popup, Dropdown } from 'semantic-ui-react'

export default function CommentCard(props) {


  let [comment, setComment] = useState({
    text: props.comment.text,
    stance: props.comment.stance,
    changed_mind: props.comment.changed_mind,
    made_me_think: props.comment.made_me_think,
    flag: props.comment.flag,
    user_id: props.comment.user_id,
    post_id: props.comment.post_id
  })

  let incrementChange = (key, change) => {
    setComment({ ...comment, [key]: change })
    fetch(`http://localhost:3000/comments/${props.comment.id}`, {
      method: "PATCH",
      headers: {
          'Content-Type': 'application/json'
      },
      body:  JSON.stringify(
          { 
            currentKey: key,
            newValue: change 
          }
      )
  })
  .then(resp => resp.json())
  .then(data => createChangedMind(data))
}

  let createChangedMind = (data) =>  {
    comment.log(data)
  //   fetch('http://localhost:3000/changedminds',{
  //     method: "POST",
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     body:  JSON.stringify(
  //         { 
  //           comment_id: comment.id,
  //           user_id: user.id
  //         }
  //     )
  // })
  }

  let stanceColor = {border: "blue solid 1px"}
  if (props.comment.stance === null){
    stanceColor = {border: "#4CAF50 solid 1px"}}

  return (

    <Comment style={stanceColor}> 
      <Comment.Avatar  src={props.comment.user.image}/>
      <Comment.Content>
        <Comment.Author as='a'>{props.comment.user.first_name}</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>{props.comment.text}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
          <Popup content='This Changed My Mind'
          trigger={<Comment.Action onClick={() => incrementChange("changed_mind", comment.changed_mind + 1)}><Icon name='exchange' />{comment.changed_mind}</Comment.Action>}
          />
          <Popup content='This Made Me Think'
          trigger={<Comment.Action onClick={() => incrementChange("made_me_think", comment.made_me_think + 1)}><Icon name='coffee' /> {comment.made_me_think}</Comment.Action>}
          />
           <Popup content='Flag Comment'
          trigger={<Comment.Action onClick={() => incrementChange("flag", comment.flag + 1)}><Icon name='flag' />{comment.flag}</Comment.Action>}
         />
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  )
}