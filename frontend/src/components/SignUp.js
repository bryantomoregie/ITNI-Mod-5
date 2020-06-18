import React, { Component, useState, useEffect } from 'react';
import { Menu, Segment, Button, Modal, Image, Header, Divider, Form, TextArea } from 'semantic-ui-react';
import { useHistory } from 'react-router';

export default function Login(props) {

let history = useHistory()

const initialValues = { firstName: '', lastName: '', email: '', password: '' }


let [form, setForm] = useState(
 initialValues
)

let setValue = (key, value) => {
  setForm({ ...form, [key]: value })
}

let handleSignup = (newUser) => {
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
  .then(resp => resp.json())
  .then(data => setForm(initialValues))
  handleClose()
  props.handleClose()
 history.push('/login')
}


let [modalOpen, setModalOpen] = useState(false)

let handleOpen = () => {
  setModalOpen(true)

}

let handleClose = () => {setModalOpen(false)
  history.push('/')
  props.handleClose()
}




return (
<div  >
<Modal.Header style={{ backgroundColor: "#99ccff", border: "2px solid black", fontSize: 50, textAlign: "center" }} >
  <br></br>
  Welcome to ITNI!
  </Modal.Header>
<Modal.Content>

  <Modal.Description style={{ border: "1px solid black", textAlign: "center" }}>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <p style={{ fontSize: 30, textAlign: "center" }}>
      A community of people <br></br>
      asking questions <span role="img" aria-label="sheep">🔍</span> <br></br>
      defending their position <span role="img" aria-label="sheep">🤜</span><span role="img" aria-label="sheep">🤛</span><br></br>
      and learning from different perspectives! <span role="img" aria-label="sheep">💡</span><span role="img" aria-label="sheep">🎉</span><span role="img" aria-label="sheep">🤝</span>
        </p>
  
    <br></br>
    <Modal trigger={<Button onClick={() => handleOpen()}primary >Let's Begin</Button>}
    open={modalOpen}
    // onClose={() => handleClose()}

    >
    
      <Modal.Content>
        <Modal.Header style={{ border: "2px solid black", fontSize: 20, textAlign: "center" }} >Please fill out information </Modal.Header>
        <Modal.Description style={{ textAlign: "center" }}>
          <br></br>

          <Form  size={'small'} key={'small'}>
            <Form.Group widths='equal'>
              <Form.Field
                label='First name'
                control='input'
                placeholder='First name'
                onChange={e => setValue('firstName', e.target.value)}
                // value={user.first_name}
                
              />
              <Form.Field
                label='Last name'
                control='input'
                placeholder='Last name'
                type="text"
                onChange={e => setValue('lastName', e.target.value)}
                // value={user.last_name}
              />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field
                label='email'
                control='input'
                placeholder='email'
                onChange={e => setValue('email', e.target.value)}
                // value={user.email}
              />
              <Form.Field
                label='password'
                control='input'
                placeholder='password'
                type='password'
                onChange={e => setValue('password', e.target.value)}
                // value={user.password}
              />
            </Form.Group>
            <Divider hidden />
            <Button  onClick={() => handleSignup(form)}type='submit' primary floated="right">Submit</Button>
            <Button onClick={() => handleClose()}  primary floated="right">Cancel</Button>
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