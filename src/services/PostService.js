import axios from 'axios';
import sanitizeHtml from 'sanitize-html';
import Helper from '../helper';
import Config from '../config';

const HASHTAG = '#dailykorean';
const APIURL = 'https://public-api.wordpress.com/rest/v1.1/sites/dailykorean.wordpress.com';
const POSTFIELD = {
  LIST: 'ID,slug,title,author,date,short_URL,excerpt,categories,attachments,tags,post_thumbnail',
  DETAIL: 'ID,slug,title,author,date,short_URL,excerpt,categories,attachments,tags,post_thumbnail,content',
};
const PERPAGE = 5;

export default {
  getList(page = 1) {
    return axios.get(`${APIURL}/posts?page=${page}&number=${PERPAGE}&fields=${POSTFIELD.LIST}`).then((response) => {
      response.data.posts.map((val) => {
        let thumbnail = Config.DEFAULT.IMAGE;
        if (val.post_thumbnail) {
          thumbnail = `${val.post_thumbnail.URL}?width=300`;
        }
        return Object.assign(val, {
          post_thumbnail_small: thumbnail,
          title: Helper.htmlDecode(val.title),
        });
      });
      return response.data;
    });
  },
  getDetail(slug) {
    return axios.get(`${APIURL}/posts/slug:${slug}/?fields=${POSTFIELD.DETAIL}`).then((response) => {
      let thumbnail = Config.DEFAULT.IMAGE;
      if (response.data.post_thumbnail) {
        thumbnail = `${response.data.post_thumbnail.URL}?width=300`;
      }

      const content = sanitizeHtml(response.data.content, {
        allowedAttributes: {
          '*': ['href', 'align', 'alt', 'center', 'bgcolor'],
          p: ['style'],
        },
      });
      // const content = response.data.content;
      const title = Helper.htmlDecode(response.data.title);
      Object.assign(response.data, {
        post_thumbnail_small: thumbnail,
        content,
        title,
        shareText: `${title} ${HASHTAG}`,
      });
      return response.data;
    });
  },
};
