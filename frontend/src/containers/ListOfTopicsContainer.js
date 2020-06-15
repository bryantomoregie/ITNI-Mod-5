import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Button, Comment, Form, Header, Icon, Popup, Dropdown, Grid, Image, Search } from 'semantic-ui-react'
import DiscussionTopicCard from '../components/DiscussionTopicCard'

export default function ListOfTopicsContainer(props) {

    console.log(props.discussions)
    // let [value, setValue] = useState['']
    let [topics, setTopics] = useState(props.discussions)
    let [filteredTopics, setFilteredTopics] = useState(null)

    let handleSearch = (query) => {
        let filteredTopicList = topics.filter(topic => topic.title.toLowerCase().includes(query.toLowerCase()))
        console.log(filteredTopicList)
        setFilteredTopics({
            filteredTopics: filteredTopicList
        })
    }

    

return(
    <Grid>
        <Grid.Column width={6}>
          <Search
          placeholder="Search..." name="search" onSearchChange={(e) => console.log(e.target.value)}
            // loading={isLoading}
            // onResultSelect={this.handleResultSelect}
            // onSearchChange={_.debounce(this.handleSearchChange, 500, {
            //   leading: true,
            // })}
            // results={results}
            // value={value}
            // {...this.props}
          />
        </Grid.Column>
    <Grid.Row columns={3}>
        {props.discussions.map(discussion => <DiscussionTopicCard user={props.user} discussion={discussion} key={discussion.id}/>)}
    </Grid.Row>
    </Grid>
)

}