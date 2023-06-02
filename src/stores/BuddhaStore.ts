import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from '@/plug/SweetAlert';
import GuestStore from './GuestStore';
// import router from '@/router'

const { VITE_BASEURL } = import.meta.env;
export default defineStore('buddhaStore', {
  state: () => ({
    totalBuddha: [],
    totalOrder: [],
  }),
  actions: {
    // 全部佛七期數
    async getTotal(year: number) {
      const url = `${VITE_BASEURL}/buddha-seven?year=${year}`;
      const res: { data: any } = await axios.get(url);
      this.totalBuddha = res.data.data.buddhaSevenYearly;
    },
    // 新增期數
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
    // 修改期數
    async editorBuddha(data: any) {
      const { StartSevenDate, CompleteDate, Remarks, Id } = data;
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
    // 佛七報名
    async applyBuddha(dataArr: any, router: any) {
      const url = `${VITE_BASEURL}/buddha-seven-apply`;
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
        const res = await Promise.all([...allEditor, ...allAxios]);
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
      const url = `${VITE_BASEURL}/buddha-seven-apply?year=${year}&month=${month}`;
      try {
        const res: { data: any } = await axios.get(url);
        this.totalOrder = res.data.data.buddhaSevenApplyMonthly;
      } catch (err) {
        console.log(err);
      }
    },
    // 取消佛七報名
    async deleteOrder(Id: number, year: number, month: number) {
      const url = `${VITE_BASEURL}/buddha-seven-apply/${Id}`;
      try {
        const res = await axios.delete(url);
        Swal.fire({
          icon: 'success',
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        this.getOrderList(year, month);
      } catch (err) {
        console.log(err);
      }
    },
    // 修改佛七報名
    async editorInfo(info: any) {
      const url = `${VITE_BASEURL}/buddha-seven-apply/${info.Id}`;
      const data = {
        UserId: info.UserId,
        CheckInDate: new Date(info.CheckInDate),
        CheckOutDate: new Date(info.CheckOutDate),
        CheckInDateBreakfast: info.CheckInDateBreakfast,
        CheckInDateLunch: info.CheckInDateLunch,
        CheckInDateDinner: info.CheckInDateDinner,
        Remarks: info.Remarks,
        UpdateUserId: JSON.parse(sessionStorage.user).Id,
      };

      try {
        const res: { data: any } = await axios.patch(url, data);
        console.log(res);

        Swal.fire({
          icon: 'success',
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (err: any) {
        console.log(err);
      }
    },
  },
});
