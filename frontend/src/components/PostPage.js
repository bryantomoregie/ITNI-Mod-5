import React, {useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

export default function PostPage(props) {

let params = useParams()    

let [post, setPost ] = useState({
    original_post: null,
    image: null,
    user_id: null,
    discussion_id: null
})

useEffect(() => {
    fetch(`http://localhost:3000/posts/${params.id}`)
    .then(resp => resp.json())
    .then(post => setPost(post))
}, [])

    return(

        <h1>{post.original_post}</h1>
    )
}