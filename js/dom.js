
//* js starts
let nextImage=document.querySelector(".img_change .replace")


function toggleImage(){
    nextImage.src="./images/img1.jpg"
}

nextImage.addEventListener("mouseenter", toggleImage)


function prevImage(){
    nextImage.src="./images/img2.jpg"
}

nextImage.addEventListener("mouseout",prevImage)
//*Js ends
