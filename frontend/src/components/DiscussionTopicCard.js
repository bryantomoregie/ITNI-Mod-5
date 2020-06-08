import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'


export default function DiscussionTopicCard(props) {





    return (
        <Grid.Column>
            
                <Card>
                    <Image src={props.discussion.image} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header style={{ textAlign: "center" }}>{props.discussion.title}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>
                            Matthew is a musician living in Nashville.
      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
        22 Friends
      </a>
                    </Card.Content>
                </Card>
           
        </Grid.Column>
    )
}