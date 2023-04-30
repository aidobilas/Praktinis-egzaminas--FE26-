const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
   600: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
});



const burger = document.getElementById("burger")
const sideNav = document.querySelector(".side-nav")
const links = document.getElementsByClassName("link")

burger.addEventListener("click", function(){
    this.classList.toggle("rotateZ")
    sideNav.classList.toggle("transformX")
})

// Resize event
window.addEventListener("resize", function(){
    if(window.innerWidth > 768){
        burger.classList.remove("rotateZ")
        sideNav.classList.remove("transformX")
    }
})


// Active link style
// Neveiks
// for(var i = 0; i < links.length; i++){
//     links[i].addEventListener("click", function(){
//         alert("Link")  
//     })
// }

for(var link of links){
    link.addEventListener("click", function(){

        // Removes active class
        for(var link of links){
            link.classList.remove("active")
        }

        // Adds active class to link
        this.classList.add("active")
    })
}