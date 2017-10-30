<template>
  <v-ons-page>
    <navbar></navbar>
    <div class="main-content">
      <v-ons-button class="float-right" @click='openDialog'>Scan Devices</v-ons-button>
      <v-ons-list>
        <v-ons-list-item v-show='selectedDevices.length==0 && !isLoading'>
          <div class="contact-item">
            <div class="info">no device yet!</div>
          </div>
        </v-ons-list-item>
        <v-ons-list-item v-for="(item, key) in selectedDevices" :key="key">
          <p>{{item.name}}</p>
          <small>{{item.id}}</small>
        </v-ons-list-item>
      </v-ons-list>
    </div>

    <v-ons-alert-dialog modifier="rowfooter"
      :visible.sync="dialog.isVisible"
    >
      <span slot="title">Scan Nearest Devices</span>
      <loading-circle :is-loading="dialog.isLoading" text="Scan nearest bluetooth devices"></loading-circle>
      <v-ons-list-item v-show='devices.length==0 && !isLoading'>
        <strong>no device found!</strong>
      </v-ons-list-item>
      <v-ons-list-item v-for="(item, key) in devices" :key="key">
        <p>{{item.name}}</p>
        <small>{{item.id}}</small>
      </v-ons-list-item>
      <template slot="footer">
        <div class="alert-dialog-button" @click="closeDialog">Cancel</div>
        <div class="alert-dialog-button" @click="selectDevice">Ok</div>
      </template>
    </v-ons-alert-dialog>
  </v-ons-page>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      devices: [],
      selectedDevices: [],
      dialog: {
        isVisible: false,
        isLoading: false,
      },
    };
  },
  methods: {
    closeDialog() {
      this.dialog.isLoading = false;
      this.dialog.isVisible = false;
    },
    openDialog() {
      /* eslint-disable no-undef */
      this.devices = [];  // force reset devices list
      if (typeof ble === 'undefined') {
        this.$ons.notification.alert('Can\'t scan bluetooth devices on mobile web');
      } else {
        this.dialog.isVisible = true;
        ble.scan([], 5, (device) => {
          console.log('found!', device.id); // every device found here
          this.devices.push(device);
        }, (error) => {
          console.log('device not found!');
          console.log(error);
        });
      }
    },
    selectDevice() {
      console.log();
    },
  },
};
</script>
