import{A as u,P as h}from"./index-8954a36c.js";import{a as D}from"./SweetAlert-183ed47c.js";import{h as i}from"./moment-fbc5633a.js";const{VITE_BASEURL:m}={VITE_BASEURL:"https://donglin-temple-backend-00pk.onrender.com/api",BASE_URL:"/donglin-temple-system/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},A=new Date().getFullYear(),R=new Date().getMonth()+1,k=u("roomStore",{state:()=>({monthAppliess:[],roomsData:[]}),actions:{async getMonthApppliessData(t,e){this.monthAppliess=[];const a=`${m}/buddha-seven/applies/views?year=${t}&month=${e}`;try{const s=await h.get(a);this.monthAppliess=s.data.data.buddhaSevenApplyViews}catch(s){D.fire({icon:"error",title:s.response.data.message})}},async getRoomsData(){const t=`${m}/rooms`;try{const e=await h.get(t);this.roomsData=e.data.data.rooms}catch(e){D.fire({icon:"error",title:e.response.data.message})}},findRoomArea(t){const e=this.roomsData.find(a=>a.RoomId===t);return e?e.DormitoryAreaName:""},insertRoomArea(){this.monthAppliess.forEach((t,e)=>{let a;t.RoomId!==null&&(a=this.findRoomArea(t.RoomId));const s=i(new Date(t.CheckInDate)).format("MM/DD"),r=i(new Date(t.CheckOutDate)).format("MM/DD");this.monthAppliess[e]={...t,roomArea:a,inDate:s,outDate:r}})},insertroomOrderData(){this.roomsData.forEach((t,e)=>{const a=this.monthAppliess.filter(o=>o.RoomId===t.RoomId),s=new Date,r=new Date(s.getFullYear(),s.getMonth(),s.getDate()),p=a.filter(o=>new Date(o.CheckInDate)<r),d=a.filter(o=>{const n=new Date(o.CheckInDate),f=new Date(o.CheckOutDate);return n<=r&&f>=r}),l=a.filter(o=>new Date(o.CheckInDate)>r),c=[];a.forEach(o=>{const n={id:o.Id,title:o.DharmaName?o.DharmaName:o.Name,start:i(new Date(o.CheckInDate)).format("YYYY-MM-DD"),end:i(new Date(o.CheckOutDate)).format("YYYY-MM-DD")};c.push(n)}),this.roomsData[e]={...t,roomUsers:a,historicalUsers:p,ongoingUsers:d,futureUsers:l,roomEventArray:c}})},async fetchDataAndInsertRoomArea(t=A,e=R){this.roomsData.length>0&&(await this.getMonthApppliessData(t,e),this.insertRoomArea(),this.insertroomOrderData()),await Promise.all([this.getRoomsData(),this.getMonthApppliessData(t,e)]),this.insertroomOrderData(),this.insertRoomArea()}}});export{k as R};
