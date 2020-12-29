
export const DateDay = (date) => {

  let dt = new Date(date);

  let day = dt.getDate();

  return date === false ? ' - ' : day;


}