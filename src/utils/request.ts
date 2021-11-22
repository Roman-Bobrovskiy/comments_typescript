import request from "./path.json";
// fetch server data
let getServerData = () => {
  return fetch(request.receive);
};

// fetch rirst page
let getComments = () => {
  return fetch(request.receive + request.page + request.firstPage);
};

//fetch send data
let sendData = (name:string, text:string) => {
  let dataToSend = JSON.stringify({
    name: name,
    text: text,
  });

  fetch(request.send, {
    mode: "cors",
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: dataToSend,
  })
    .then((data) => {
      if (data.status === 200) {
        return data.json();
      } else {
        console.log("Status: " + data.status);
      }
    })
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    })
    .finally(console.log(`Received: ${dataToSend}`)!);
};

//pagination fatch
async function getPage(url:string) {
  return await fetch(url);
}

let requests = {
  getServerData,
  getComments,
  sendData,
  getPage,
};

export default requests;
