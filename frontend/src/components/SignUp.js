import React, { Component, useState, useEffect } from 'react';
import { Menu, Segment, Button, Modal, Image, Header, Divider, Form, TextArea } from 'semantic-ui-react';
import { useHistory } from 'react-router';

export default function Login() {

let history = useHistory()

let [user, setuser] = useState({
  first_name: '',
  last_name: '',
  email: '',
  password: ''
})




return (
<div>
<Modal.Header style={{ textAlign: "center" }} >Welcome to ITNI!</Modal.Header>
<Modal.Content>

  <Modal.Description style={{ textAlign: "center" }}>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <p >
      The number one place on the internet to share ideas, hear from others, and listen to experts.
        </p>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Modal trigger={<Button primary floated="right">Continue</Button>}>
      <Modal.Content>
        <Modal.Header style={{ textAlign: "center" }} >Please fill out information </Modal.Header>
        <Modal.Description style={{ textAlign: "center" }}>
          <br></br>

          <Form onSubmit={(e) => console.log(e)} size={'small'} key={'small'}>
            <Form.Group widths='equal'>
              <Form.Field
                label='First name'
                control='input'
                placeholder='First name'

                // value={user.first_name}
                
              />
              <Form.Field
                label='Last name'
                control='input'
                placeholder='Last name'
                type="text"
                // value={user.last_name}
              />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field
                label='email'
                control='input'
                placeholder='email'
                // value={user.email}
              />
              <Form.Field
                label='password'
                control='input'
                placeholder='password'
                // value={user.password}
              />
            </Form.Group>
            <Divider hidden />
            <Button type='submit' primary floated="right">Submit</Button>
          </Form>

          <br></br>
         {/* <Button type='submit' onClick={() => history.push('/login')} primary floated="right">Submit</Button> */}

        </Modal.Description>
      </Modal.Content>
    </Modal>
  </Modal.Description>
</Modal.Content>
</div>

 )}