import React, { Component, useState, useEffect } from 'react';
import { Tab, Feed, Icon, Card, Image, Grid, List } from 'semantic-ui-react'
import { useParams, useHistory } from 'react-router-dom'
import CommentsListRow from '../components/CommentsListRow'
import PostListRow from '../components/PostListRow'
import ChangedMindList from '../components/ChangedMindList'
import MadeMeThinkList from '../components/MadeMeThinkList'

export default function UserHomePage(props) {


    // let [user, setUser] = useState(null)
    // debugger 
    // useEffect(() => {
    //     fetch('http://localhost:3000/users', {
    //       method: 'GET',
    //       credentials: 'include'
    //     })
    //       .then(resp => resp.json())
    //       .then(users => 
    //         setUser(users.filter(x => x.id === props.user.id)) 
    //         )
    //   }, [])
    console.log(props.user)

    // useEffect(() => {
       
    // console.log(users.filter(user => user.id === props.user.id))
    // })


    return(
        <h1>Yo</h1>
    )
}