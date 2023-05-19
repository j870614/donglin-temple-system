import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from '@/plug/SweetAlert';

const { VITE_BASEURL } = import.meta.env;
export default defineStore('sideBarConfigStore', {
  state: () => ({
    isLogin: false,
  }),
  actions: {
    async checkLogin(token: string): Promise<void | boolean> {
      this.isLogin = !!localStorage.isLogin;

      if (!token) {
        this.isLogin = false;
        localStorage.setItem('isLogin', 'false');
        return;
      }
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      const url: string = `${VITE_BASEURL}/managers/check`;
      try {
        const res: { data: any } = await axios.post(url);
        console.log('user checkLogin');
        console.log(res.data);
        console.log('----------');
      } catch (err) {
        this.isLogin = false;
        localStorage.setItem('isLogin', 'false');
      }
    },
    async login(Email: string, Password: string, Remember: boolean = false) {
      const url: string = `${VITE_BASEURL}/managers/signin`;
      const data: { Email: string; Password: string } = {
        Email,
        Password,
      };
      try {
        const res: { data: any } = await axios.post(url, data);
        if (res.data.status) {
          if (Remember) {
            localStorage.setItem('userAccount', Email);
          } else {
            localStorage.removeItem('userAccount');
          }
          const swal = await Swal.fire('登入成功');
          localStorage.setItem('isLogin', 'true');
          if (swal.isConfirmed || swal.isDismissed) {
            document.cookie = `token=${res.data.token}; expires=${new Date(
              res.data.expired * 1000,
            )}`;
            window.location.href = '/';
            // this.checkLogin(res.data.token);
            console.log('user login');
            console.log(res.data);
            console.log('----------');
          }
        }
      } catch (err: any) {
        Swal.fire({
          icon: 'error',
          title: err.response.data.message,
        });
        console.error(err.response.data);
      }
    },
    getToken(): string {
      const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];
      return token || '';
    },
  },
});
