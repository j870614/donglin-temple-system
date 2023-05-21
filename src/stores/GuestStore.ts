import { defineStore } from 'pinia';
import axios from 'axios';
// import Swal from '@/plug/sweetAlert';

const { VITE_BASEURL } = import.meta.env;
export default defineStore('guestStore', {
  state: () => ({
    guestsData: [] as any[],
  }),
  actions: {
    async getTotal() {
      try {
        const res: { data: any } = await axios.get(`${VITE_BASEURL}/guests?order=asc`);
        if (res.data.status) {
          this.guestsData = [...res.data.allUsers];
        }
        // console.log(res.data);
      } catch (err: any) {
        console.log(err);
      }
    },
  },
});
