let dilseçeneği = document.querySelector("#dilseçeneği")
let dildropdown = document.querySelector("#dildropdown")

dilseçeneği.addEventListener('click',()=>{
    dildropdown.classList.toggle("active");
    dilseçeneği.classList.toggle("active");
})