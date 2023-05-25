import { defineStore } from 'pinia';
import axios from 'axios';
// import Swal from '@/plug/sweetAlert';

const { VITE_BASEURL } = import.meta.env;
export default defineStore('buddhaStore', {
  state: () => ({
    totalBuddha: [],
  }),
  actions: {
    async getTotal(year: number) {
      const url = `${VITE_BASEURL}/buddha-seven?year=${year}`;
      const res: { data: any } = await axios.get(url);
      this.totalBuddha = res.data.data.buddhaSevenYearly;
    },
  },
});
