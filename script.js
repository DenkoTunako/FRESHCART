let dilseçeneği = document.querySelector("#dilseçeneği")
let dildropdown = document.querySelector("#dildropdown")

dilseçeneği.addEventListener('click',()=>{
    dildropdown.classList.toggle("active");
    dilseçeneği.classList.toggle("active");
});


var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });


  var sswiper = new Swiper(".smySwiper", {
    slidesPerView: 6,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
      el: ".swiper-paginations",
      clickable: true,
    },
  });
