//called in App.js
let scrollToEndPage = () => {
  let height = document.body.clientHeight;
  if (height !== document.documentElement.scrollHeight) {
setTimeout(
()=> window.scrollTo({
    top: height ,
    behavior: "smooth",
  }),350
)
  }
};

export default scrollToEndPage;
