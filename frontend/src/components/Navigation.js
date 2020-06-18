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

  let [modalOpen, setModalOpen] = useState(false)

let handleOpen = () => 
{setModalOpen(true)
  history.push('/login')
}

let handleClose = () => {setModalOpen(false)}
// let handleOpen = () => {setModalOpen(true)}



  // const { activeItem } = activeItem

  return (

    <Segment >
      <Menu pointing secondary >
        <div style={{ fontSize: 20, fontWeight: 'bold' }}>
        <Menu.Item

          name='ITNI'
          active={activeItem === 'ITNI'}
          onClick={() => history.push('/')}
        />
        </div>
        <div style={{ fontWeight: 'normal', fontSize: 20 }}>
        <Menu.Item
          onClick={() => history.push('/listoftopics')}
          name='Join a Discussion'
          active={activeItem === 'Join a Discussion'}
          // onClick={handleItemClick}
        />
        </div>

        <div class="right item">
          {!props.user ?
            <div>
              <Button onClick={() => history.push('login')}secondary floated="right">Log In</Button>
              <Modal trigger={<Button onClick={() => handleOpen()}  floated="right">Sign Up</Button>}
              open={modalOpen}
              >
                <SignUp handleClose={handleClose}/>
              </Modal>
            </div>
            :
            <div>
              <Dropdown text={props.user.first_name} secondary floated="right">
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() =>history.push(`/profile/${props.user.id}`)} text='Profile' />
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
