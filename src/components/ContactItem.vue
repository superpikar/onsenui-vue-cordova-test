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
    <div class="info" @click="toggleDetail(item)">
      <span>
        {{item.displayName}}
      </span>
      <span class="see-more">
        <v-ons-icon icon="fa-search-plus" v-if="!item.showDetail"></v-ons-icon>
        <v-ons-icon icon="fa-search-minus" v-if="item.showDetail"></v-ons-icon>
      </span>
    </div>
    <div class="detail" v-if="item.showDetail">
      <ul>
        <li>Family Name : {{item.name.familyName}}</li>
        <li>Given Name : {{item.name.givenName}}</li>
        <li>Phone Number : {{item.phoneNumbers|parsePhoneNumber}}</li>
      </ul>
      <p><small>Send SMS test, following text will be sent : </small><br/>
        <strong><small>{{item.displayName|parseSmsText}}</small></strong>
      </p>
      <v-ons-button @click="sendSms(item)">
        <v-ons-icon icon="fa-paper-plane"></v-ons-icon>
        Send
      </v-ons-button>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-param-reassign */
import Helper from '../helper';

export default {
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    toggleDetail(item) {
      item.showDetail = !item.showDetail;
    },
    sendSms(item) {
      /* eslint-disable no-undef */
      if (typeof sms === 'undefined') {
        this.$ons.notification.alert('Can\'t send on mobile web');
      } else {
        const message = Helper.setSmsText(item.displayName);
        const number = Helper.getFirstPhoneNumber(item.phoneNumbers);
        const options = {
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
            intent: '',  // send SMS without open another app
          },
        };
        if (number !== null) {
          sms.send(number, message, options, (success) => {
            this.$ons.notification.toast(`SMS sent to ${item.displayName}!`, { timeout: 2000 });
            console.log(success);
          }, (error) => {
            this.$ons.notification.toast('Error sending SMS', { timeout: 2000 });
            console.log(error);
          });
        } else {
          this.$ons.notification.alert('This contact doesn\'t have phone number');
        }
      }
    },
  },
};
</script>

