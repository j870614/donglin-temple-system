import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from '@/plug/SweetAlert';

const { VITE_BASEURL } = import.meta.env;
export default defineStore('adminStore', {
  state: () => ({
    adminStatus: [] as any[],
    qrcode: '',
    managers: [] as any[],
  }),
  actions: {
    async getAuthStatus() {
      const url = `${VITE_BASEURL}/managers/qrcode/status`;
      try {
        const res: { data: any } = await axios.get(url);
        this.adminStatus = res.data.data.data;
      } catch (err: any) {
        console.log(err);
      }
    },
    async createdQR(user: any) {
      const url = `${VITE_BASEURL}/managers/qrcode`;
      const data = {
        AuthorizeUserId: JSON.parse(sessionStorage.user).Id,
        UserId: user.UserId,
        DeaconName: user.DeaconName,
        ChurchName: user.ChurchName,
      };
      this.qrcode = '';
      try {
        const res = await axios.post(url, data);
        this.getAuthStatus();
        this.qrcode = res.data.data.qrcode;
      } catch (err: any) {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: err.response.data.message,
        });
      }
    },
    async patchAuth(user: any, active: boolean) {
      console.log(user);

      try {
        const url = `${VITE_BASEURL}/managers/auth`;
        const data = {
          UserId: user.UserId,
          ChurchName: user.ChurchName,
          DeaconName: user.DeaconName,
          IsActive: active,
        };
        const res = await axios.patch(url, data);
        console.log(res);
      } catch (err: any) {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: err.response.data.message,
        });
      }
    },
    async getManagers() {
      const url = `${VITE_BASEURL}/managers`;
      try {
        const res: { data: any } = await axios.get(url);
        this.managers = res.data.data.managers;
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
