import { defineStore } from 'pinia';
import axios from 'axios';
import UserStore from './UserStore';
// import Swal from '@/plug/sweetAlert';

const { VITE_BASEURL } = import.meta.env;
export default defineStore('guestStore', {
  state: () => ({
    guestsData: [] as any[],
    currentUser: {},
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
      const userStore = UserStore();
      axios.defaults.headers.common.Authorization = `Bearer ${userStore.getToken()}`;
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
    async editorInfo(id: number, info: any) {
      const userStore = UserStore();
      axios.defaults.headers.common.Authorization = `Bearer ${userStore.getToken()}`;

      const url = `${VITE_BASEURL}/users/${id}`;
      const data = { ...info };
      const keys = Object.keys(info);
      keys.forEach((key) => {
        if (data[key] === null || data[key] === undefined) delete data[key];
      });
      data.Address = JSON.stringify(data.Address);
      if (typeof data.Address === 'string') data.Address.replace('/\\/g', '');
      if (typeof data.Expertise === 'string') data.Address.replace('/\\/g', '');
      if (typeof data.HealthStatus === 'string') data.Address.replace('/\\/g', '');

      delete data.Id;
      delete data.UpdateAt;
      delete data.sex;
      delete data.identity;
      delete data.date;
      delete data.CheckInDateBreakfast;
      delete data.CheckInDateLunch;
      delete data.CheckInDateDinner;
      delete data.StayIdentityName;
      try {
        await axios.patch(url, data);
      } catch (err: any) {
        console.log(err);
      }
    },
    // 取得單一個資
    async getUser(id: number) {
      try {
        const res = await axios.get(`${VITE_BASEURL}/users/${id}`);
        this.currentUser = res.data.data.user;
        sessionStorage.setItem('tempUser', JSON.stringify(res.data.data.user));
      } catch (err: any) {
        console.log(err);
      }
    },
  },
});
