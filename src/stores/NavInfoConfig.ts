import { defineStore } from 'pinia';

export default defineStore('navInfoStore', {
  state: () => ({
    isUserOpen: false as boolean,
    isMsgOpen: false as boolean,
  }),
  actions: {
    closeAll(): void {
      this.isUserOpen = false;
      this.isMsgOpen = false;
    },
  },
});
