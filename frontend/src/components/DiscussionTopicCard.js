import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import topiccontainer from '../containers/TopicContainer'


export default function DiscussionTopicCard(props) {

let history = useHistory()

console.log(props)

    return (
        <Grid.Column>

                <Card onClick={() => history.push(`/topics/${props.discussion.id}`)}>
                    <Image src={props.discussion.image} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header style={{ textAlign: "center" }}>{props.discussion.title}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Created in 2020</span>
                        </Card.Meta>
                        <Card.Description>
                           {props.discussion.description}
      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='talk' />
        {props.discussion.posts.length} Conversations happening
      </a>
                    </Card.Content>
                </Card>
           
        </Grid.Column>
    )
}