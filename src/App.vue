<script>
import { mapStores, mapActions, mapWritableState } from 'pinia';
import { useSiteStore } from './store';

export default {
  name: 'App',
  data() {
    return {
      das: '',
    };
  },
  computed: {
    // ...mapStores(useSiteStore),
    ...mapWritableState(useSiteStore, ['domain']),
  },
  created() {
    // this.siteStore.setSite('example.com');
    this.domain = 'initial';
    console.log('re-created');
  },
  methods: {
    ...mapActions(useSiteStore, ['setSite']),
    async test() {
      await this.setSite('abcd');
      console.log(this.domain);

      // this.siteStore.domain = 'abcxyz';
      // console.log(this.siteStore.domain);
    },
  },
};
</script>

<template>
  <div>
    <!-- {{ siteStore.domain }} -->
    {{ domain }}
    <br />
    <button @click="test()">click</button>
  </div>
</template>

<style scoped></style>
