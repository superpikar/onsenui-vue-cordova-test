<style scoped>
  .contact-item {
    display: flex;
    flex-direction: column;
  }
  .contact-item .info .see-more {
    position: absolute;
    right: 0;
    top: 14px;
  }
</style>

<template>
  <div class="contact-item">
    <div class="info">
      <span>
        {{item.displayName}}
      </span>
      <span class="see-more">
        <v-ons-icon icon="fa-search-plus" v-if="!item.showDetail" @click="showDetail(item)"></v-ons-icon>
        <v-ons-icon icon="fa-search-minus" v-if="item.showDetail" @click="hideDetail(item)"></v-ons-icon>
      </span>
    </div>
    <div class="detail" v-if="item.showDetail">
      <ul>
        <li>Family Name : {{item.name.familyName}}</li>
        <li>Given Name : {{item.name.givenName}}</li>
        <li>Phone Number : {{item.phoneNumbers|parsePhoneNumber}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-param-reassign */
export default {
  props: {
    item: {
      type: Object,
    },
  },
  filters: {
    parsePhoneNumber(value) {
      if (typeof value !== 'undefined' && value !== null) {
        return value.map(val => val.value).join(',');
      }
      return '-';
    },
  },
  methods: {
    showDetail(item) {
      item.showDetail = true;
    },
    hideDetail(item) {
      item.showDetail = false;
    },
  },
};
</script>

