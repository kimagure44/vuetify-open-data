<template>
  <div id="app">
    <v-app id="inspire">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
        v-show="showLoading"
        class="loading-progress">
      </v-progress-circular>
      <app-navigation></app-navigation>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
import AppNavigation from './components/AppNavigation.vue';

export default {
  name: 'App',
  components: {
    AppNavigation,
  },
  data() {
    return {
      showLoading: false,
    };
  },
  created() {
    this.$bus.$on('show-loading', (value) => {
      this.showLoading = value;
    });
  },
};
</script>

<style scoped>
  .loading-progress {
    position: absolute;
    left: 50%;
    top: 50%;
  }
</style>
