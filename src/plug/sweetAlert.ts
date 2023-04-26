import sweetalert2 from 'sweetalert2';
import type { SweetAlertOptions } from 'sweetalert2';

const option: SweetAlertOptions = {
  confirmButtonColor: '#0CCFA1',
  cancelButtonColor: '#EE4055',
  reverseButtons: true,
  confirmButtonText: '確認',
  cancelButtonText: '取消',
};

const Swal = sweetalert2.mixin(option);

export default Swal;
