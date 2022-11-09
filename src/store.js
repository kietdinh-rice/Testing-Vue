import { defineStore } from 'pinia';

export const useSiteStore = defineStore('site', {
  state: () => ({
    domain: null,
  }),
  actions: {
    async setSite(domain) {
      console.log(JSON.stringify(this.domain)); // { "value": null }
      this.domain = domain;
      console.log(JSON.stringify(this.slug)); // "example.com"
    },
  },
});
