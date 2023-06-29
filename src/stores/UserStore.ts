import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from '@/plug/SweetAlert';
import type { LineLoginRequest } from '@/interface/line.model';

const { VITE_BASEURL } = import.meta.env;

export default defineStore('userStore', {
  state: () => ({
    isLogin: false,
    user: {
      DharmaName: '',
      Name: '',
    },
    deaconName: '',
  }),
  actions: {
    async checkLogin(token: string): Promise<void | boolean> {
      this.isLogin = !!localStorage.isLogin;
      if (!token) {
        this.overLogin();
        return;
      }
      this.user = sessionStorage.user && JSON.parse(sessionStorage.user);
      this.deaconName = sessionStorage.deaconName;

      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      const url: string = `${VITE_BASEURL}/managers/check`;
      try {
        const check: { data: any } = await axios.post(url);
        if (check.data.status && !this.isLogin) {
          this.isLogin = true;
          localStorage.setItem('isLogin', 'true');
        }

        if (this.user) return;
        const profile: { data: any } = await axios.get(`${VITE_BASEURL}/managers/profile`);
        const { userId } = profile.data.data;
        const userData: { data: any } = await axios.get(`${VITE_BASEURL}/users/${userId}`);
        const { user } = userData.data.data;
        this.user = user;
        sessionStorage.setItem('user', JSON.stringify(user));
      } catch (err: any) {
        console.error(err);
        // this.overLogin();
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
          const swal = await Swal.fire(res.data.message);
          localStorage.setItem('isLogin', 'true');
          sessionStorage.setItem('deaconName', res.data.data.deaconName);
          if (swal.isConfirmed || swal.isDismissed) {
            document.cookie = `token=${res.data.data.token}; expires=${new Date(
              res.data.data.expired * 1000,
            )}`;
            window.location.href = '/';
          }
        }
      } catch (err: any) {
        Swal.fire({
          icon: 'error',
          title: err.response.data.message,
        });
      }
    },
    async lineLogin(lineLoginRequest: LineLoginRequest) {
      const url: string = `${VITE_BASEURL}/managers/line/signin`;
      const data: LineLoginRequest = lineLoginRequest;
      try {
        const res: { data: any } = await axios.post(url, data);

        if (res.data.status) {
          const swal = await Swal.fire(res.data.message);
          localStorage.setItem('isLogin', 'true');
          sessionStorage.setItem('deaconName', res.data.data.deaconName);
          if (swal.isConfirmed || swal.isDismissed) {
            document.cookie = `token=${res.data.data.token}; expires=${new Date(
              res.data.data.expired * 1000,
            )}`;
            window.location.href = '/';
          }
        }
      } catch (err: any) {
        Swal.fire({
          icon: 'error',
          title: err.response.data.message,
        });
      }
    },
    async register(
      Email: string,
      Password: string,
      ConfirmPassword: string,
      UserId: number,
      qr: string,
    ) {
      const url: string = `${VITE_BASEURL}/managers/signup${qr ? `/${qr}` : ''}`;
      // const url: string = `${VITE_BASEURL}/managers/generate`; // 不會被userId驗證
      const data: { Email: string; Password: string; ConfirmPassword: string; UserId: number } = {
        Email,
        Password,
        ConfirmPassword,
        UserId,
      };
      try {
        const res: { data: any } = await axios.post(url, data);
        if (res.data.status) {
          const swal = await Swal.fire('註冊成功');
          this.clearCookie();
          console.log('user register');
          console.log(res.data);
          console.log('----------');
          if (swal.isConfirmed || swal.isDismissed) window.location.href = '/';
        }
      } catch (err: any) {
        Swal.fire({
          icon: 'error',
          title: err.response.data.message,
        });
        console.error(err.response.data);
      }
    },
    async signOut() {
      this.clearCookie();
      const swal = await Swal.fire('登出成功');
      if (swal.isConfirmed || swal.isDismissed) window.location.href = '/';
    },
    async overLogin() {
      this.clearCookie();
      if (window.location.hash !== '#/') {
        const swal = await Swal.fire('請重新登入');
        if (swal.isConfirmed || swal.isDismissed)
          window.location.href = `${window.location.origin}/#/admin`;
      }
    },
    clearCookie(): void {
      this.isLogin = false;
      localStorage.setItem('isLogin', 'false');
      document.cookie = `token=;expires=${new Date()}`;
    },
    getToken(): string {
      if (!document.cookie.includes('token')) return '';
      const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];
      return token || '';
    },
  },
});
