import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://simple-blog-api.crew.red/posts'
});

export default instance;