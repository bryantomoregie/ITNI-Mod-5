import React, { Component, useState, useEffect } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { useHistory } from 'react-router';



export default function LoginForm(props) {

  const history = useHistory()



  const [form, setUser] = useState({
    email: '',
    password: ''
  })



  let [error, setError] = useState('')

  

let handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/login',{
        credentials: 'include',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: form.email,
            password: form.password
        })
    })
    .then (res => res.json())
    .then (data => {
      console.log(data)
      if (data.id != null) {
        props.setCurrentUser(data)
        history.push(`/profile/${data.id}`)
        // setError('Incorrect Username/Password')
      }
      else {
        setError('this is an error')
      }
    })}


  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
      { (error != '')
      ?
      <Message negative><p>Username/Password is Incorrect</p></Message>
      :
      null
      }
        <Header as='h2' color='black' textAlign='center'>
          Log-in to your account
      </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={e => setUser({ ...form, email: e.target.value })} />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange={e => setUser({ ...form, password: e.target.value })}
              
            />

            <Button color='black' fluid size='large' onClick={e => handleSubmit(e)}>
              Login
          </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='#'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

// export default LoginForm