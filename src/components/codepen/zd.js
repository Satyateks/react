document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".animated-text");
    text.classList.add("typing-animation");
  });
  const button = document.querySelector(".expand-button");

  button.addEventListener("click", function () {
    window.scroll({
      top: 955,
      left: 0,
      behavior: "smooth",
    });
  });