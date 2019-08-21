import axios from 'axios';
import _ from 'lodash';
import React from 'react';
import SingleComment from './SingleComment';
import CommentForm from './CommentForm';
import { connect } from 'react-redux';
import { fetchOnePost } from '../actions/posts_actions';
import {
    Container,
    Comment,
    Button,
    Header
} from 'semantic-ui-react';

class PostsShow extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
        .then(result=>{
            this.props.fetchOnePost(result);
        })
    }
    
    renderComents = () => {
        return _.map(this.props.post.comments, id=> {
            return(
                <SingleComment 
                    key={id.id}
                    id={id.id}
                    body={id.body}
                />
                );
            });
    }
    
    render() {
        const { post } = this.props;
        if(!post) {
            return (
                <div className="ui segment">
                    <div className="ui active inverted dimmer">
                        <div className="ui text loader">Loading</div>
                    </div>
                    <p></p>
                </div>
            )
        } else {
            return(
                <React.Fragment>
                    <Container text>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    
                        <Comment.Group>
                            <Header as='h3' dividing>
                            Comments
                            </Header>
                            { this.renderComents() }
                        </Comment.Group>

                        <CommentForm id={this.props.match.params.id}/>
                    </Container>
                    <Container text>
                        <div className="editPost">
                            <Button content='Edit Entire Post' labelPosition='left' icon='edit' color='green' floated='right'/>
                        </div>
                    </Container>
                </React.Fragment>
            )
        }
    }
}
const mapStateToProps = (state) => {
    return { 
        post: state.fetchOnePost 
    };
};
  
export default connect(mapStateToProps, { fetchOnePost })(PostsShow);