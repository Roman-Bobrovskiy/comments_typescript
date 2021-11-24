//called in App.js
let scrollToEndPage = () => {
  let height = document.body.clientHeight;
  if (height !== document.documentElement.scrollHeight) {
    window.scrollTo({
          top: height ,
          behavior: "smooth"})

  }
};

export default scrollToEndPage;
