import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Button, Comment, Form, Header, Icon, Popup, Dropdown, Grid, Image, Search } from 'semantic-ui-react'
import DiscussionTopicCard from '../components/DiscussionTopicCard'

export default function ListOfTopicsContainer(props) {
    let [topics, setTopics] = useState(props.discussions)
    let [filteredTopics, setFilteredTopics] = useState(null)

    let handleSearch = (query) => {
        let filteredTopicList = topics.filter(topic => topic.title.toLowerCase().includes(query.toLowerCase()))
        setFilteredTopics(
          filteredTopicList
        )
    }

    let discussions = filteredTopics == null ? topics : filteredTopics
    
    console.log(filteredTopics)
    

return(
    <Grid>
        <Grid.Column width={6}>
          <Search
          placeholder="Search..." name="search" onSearchChange={(e) => handleSearch(e.target.value)}
          />
        </Grid.Column>
    <Grid.Row columns={3}>
        {discussions.map(discussion => <DiscussionTopicCard user={props.user} discussion={discussion} key={discussion.id}/>)}
    </Grid.Row>
    </Grid>
)

}