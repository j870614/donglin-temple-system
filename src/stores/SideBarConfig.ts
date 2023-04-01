import { defineStore } from 'pinia';

export default defineStore('sideBarConfigStore', {
  state: () => ({
    isOpen: false,
  }),
  actions: {
    changeIsOpen() {
      this.isOpen = !this.isOpen;
    },
  },
});
