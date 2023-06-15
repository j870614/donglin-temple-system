import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from '@/plug/SweetAlert';
import GuestStore from './GuestStore';

const { VITE_BASEURL } = import.meta.env;
export default defineStore('buddhaStore', {
  state: () => ({
    totalBuddha: [],
    totalOrder: [],
    checkInOrder: [],
    ajaxFinish: false,
  }),
  actions: {
    // 全部佛七期數
    async getTotal(year: number) {
      const url = `${VITE_BASEURL}/buddha-seven/periods?year=${year}`;
      const res: { data: any } = await axios.get(url);
      this.totalBuddha = res.data.data.buddhaSevenPeriods;
    },
    // 新增期數
    async addBuddha(data: any) {
      const { StartSevenDate, CompleteDate, Remarks } = data;
      const url = `${VITE_BASEURL}/buddha-seven/periods`;
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
        Swal.fire({
          icon: 'error',
          title: err.response.data.message,
        });
        return 0;
      }
    },
    // 修改期數
    async editorBuddha(data: any) {
      const { StartSevenDate, CompleteDate, Remarks, Id } = data;
      const url = `${VITE_BASEURL}/buddha-seven/periods/${Id}`;
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
        Swal.fire({
          icon: 'error',
          title: err.response.data.message,
        });
        return 0;
      }
    },
    // 佛七報名
    async applyBuddha(dataArr: any, router: any) {
      const url = `${VITE_BASEURL}/buddha-seven/applies`;
      const allAxios: any[] = [];
      const allEditor: any[] = [];
      const guestStore = GuestStore();

      dataArr.forEach((data: any) => {
        const temp = {
          UserId: data.Id,
          CheckInDate: new Date(data.date[0]),
          CheckOutDate: new Date(data.date[1]),
          CheckInDateBreakfast: data.CheckInDateBreakfast,
          CheckInDateLunch: data.CheckInDateLunch,
          CheckInDateDinner: data.CheckInDateDinner,
          Remarks: data.Remarks || '',
          UpdateUserId: JSON.parse(sessionStorage.user).Id,
        };
        allAxios.push(axios.post(url, temp));
        allEditor.push(guestStore.editorInfo(data.Id, data));
      });

      try {
        const res = await Promise.all([...allAxios, ...allEditor]);
        const swal = await Swal.fire({
          icon: 'success',
          title: res[0].data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        if (swal.isDismissed) {
          sessionStorage.removeItem('totalTemp');
          router.push('/back/buddha/signUp?step=1');
        }
      } catch (err: any) {
        Swal.fire({
          icon: 'error',
          title: err.response.data.message,
        });
      }
    },
    // 佛七預約報名表
    async getOrderList(year: number, month: number) {
      const url = `${VITE_BASEURL}/buddha-seven/applies/views?year=${year}&month=${month}`;
      try {
        const res: { data: any } = await axios.get(url);
        this.totalOrder = res.data.data.buddhaSevenApplyViews;
      } catch (err: any) {
        Swal.fire({
          icon: 'error',
          title: err.response.data.message,
        });
      }
    },
    // 取消佛七報名
    async deleteOrder(Id: number, year: number, month: number) {
      const url = `${VITE_BASEURL}/buddha-seven/applies/cancel/${Id}?UpdateUserId=${
        JSON.parse(sessionStorage.user).Id
      }`;
      try {
        const res = await axios.patch(url);
        Swal.fire({
          icon: 'success',
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        this.getOrderList(year, month);
      } catch (err: any) {
        Swal.fire({
          icon: 'error',
          title: err.response.data.message,
        });
      }
    },
    // 修改佛七報名
    async editorInfo(info: any, year: number, month: number) {
      const url = `${VITE_BASEURL}/buddha-seven/applies/${info.Id}`;
      const data = {
        UserId: info.UserId,
        CheckInDate: new Date(info.CheckInDate),
        CheckOutDate: new Date(info.CheckOutDate),
        CheckInDateBreakfast: info.CheckInDateBreakfast,
        CheckInDateLunch: info.CheckInDateLunch,
        CheckInDateDinner: info.CheckInDateDinner,
        Remarks: info.Remarks ? info.Remarks : '',
        UpdateUserId: JSON.parse(sessionStorage.user).Id,
      };

      try {
        const res: { data: any } = await axios.patch(url, data);
        Swal.fire({
          icon: 'success',
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        this.getOrderList(year, month);
      } catch (err: any) {
        Swal.fire({
          icon: 'error',
          title: err.response.data.message,
        });
      }
    },
    // 佛七報到清單
    async getCheckInList() {
      const url = `${VITE_BASEURL}/buddha-seven/check-ins/views`;
      try {
        const res: { data: any } = await axios.get(url);
        this.checkInOrder = res.data.data.buddhaSevenApplyViews;
      } catch (err: any) {
        Swal.fire({
          icon: 'error',
          title: err.response.data.message,
        });
      }
    },
    // 佛七報到
    async checkInBuddha(id: string, tempUser: any, router: any) {
      const url = `${VITE_BASEURL}/buddha-seven/check-ins/${id}`;
      const data = {
        UpdateUserId: JSON.parse(sessionStorage.user).Id,
        CheckInUserId: tempUser.Id,
        Remarks: '',
      };
      try {
        const user = tempUser;
        user.Expertise = JSON.stringify(tempUser.Expertise);
        user.HealthStatus = JSON.stringify(tempUser.HealthStatus);
        const guestStore = GuestStore();
        const res = await Promise.all([
          axios.patch(url, data),
          guestStore.editorInfo(user.Id, user),
        ]);
        console.log(res);

        const swal = await Swal.fire({
          icon: 'success',
          title: res[0].data.message,
        });
        if (swal.isConfirmed) {
          this.getCheckInList();
          router.push('/back/buddha/checkIn?step=1');
        }
      } catch (err: any) {
        const res = await Swal.fire({
          icon: 'error',
          title: err.response.data.message,
        });
        if (res.isConfirmed) {
          // router.push('/back/buddha/checkIn?step=1');
        }
      }
    },
  },
});
