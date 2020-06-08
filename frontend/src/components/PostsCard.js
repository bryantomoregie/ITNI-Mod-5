import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import PostPage from '../components/PostPage'


export default function PostCard(props) {

let history = useHistory()



    return (
        <Grid.Column>
            
                <Card onClick={() => history.push(`/posts/${props.post.id}`)}>
                    <Image src={props.post.image} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header style={{ textAlign: "center" }}>{props.post.original_post}</Card.Header>
                    
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