let menu = document.querySelector("#menuBars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    ThemeToggle.classList.remove("active");
    navbar.classList.toggle("active");
};


window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    ThemeToggle.classList.remove("active");

}

let ThemeToggle = document.querySelector(".toggleTheme");
let toggleBtn = document.querySelector(".toggleBtn");

toggleBtn.onclick = () => {
    ThemeToggle.classList.toggle("active");
};


document.querySelectorAll(".toggleTheme .theme-btn").forEach((btn) => {
    btn.onclick = () => {
        let color = btn.style.background;
        document.querySelector(":root").style.setProperty("--main, color");
    };
});


//gallery other
function showContent() {
    const content = document.getElementById('content');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

//gallery other

//Feedback Section
var swiper = new Swiper(".ReviewSlide", {
    slidesPerView: 1,
    grabCuror: true,
    loop: true,
    spaceBetween: 10,

    breakpoints{
        0: {
            slidesPerView:1, 
        },
        700: {
            slidesPerView:2,
        },
        1050: {
            slidesPerView:3,
        },
    },

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

// slider.js code pasted start


// var nextBtn = document.querySelector('.next'),
//     prevBtn = document.querySelector('.prev'),
//     carousel = document.querySelector('.carousel'),
//     list = document.querySelector('.list'), 
//     item = document.querySelectorAll('.item'),
//     runningTime = document.querySelector('.carousel .timeRunning') 

// let timeRunning = 3000 
// let timeAutoNext = 7000

// nextBtn.onclick = function(){
//     showSlider('next')
// }

// prevBtn.onclick = function(){
//     showSlider('prev')
// }

// let runTimeOut 

// let runNextAuto = setTimeout(() => {
//     nextBtn.click()
// }, timeAutoNext)


// function resetTimeAnimation() {
//     runningTime.style.animation = 'none'
//     runningTime.offsetHeight /* trigger reflow */
//     runningTime.style.animation = null 
//     runningTime.style.animation = 'runningTime 7s linear 1 forwards'
// }


// function showSlider(type) {
//     let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
//     if(type === 'next'){
//         list.appendChild(sliderItemsDom[0])
//         carousel.classList.add('next')
//     } else{
//         list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
//         carousel.classList.add('prev')
//     }

//     clearTimeout(runTimeOut)

//     runTimeOut = setTimeout( () => {
//         carousel.classList.remove('next')
//         carousel.classList.remove('prev')
//     }, timeRunning)


//     clearTimeout(runNextAuto)
//     runNextAuto = setTimeout(() => {
//         nextBtn.click()
//     }, timeAutoNext)

//     resetTimeAnimation() // Reset the running time animation
// }

// // Start the initial animation 
// resetTimeAnimation()

// slider.js code pasted end