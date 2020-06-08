import React, { Component, useState, useEffect } from 'react';
import { Menu, Segment, Button, Modal, Image, Header, Divider, Form, TextArea } from 'semantic-ui-react';
import { useHistory } from 'react-router';

export default function Login() {

let history = useHistory()

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

          <Form size={'small'} key={'small'}>
            <Form.Group widths='equal'>
              <Form.Field
                label='First name'
                control='input'
                placeholder='First name'
              />
              <Form.Field
                label='Last name'
                control='input'
                placeholder='Last name'
              />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field
                label='email'
                control='input'
                placeholder='email'
              />
              <Form.Field
                label='password'
                control='input'
                placeholder='password'
              />
            </Form.Group>
            <Divider hidden />
            <Form.Field>
              <input placeholder='Image URL' />
            </Form.Field>
            <TextArea placeholder='One line Credentials' style={{ minHeight: 50 }} />
            <TextArea placeholder='Biographical Descriptions' style={{ minHeight: 100 }} />
          </Form>

          <br></br>
         <Button onClick={() => history.push('/login')} primary floated="right">Continue</Button>

        </Modal.Description>
      </Modal.Content>
    </Modal>
  </Modal.Description>
</Modal.Content>
</div>

 )}