import _ from 'lodash';
import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts_actions';
import Link from './Link';
import imageStub from '../assets/img/image.png'
import avatarStub from '../assets/img/square-image.png'
import {
    Container,
    Header,
    Image,
    Item,
    Form,
    Button
  } from 'semantic-ui-react'



class PostsIndex extends React.Component {
    componentDidMount() {
        // returns promise with list of all posts
        axios.get('https://simple-blog-api.crew.red/posts')
        .then(result=>{
            const posts = _.mapKeys(result.data, 'id');
            this.props.getPostsAction(posts);
        })
    }
    renderPosts() {
        return _.map(this.props.posts, post => {
            console.log(this.props.post )
            const{ ...props } = this.props;
            return(
                
                <Item key={ post.id }>
                    <Item.Image src={imageStub}/>
                    <Item.Content>
                        <Item.Header as='a'>
                            <Link link={`/posts/${post.id}`} text={post.title}/>
                        </Item.Header>
                        <Item.Meta>
                        <span>Date</span>
                        <span>Category</span>
                        </Item.Meta>
                        <Item.Extra>
                        <Image avatar circular src={avatarStub} />
                        Username
                        </Item.Extra>
                    </Item.Content>
                </Item>
            );
        });
    }
    render() {
        return(
            <React.Fragment>
                <Header as='h3' content='All posts Page!' textAlign='center' />
                <Container>
                    <Item.Group divided className="blogList">
                        { this.renderPosts() }
                    </Item.Group>
                </Container>
                <Form reply>
                    <Form.TextArea />
                    <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                </Form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        posts: state.AllPosts 
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getPostsAction: (result) => dispatch(fetchPosts(result))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);