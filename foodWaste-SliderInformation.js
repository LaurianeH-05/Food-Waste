const initSlider = () => {

  //slides images according to the buttons
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth
    
    slideButtons.forEach(button => {
      button.addEventListener("click", () => {
        const direction = button.id === "backwards" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction
        imageList.scrollBy({left: scrollAmount,behavior: "smooth"});
    });
  });
  const handleSlideButtons = () => {
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display = imageList.scrollLeft >=  maxScrollLeft ? "none" : "block";
  }
  
  imageList.addEventListener("scroll", () => {
    handleSlideButtons();
  })
};

window.addEventListener("load", initSlider);

// code not working excatly 7/13
