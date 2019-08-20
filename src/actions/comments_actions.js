import axios from 'axios';

export function fetchPosts() {
    const request = axios.get(`/posts/${ID}?_embed=comments`);
  
    return {
      type: FETCH_COMMENTS,
      payload: request
    };
  }      