import React, { Component, useState, useEffect } from 'react';
import { Menu, Segment, Button, Modal, Image, Header, Divider, Form, TextArea, Icon, Dropdown } from 'semantic-ui-react';
import { useHistory } from 'react-router';
import SignUp from '../components/SignUp'
import ListOfTopicsContainer from '../containers/ListOfTopicsContainer'
// import DropdownFunction from '../components/DropdownComponent'



export default function Navigation(props) {

  let history = useHistory()

  let [activeItem, setActiveItem] = useState('home')

  // let handleItemClick = (activeItem, name) => {
  //   setActiveItem({ [activeItem]: name })
  // }

  let handleLogout = () => {
    fetch('http://localhost:3000/logout', {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    props.setCurrentUser(null)
    history.push('/')
  }


  // const { activeItem } = activeItem

  return (

    <Segment inverted>
      <Menu inverted pointing secondary >
        <Menu.Item

          name='ITNI'
          active={activeItem === 'ITNI'}
          onClick={() => history.push('/')}
        />
        <Menu.Item
          onClick={() => history.push('/listoftopics')}
          name='Join a Discussion'
          active={activeItem === 'Join a Discussion'}
          // onClick={handleItemClick}
        />

        <div class="right item">
          {!props.user ?
            <div>
              <Button onClick={() => history.push('/login')} secondary floated="right">Log In</Button>
              <Modal trigger={<Button primary floated="right">Sign Up</Button>}>
                <SignUp />
              </Modal>
            </div>
            :
            <div>
              <Icon name='mail' size='large' />
              <Dropdown text={props.user.first_name} secondary floated="right">
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() =>history.push(`/profile/${props.user.id}`)} text='Profile' />
                  <Dropdown.Item text='Create Post' />
                  <Dropdown.Item onClick={() => handleLogout()} text='Log Out' />
                </Dropdown.Menu>

              </Dropdown>
            </div>
          }
        </div>
      </Menu>
    </Segment>
  )
}
