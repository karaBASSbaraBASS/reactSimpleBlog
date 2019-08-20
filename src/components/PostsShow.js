import axios from 'axios';
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchOnePost, deleteOnePost } from '../actions/posts_actions';
import imageStub from '../assets/img/matt.jpg'
import {
    Container,
    Comment,
} from 'semantic-ui-react';

class PostsShow extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id)
        axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
        .then(result=>{
            this.props.fetchOnePost(result);
        })
    }

    onDeleteClick() {
        const { id } = this.props.match.params;

        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }
    renderComents() {
        return _.map(this.props.post.comments, id=> {
            console.log(id)
            return(
                <Container text>
                <Comment key={ id }>
                    <Comment.Avatar src={imageStub} />
                    <Comment.Content>
                    <Comment.Author as='a'>UserName</Comment.Author>
                    <Comment.Metadata>
                        <div>Today at 5:42PM</div>
                    </Comment.Metadata>
                    <Comment.Text>{id.body}</Comment.Text>
                    <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                    </Comment.Content>
                </Comment>
                </Container>
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
                    </Container>
                    { this.renderComents() }
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
  
export default connect(mapStateToProps, { fetchOnePost, deleteOnePost })(PostsShow);