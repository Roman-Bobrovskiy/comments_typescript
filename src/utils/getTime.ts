// called in CommentList.js
let getTime = (created_at:string) => {
  let Data = new Date(created_at);
  let Year = Data.getFullYear();
  let Month = Data.getMonth();
  let Day = Data.getDate();
  let Hour = Data.getHours();
  let Minutes = Data.getMinutes();

  let result = `${Year}.${Month}.${Day} at ${Hour}:${
    Minutes < 10 ? "0" + Minutes : Minutes
  }`;
  return result;
};

export default getTime;
