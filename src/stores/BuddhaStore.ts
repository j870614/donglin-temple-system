import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from '@/plug/sweetAlert';

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
    async addBuddha(data: any) {
      const { StartSevenDate, CompleteDate, Remarks } = data;
      const url = `${VITE_BASEURL}/buddha-seven`;
      const buddha = {
        StartSevenDate,
        CompleteDate,
        Remarks,
      };
      try {
        const res: { data: any } = await axios.post(url, buddha);
        Swal.fire({
          icon: 'success',
          title: res.data.message,
        });
        return 1;
      } catch (err: any) {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: err.response.data.message,
        });
        return 0;
      }
    },
    async editorBuddha(data: any) {
      const { StartSevenDate, CompleteDate, Remarks,Id } = data;
      const url = `${VITE_BASEURL}/buddha-seven/${Id}`;
      const buddha = {
        StartSevenDate,
        CompleteDate,
        Remarks,
      };
      try {
        const res: { data: any } = await axios.patch(url, buddha);
        Swal.fire({
          icon: 'success',
          title: res.data.message,
        });
        return 1;
      } catch (err: any) {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: err.response.data.message,
        });
        return 0;
      }
    },
  },
});
