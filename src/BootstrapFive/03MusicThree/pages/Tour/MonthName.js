
/** FOR DATE FORMAT */

export const monthName = (date) => {

  let dt = new Date(date);
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  let monthInNumber = dt.getMonth();

  return date === false ? ' - ' : month[monthInNumber];


}