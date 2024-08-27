const slideshowElements = document.querySelectorAll(".slideshow-element");
let countElements = 1;
setInterval(() => {
  countElements++;

  let currentElement = document.querySelector(".current");

  currentElement.classList.remove("current");

  //   after all 5 icons are completed,then we again show from the first elements,that's why
  if (countElements > slideshowElements.length) {
    slideshowElements[0].classList.add("current");
    countElements = 1;
  } else {
    currentElement.nextElementSibling.classList.add("current");
  }
}, 2000);
