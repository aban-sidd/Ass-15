// loader

window.addEventListener('load',() => {
  const loader = document.querySelector('.loader');

  loader.classList.add('loader--hidden');

  loader.addEventListener('transitioned', () => {
      document.body.removeChild(loader);
  });
})


// Navbar

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}


// slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$('.counter').counterUp({
  delay: 10,
  time: 1000
});