<style scoped>
ons-row,
.card {
  min-height: 100px;
  padding: 0;
}
.card .left {
  flex-basis: 30%;
  background-position: center;
}
.card .right {
  flex-basis: 70%;
  padding: 10px;
  background-position: center;
}
.card .right .title{
  color: #313131;
  font-size: 16px;
  margin: 0;
  font-family: 'Rozha One', serif;
}
.card .right .meta{
  color: #313131;
  font-size: 10px;
  font-family: 'Fauna One', serif;
}
.card .right .author{
  color: #8674af;
  font-weight: bold;
}
.card .right .date{
  color: #5e5e5e;
}

</style>

<template>
  <v-ons-page>
    <navbar enable-back></navbar>
    <div class="main-content">
      <router-link class="link-card" :to="`/post/${item.ID}`" v-for="(item, key) in posts" :key="item.ID">
        <v-ons-card>
          <v-ons-row>
            <v-ons-col class="left" :style="`background-image: url(${item.post_thumbnail_small});`"></v-ons-col>
            <v-ons-col class="right">
              <h3 class="title">{{item.title}}</h3>
              <div class="meta">by <span class="author">{{item.author.name}}</span> on <span class="date">{{item.date|formatDate}}</span></div>
            </v-ons-col>
          </v-ons-row>
        </v-ons-card>
      </router-link>
    </div>
  </v-ons-page>
</template>

<script>
import PostService from '../services/PostService';

export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.posts = []; // clear array content
    this.fetchData(1);
  },
  methods: {
    fetchData(page = 1) {
      PostService.getList(page).then((response) => {
        response.posts.forEach((val) => {
          this.posts.push(val);
        });
      });
    },
  },
};
</script>
