
/** FOR DATE FORMAT */

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const fullMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



export const DayMonthCommaYear = (date) => {
  /**
   *  DATE: 20 Jan, 2020
   */

  let dt = new Date(date);

  let monthInNumber = dt.getMonth();
  let year = dt.getFullYear();
  let day = dt.getDate();

  return `${day} ${month[monthInNumber]}, ${year}`;

}


export const DayFullMonthCommaYear = (date) => {
  /**
   *  DATE: 20 January, 2020
   */

  let dt = new Date(date);

  let monthInNumber = dt.getMonth();
  let year = dt.getFullYear();
  let day = dt.getDate();

  return `${day} ${fullMonth[monthInNumber]}, ${year}`;

}

export const Day_Month_Year = (date) => {
  /**
   *  DATE: 20-01-2020
   */

  let dt = new Date(date);

  let monthInNumber = dt.getMonth();
  let year = dt.getFullYear();
  let day = dt.getDate();

  return `${day}-${monthInNumber}-${year}`;

}

export const Month_Year = (date) => {
  /**
   *  DATE: 01-2020
   */

  let dt = new Date(date);

  let monthInNumber = dt.getMonth();
  let year = dt.getFullYear();

  return `${monthInNumber}-${year}`;

}

