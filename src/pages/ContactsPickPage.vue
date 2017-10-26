<style>
  .list-title {
    margin-top: 30px;
  }
  .float-right {
    float: right;
  }
</style>

<template>
  <v-ons-page>
    <div class='main-content'>
      <v-ons-button class="float-right" @click='pickContact'>Pick Contact</v-ons-button>
      <v-ons-list-title>Selected Contacts</v-ons-list-title>
      <v-ons-list>
        <v-ons-list-item v-show='contacts.length==0'>
          <div class="contact-item">
            <div class="info">no contact yet!</div>
          </div>
        </v-ons-list-item>
        <v-ons-list-item v-for='(item, key) in contacts' :key='key'>
          <contact-item :item="item"></contact-item>
        </v-ons-list-item>
      </v-ons-list>
    </div>
  </v-ons-page>
</template>

<script>
import ContactItem from '../components/ContactItem';
import LoadingCircle from '../components/LoadingCircle';

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
  components: {
    ContactItem,
    LoadingCircle,
  },
  data() {
    return {
      contacts: [sampleContact, sampleContact2],
    };
  },
  watch: {
    contacts(newVal) {
      this.$store.commit('setPickContactsLength', newVal.length);
    },
  },
  mounted() {
    this.$store.commit('setPickContactsLength', this.contacts.length);
    console.log(this.$store.state.pickContactsLength);
  },
  methods: {
    pickContact() {
      if (navigator.contacts) {
        navigator.contacts.pickContact((contact) => {
          console.log('The following contact has been selected:');

          const selectedContact = Object.assign(contact, {
            showDetail: false,
          });
          console.log(JSON.parse(JSON.stringify(selectedContact)));
          this.contacts.push(selectedContact);
        }, (error) => {
          console.log('error callback');
          console.log(error);
        });
      }
    },
  },
};
</script>
