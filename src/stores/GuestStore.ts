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
    // 取得全部四眾個資
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
    // 新增個資
    async addUser(user: any) {
      const url = `${VITE_BASEURL}/users`;
      const data = {
        Name: user.Name,
        IsMonk: user.IsMonk,
        IsMale: user.IsMale,
        DharmaName: user.DharmaName,
        Mobile: user.Mobile,
        Phone: user.Phone,
        Remarks: user.Remarks,
      };

      try {
        const res: { data: any } = await axios.post(url, data);
        return {
          data: res.data.data.user,
          status: res.data.status,
          message: res.data.message,
        };
      } catch (err: any) {
        return {
          status: err.response.data.status,
          message: err.response.data.message,
        };
      }
    },
  },
});
