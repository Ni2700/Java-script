const slide = document.querySelectorAll(".slide")
var counter = 0;

// console.log(slide);
slide.forEach(
    (slide, index) => {
       slide.style.bottom = `${index * 100}%`
    }
 )

 const goPrev = () => {
    counter--
    slideImage()
}

const goNext = () => {
    counter++
    slideImage()
}

const slideImage = () => {
    slide.forEach(
        (slide) => {
       slide.style.transform = `translateY(${counter * 100}%)`
        }
    )
}
