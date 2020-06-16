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
    console.log(data)
    fetch('http://localhost:3000/changedminds',{
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body:  JSON.stringify(
          { 
            comment_id: data.id,
            user_id: data.user.id
          }
      )
  })
  }

  let incrementChanges = (key, change) => {
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
  .then(data => createMademethink(data))
}

  let createMademethink = (data) =>  {
    console.log(data)
    fetch('http://localhost:3000/mademethinks',{
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body:  JSON.stringify(
          { 
            comment_id: data.id,
            user_id: data.user.id
          }
      )
  })
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
          trigger={<Comment.Action onClick={() => incrementChanges("made_me_think", comment.made_me_think + 1)}><Icon name='coffee' /> {comment.made_me_think}</Comment.Action>}
          />
           <Dropdown 
         text = {<Popup content='Flag Comment'trigger={<Comment.Action onClick={() => incrementChange("flag", comment.flag + 1)}><Icon name='flag' />{comment.flag}</Comment.Action>}/>}
          >
            <Dropdown.Menu>
      <Dropdown.Item text='New' />
      <Dropdown.Item text='Open...' description='ctrl + o' />
      <Dropdown.Item text='Save as...' description='ctrl + s' />
      <Dropdown.Item text='Rename' description='ctrl + r' />
      <Dropdown.Item text='Make a copy' />
      <Dropdown.Item icon='folder' text='Move to folder' />
      <Dropdown.Item icon='trash' text='Move to trash' />
      <Dropdown.Divider />
      <Dropdown.Item text='Download As...' />
      <Dropdown.Item text='Publish To Web' />
      <Dropdown.Item text='E-mail Collaborators' />
    </Dropdown.Menu>
          </Dropdown>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  )
}