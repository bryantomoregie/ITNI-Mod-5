import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import { BrowserRouter, Route, useHistory } from 'react-router-dom';
import Welcome from './components/Welcome'
import Homepage from './components/Homepage'
import Login from './components/Login'
import DiscussionTopicCard from './components/DiscussionTopicCard';
import PostsCard from './components/PostsCard';
import Profile from './components/Profile';
import CommentCardContainer from './containers/CommentCardContainer'
import CommentCard from './components/CommentCard'


function App() {

  let [discussions, setDiscussions] = useState([])
  let [posts, setPosts] = useState([])
  let [user, setUser] = useState(null)

  let setCurrentUser = (currentUser) => { setUser(currentUser) }


  useEffect(() => {
    fetch('http://localhost:3000/discussions', {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(discussionTopics => {
        console.log(discussionTopics)
        setDiscussions(discussionTopics)
        // debugger
      })
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/posts', {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(allposts => {
        console.log(posts)
        setPosts(allposts)
        // debugger
      })
    console.log(posts)
  }, [])


  useEffect(() => {
    fetch('http://localhost:3000/login', {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(currentUser => setUser(currentUser))
    // debugger
  }, [])



  return (
    <div>
      <BrowserRouter>

        <div className="App" >
          <Navigation user={user} setCurrentUser={setCurrentUser} />
          <Route exact path="/" component={() => <Welcome />} />
        </div>
        <br></br>
        <br></br>
        <Route exact path="/posts/:id" component={() => <CommentCardContainer />} />
        <Route exact path="/profile" component={() => <Profile />} />
        <Route exact path="/login" component={() => <Login setCurrentUser={setCurrentUser} />} />
        <Route exact path="/" component={() => <Homepage discussions={discussions} posts={posts} />} />
        <Route exact path="/topiccard" component={() => <DiscussionTopicCard />} />
        <Route exact path="/commentcard" component={() => <CommentCard user={user} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
