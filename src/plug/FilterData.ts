/**
 * 無查詢按鈕的 年份+月份資料篩選
 * @param year '要篩選的年份'
 * @param month '要篩選的月份'
 * @param originArray 'AJAX的原始資料'
 * @param filterArray '篩選後的資料存放'
 */
export default function filterUsers<T extends { registrationDate: number }>(
  year: number,
  month: number,
  originArray: T[],
  filterArray: T[],
) {
  filterArray.splice(0, filterArray.length);
  const filter = originArray.filter((item) => {
    return (
      new Date(item.registrationDate).getFullYear() === year &&
      new Date(item.registrationDate).getMonth() + 1 === month
    );
  });
  filterArray.push(...filter);
}
