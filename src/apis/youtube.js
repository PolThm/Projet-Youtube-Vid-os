import axios from 'axios';

const KEY = 'AIzaSyDEpmK0NQoAfnHaSRq2mepebRUBm--7dPQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
