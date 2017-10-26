<style>

</style>

<template>
  <v-ons-page>
    <div class='main-content'>
      <v-ons-search-input placeholder="Search contact"></v-ons-search-input>
      <v-ons-list-title>Contact List</v-ons-list-title>
      <loading-circle :is-loading="isLoading" text="Reading contact list"></loading-circle>
      <v-ons-list>
        <v-ons-list-item v-show='contacts.length==0 && !isLoading'>
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

/**
 * sort by displayName
 * credit : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
function sortContacts(items) {
  // sort by name
  return items.sort((a, b) => {
    const nameA = a.displayName.toUpperCase(); // ignore upper and lowercase
    const nameB = b.displayName.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
}

export default {
  components: {
    ContactItem,
    LoadingCircle,
  },
  data() {
    return {
      isLoading: false,
      contacts: [],
    };
  },
  mounted() {
    this.findContact();
  },
  methods: {
    findContact() {
      if (navigator.contacts) {
        this.isLoading = true;
        const findFields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
        navigator.contacts.find(findFields, (contacts) => {
          console.log('success callback');
          // add showDetail properties
          contacts.map((val) => {
            const contact = Object.assign(val, {
              showDetail: false,
            });
            return contact;
          });
          this.contacts = sortContacts(contacts);
          this.$store.commit('setFindContactsLength', contacts.length);
          this.isLoading = false;
        }, (error) => {
          console.log('error callback');
          console.log(error);
          this.isLoading = false;
        });
      }
    },
  },
};
</script>
