<style>
.tabbar__badge.notification {
  right: 15px;
}
</style>

<template>
  <v-ons-page>
    <navbar></navbar>
    <v-ons-tabbar swipeable position="auto"
      :tabs.sync="tabs"
      :visible="true"
      :index.sync="activeIndex"
    >
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import ContactsPickPage from './ContactsPickPage';
import ContactsFindPage from './ContactsFindPage';

export default {
  data() {
    return {
      activeIndex: 0,
      tabs: [
        {
          icon: this.md() ? null : 'ion-person-stalker',
          label: 'Contact List',
          page: ContactsFindPage,
          badge: this.$store.state.findContactsLength,
          key: 'findContact',
        },
        {
          icon: this.md() ? null : 'ion-person-add',
          label: 'Pick Contact',
          page: ContactsPickPage,
          badge: this.$store.state.pickContactsLength,
          key: 'pickContact',
        },
      ],
    };
  },
  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    },
  },
};
</script>
