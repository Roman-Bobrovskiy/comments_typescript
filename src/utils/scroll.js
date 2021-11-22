//called in App.js
let scrollToEndPage = () => {
  let height = document.body.scrollHeight;
  if (height !== document.documentElement.scrollHeight) {
    window.scrollTo({
      top: height,
      behavior: "smooth",
    });

    setTimeout(() => scrollToEndPage(height), 100);
  }
};

export default scrollToEndPage;
