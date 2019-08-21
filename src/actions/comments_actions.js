import axios from 'axios';

export function createComment(values) {
  console.log(values)
  axios.post(`https://simple-blog-api.crew.red/comments`, values)
  .then(resp => {
      console.log(resp.data);
      return {
        type: 'CREATE_COMMENT',
        payload: resp.data
    };
  })
}