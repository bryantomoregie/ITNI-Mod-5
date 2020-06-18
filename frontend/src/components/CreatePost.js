import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Button, Comment, Form, Header, Icon, Popup, Dropdown, Grid, Image, Search, Input, TextArea } from 'semantic-ui-react'
import DiscussionTopicCard from '../components/DiscussionTopicCard'

export default function CreatePost(props) {
   
    let params = useParams()
    let history = useHistory()

    const initialValues = { original_post: '', image: ''}

    let [form, setForm] = useState(
        initialValues
       )

    let setValue = (key, value) => {
        setForm({ ...form, [key]: value })
      }

    let handleClick = () => {
        fetch('http://localhost:3000/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            image: form.image,
            original_post: form.original_post,
            user_id: props.user.id,
            discussion_id: params.id
          })
        })
        .then(resp => resp.json())
        .then(data => setForm(initialValues))
        history.push(`/topics/${params.id}`)
      }





console.log(params)
return(
    <div style={{ textAlign: "center"}}>
  <Form>
    <Form.Group widths='equal'>
      <Form.Field
        onChange={e => setValue('image', e.target.value)}
        id='form-input-control-first-name'
        control={Input}
        label='Image URL'
        placeholder='Attach an image to your post'
      />
    </Form.Group>
    <Form.Field
        onChange={e => setValue('original_post', e.target.value)}
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Discussion Post'
      placeholder='Ask the world a question'
    />
    <Form.Field
    onClick={()=> handleClick(form)}
      id='form-button-control-public'
      control={Button}
      content='Create Post'
      label='Thanks for contributing to the worlds knowledge'
    />
  </Form>
    </div>
)

}