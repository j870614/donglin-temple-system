function getCurrentYear(date: number): number {
  return new Date(date).getFullYear();
}
function getCurrentMonth(date: number): number {
  return new Date(date).getMonth() + 1;
}
function getCurrentDay(date: number): number {
  return new Date(date).getDate();
}

function formatDate(date: number, needZero: boolean = false): string {
  return `${getCurrentYear(date)}/${
    needZero && getCurrentMonth(date) < 10 ? `0${getCurrentMonth(date)}` : getCurrentMonth(date)
  }/${needZero && getCurrentDay(date) < 10 ? `0${getCurrentDay(date)}` : getCurrentDay(date)}`;
}
export { getCurrentYear, getCurrentMonth, getCurrentDay, formatDate };
