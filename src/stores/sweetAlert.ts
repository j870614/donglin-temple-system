import Swal from 'sweetalert2';

const mySwal = Swal.mixin({
  confirmButtonColor: '#0CCFA1',
  cancelButtonColor: '#EE4055',
  reverseButtons: true,
  confirmButtonText: '確認',
  cancelButtonText: '取消',
});

export default mySwal;
