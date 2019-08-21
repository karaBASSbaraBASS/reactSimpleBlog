import React from 'react';
import { connect } from 'react-redux';
import { createComment } from '../actions/comments_actions';
import {
    Form
} from 'semantic-ui-react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    commentSendSubmit = ()=> {
        const values = {
            "postId": this.props.id,
	        "body": this.state.value
        }
        console.log(values)
        this.props.createComment(values);
    }
    
    render() {
        return (
            <Form onSubmit={this.commentSendSubmit}>
                <Form.TextArea label='New comment' placeholder='Write your comment...' value={this.state.value} onChange={this.handleChange} required/>
                <Form.Button>Sent</Form.Button>
            </Form>
        );
    }
}
    
export default connect(null, { createComment })(CommentForm);
