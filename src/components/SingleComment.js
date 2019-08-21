import React from 'react';
import imageStub from '../assets/img/matt.jpg';
import {
    Container,
    Comment
} from 'semantic-ui-react';

const SingleComment = (props) => {
    
    const { id, body } = props;
    return(
        
        <Container text>
            <Comment key={ id }>
                <Comment.Avatar src={imageStub} />
                <Comment.Content>
                    <Comment.Author as='a'>User Name</Comment.Author>
                        <Comment.Metadata>
                            <div>Today at 5:42PM</div>
                        </Comment.Metadata>
                    <Comment.Text>{body}</Comment.Text>
                </Comment.Content>
            </Comment>
        </Container>
    )
}

export default SingleComment;