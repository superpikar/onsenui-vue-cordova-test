import axios from 'axios';

const APIURL = 'https://public-api.wordpress.com/rest/v1.2/sites/dailykorean.wordpress.com';
const PERPAGE = 5;

export default {
  getList(page = 1) {
    return axios.get(`${APIURL}/posts?page=${page}&number=${PERPAGE}`).then((response) => {
      response.data.posts.map((val) => {
        let thumbnail = 'http://placehold.it/500x300';
        if (val.post_thumbnail) {
          thumbnail = val.post_thumbnail.URL;
        }
        return Object.assign(val, {
          post_thumbnail_small: thumbnail,
        });
      });
      return response.data;
    });
  },
};
