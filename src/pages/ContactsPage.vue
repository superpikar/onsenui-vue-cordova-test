<template>
  <v-ons-page>
    <navbar></navbar>
    <div class="main-content">
      <p v-show="contacts.length==0">no contact yet!</p>
      <v-ons-button modifier="large">Add Contact</v-ons-button>
    </div>
  </v-ons-page>
</template>

<script>
export default {
  data() {
    return {
      contacts: [],
    };
  },
};
</script>
