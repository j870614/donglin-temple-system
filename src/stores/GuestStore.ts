import { defineStore } from 'pinia';
import axios from 'axios';
import UserStore from './UserStore';
// import Swal from '@/plug/sweetAlert';

const { VITE_BASEURL } = import.meta.env;
export default defineStore('guestStore', {
  state: () => ({
    guestsData: [] as any[],
  }),
  actions: {
    async getTotal() {
      const userStore = UserStore();
      try {
        axios.defaults.headers.common.Authorization = `Bearer ${userStore.getToken()}`;

        const res: { data: any } = await axios.get(`${VITE_BASEURL}/users?order=asc`);
        if (res.data.status) {
          this.guestsData = [...res.data.data.users];
        }
        // console.log(res.data);
      } catch (err: any) {
        console.log(err);
      }
    },
  },
});
