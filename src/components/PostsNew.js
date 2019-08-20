import React from 'react';

class PostsNew extends React.Component {
    render() {
        return(
            <React.Fragment>
                <h1>Create post Page!</h1>
                <Form reply>
                        <Form.TextArea />
                        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                    </Form>
            </React.Fragment>
        )
    }
}

  
export default PostsNew;