
/** FOR DATE FORMAT */

export const DateYear = (date) => {

  let dt = new Date(date);

  let year = dt.getFullYear();

  return date === false ? ' - ' : year;


}