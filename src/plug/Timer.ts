function getCurrentYear(date: number): number {
  return new Date(date).getFullYear();
}
function getCurrentMonth(date: number): number {
  return new Date(date).getMonth() + 1;
}
function getCurrentDay(date: number): number {
  return new Date(date).getDate();
}
export { getCurrentYear, getCurrentMonth, getCurrentDay };
