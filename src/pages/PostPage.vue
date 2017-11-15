<style scoped>
</style>

<template>
  <v-ons-page>
    <navbar :title="post.title" enable-back>
      <v-ons-toolbar-button @click="showPopover($event)">
        <v-ons-icon icon="md-more-vert"></v-ons-icon>
      </v-ons-toolbar-button>
    </navbar>
    <div class="post post-single">
      <img class="cover" :src="post.post_thumbnail_small" alt=""  @click="showModal">
      <div class="main-content">
        <h1 class="title">{{post.title}}</h1>
        <div class="meta">by <span class="author">{{post.author.name}}</span> on <span class="date">{{post.date|formatDate}}</span></div>
        <div class="content" v-html="post.content"></div>
      </div>
    </div>
    <v-ons-modal :visible="modal.visible" @click="hideModal">
      <div class="image-modal">
        <img :src="post.post_thumbnail.URL" />
      </div>
    </v-ons-modal>
    <v-ons-popover cancelable
      :visible.sync="popover.visible"
      :target="popover.target"
      direction="down"
      :cover-target="true"
    >
      <v-ons-list>
        <v-ons-list-item @click="sharePost">
          <div class="left"><v-ons-icon icon="md-share" class="list-item__icon"></v-ons-icon></div>
          <div class="center">Share</div>
        </v-ons-list-item>
        <v-ons-list-item @click="bookmarkPost">
          <div class="left"><v-ons-icon icon="md-download" class="list-item__icon"></v-ons-icon></div>
          <div class="center">Save to bookmark</div>
        </v-ons-list-item>
      </v-ons-list>
    </v-ons-popover>
  </v-ons-page>
</template>

<script>
import PostService from '../services/PostService';
import Post from '../models/Post';

export default {
  data() {
    return {
      post: Post,
      popover: {
        target: null,
        visible: false,
      },
      modal: {
        visible: false,
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      PostService.getDetail(this.$route.params.slug).then((response) => {
        console.log();
        this.post = response;
      });
    },
    showPopover(event) {
      this.popover.target = event;
      this.popover.visible = true;
    },
    closePopover() {
      this.popover.target = null;
      this.popover.visible = false;
    },
    showModal() {
      this.modal.visible = true;
    },
    hideModal() {
      this.modal.visible = false;
    },
    sharePost() {
      this.closePopover();
      if (typeof window.plugins === 'undefined') {
        this.$ons.notification.alert('Can\'t share on mobile web');
      } else {
        const options = {
          message: this.post.shareText, // not supported on some apps (Facebook, Instagram)
          subject: this.post.title, // fi. for email
          // files: ['', ''], // an array of filenames either locally or remotely
          url: this.post.short_URL,
          chooserTitle: 'Pick an app', // Android only, you can override the default share sheet title
        };
        window.plugins.socialsharing.shareWithOptions(options, (result) => {
          console.log('Sharing success');
          console.log(result);
          this.$ons.notification.alert('Share post success');
        }, (error) => {
          console.log('Sharing error');
          console.log(error);
          this.$ons.notification.alert('Share post failed :(');
        });
      }
    },
    bookmarkPost() {
      this.closePopover();
      this.$ons.notification.toast('Save to bookmark!', { timeout: 2000 });
    },
  },
};
</script>
