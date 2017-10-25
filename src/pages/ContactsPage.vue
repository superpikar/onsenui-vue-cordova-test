<style>
  .contact-item {
    display: flex;
    flex-direction: column;
  }
  .contact-item .info .see-more {
    position: absolute;
    right: 0;
    top: 14px;
  }
  .list-title {
    margin-top: 30px;
  }
</style>

<template>
  <v-ons-page>
    <navbar></navbar>
    <div class='main-content'>
      <p v-show='contacts.length==0'>no contact yet!</p>
      <h2>Test Cordova Contact Plugin</h2>
      <v-ons-row>
        <v-ons-col>
          <v-ons-button @click='pickContact'>Pick Contact</v-ons-button>
        </v-ons-col>
        <v-ons-col>
          <v-ons-button @click='findContact'>Find Contact</v-ons-button>
        </v-ons-col>
      </v-ons-row>
      
      <v-ons-list-title>Selected Contacts</v-ons-list-title>
      <v-ons-list>
        <v-ons-list-item v-for='(item, key) in contacts' :key='key'>
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
                <li>Phone Number : {{item.name.phoneNumbers|parsePhoneNumber}}</li>
              </ul>
            </div>
          </div>
        </v-ons-list-item>
      </v-ons-list>
    </div>
  </v-ons-page>
</template>

<script>
/* eslint-disable no-param-reassign */
const sampleContact = {
  displayName: 'John Milakovic',
  name: {
    familyName: 'Milakovic',
    givenName: 'John',
    middleName: '',
    formatted: 'John Milakovic',
  },
  nickname: null,
  phoneNumbers: [
    { id: '7378', pref: false, value: '01043882879', type: 'mobile' },
  ],
  showDetail: false,
};
const sampleContact2 = {
  displayName: 'Andrey Kobarovski',
  name: {
    familyName: 'Kobarovski',
    givenName: 'Andrey',
    middleName: '',
    formatted: 'Andrey Kobarovski',
  },
  nickname: null,
  phoneNumbers: null,
  showDetail: false,
};

export default {
  data() {
    return {
      contacts: [sampleContact, sampleContact2],
    };
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
    pickContact() {
      if (navigator.contacts) {
        navigator.contacts.pickContact((contact) => {
          console.log('The following contact has been selected:');
          
          const selectedContact = Object.assign(contact, {
            showDetail: false,
          });
          this.contacts.push(selectedContact);
        }, (error) => {
          console.log('error callback');
          console.log(error);
        });
      }
    },
    findContact() {
      if (navigator.contacts) {
        navigator.contacts.find((contacts) => {
          console.log('success callback');
          console.log(contacts);
          return true;
        }, (error) => {
          console.log('error callback');
          console.log(error);
        });
      }
    },
  },
};
</script>
