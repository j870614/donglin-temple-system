import { defineStore } from 'pinia';

export default defineStore('sideBarConfigStore', {
  state: () => ({
    isOpen: true as boolean,
  }),
});
