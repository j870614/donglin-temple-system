import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from '@/plug/SweetAlert';
import moment from 'moment';

const { VITE_BASEURL } = import.meta.env;
const defaultYear = new Date().getFullYear();
const defaultMonth = new Date().getMonth() + 1;

interface RoomStoreState {
  monthAppliess: any[];
  roomsData: any[];
}

export default defineStore('roomStore', {
  state: (): RoomStoreState => ({
    monthAppliess: [],
    roomsData: [],
  }),
  actions: {
    // 佛七預約報名表
    async getMonthApppliessData(year: number, month: number) {
      this.monthAppliess = [];
      const url = `${VITE_BASEURL}/buddha-seven/applies/views?year=${year}&month=${month}`;
      try {
        const res: { data: any } = await axios.get(url);
        this.monthAppliess = res.data.data.buddhaSevenApplyViews;
      } catch (err: any) {
        Swal.fire({
          icon: 'error',
          title: err.response.data.message,
        });
      }
    },
    // 所有寮房資料
    async getRoomsData() {
      const url = `${VITE_BASEURL}/rooms`;
      try {
        const res: { data: any } = await axios.get(url);
        this.roomsData = res.data.data.rooms;
      } catch (err: any) {
        Swal.fire({
          icon: 'error',
          title: err.response.data.message,
        });
      }
    },
    findRoomArea(roomID: string) {
      const room = this.roomsData.find((roomData: any) => {
        return roomData.RoomId === roomID;
      });
      if (room) {
        return room.DormitoryAreaName;
      }
      return '';
    },
    insertRoomArea(): void {
      this.monthAppliess.forEach((element: any, index) => {
        let roomArea: string | undefined;
        if (element.RoomId !== null) {
          roomArea = this.findRoomArea(element.RoomId) as string;
        }
        const inDate = moment(new Date(element.CheckInDate)).format('MM/DD');
        const outDate = moment(new Date(element.CheckOutDate)).format('MM/DD');
        this.monthAppliess[index] = { ...element, roomArea, inDate, outDate };
      });
    },
    insertroomOrderData(): void {
      this.roomsData.forEach((element: any, index) => {
        const roomUsers = this.monthAppliess.filter((e) => {
          return e.RoomId === element.RoomId;
        });
        this.roomsData[index] = { ...element, roomUsers };
      });
    },
    async fetchDataAndInsertRoomArea(year = defaultYear, month = defaultMonth) {
      if (this.roomsData.length > 0) {
        await this.getMonthApppliessData(year, month);
        this.insertRoomArea();
        this.insertroomOrderData();
      }
      await Promise.all([this.getRoomsData(), this.getMonthApppliessData(year, month)]);
      this.insertroomOrderData();
      this.insertRoomArea();
    },
  },
});
