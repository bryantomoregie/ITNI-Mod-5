import React, { Component, useState, useEffect } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { useHistory } from 'react-router';



export default function LoginForm(props) {

  const history = useHistory()



  const [form, setUser] = useState({
    email: '',
    password: ''
  })

  async function handleSubmit(e){
    e.preventDefault()
    let response = await fetch('http://localhost:3000/login',{
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
    let {success, user} = await response.json()
    if(success){
        console.log(user)
        console.log(user.id)
        props.setCurrentUser(user)
       history.push(`/`)

    }
}





  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
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