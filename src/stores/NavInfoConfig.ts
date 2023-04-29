import { defineStore } from 'pinia';

export default defineStore('navInfoStore', {
  state: () => ({
    isUserOpen: false,
    isMsgOpen: false,
  }),
  actions: {
    closeAll() {
      this.isUserOpen = false;
      this.isMsgOpen = false;
    },
  },
});
