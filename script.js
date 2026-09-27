const galleryItems = document.querySelectorAll(".gallery-item");
const images = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;


// Open Lightbox
images.forEach((image, index) => {

    image.addEventListener("click", function () {

        currentIndex = index;

        lightbox.style.display = "flex";

        lightboxImg.src = images[currentIndex].src;

    });

});


// Next Image
nextBtn.addEventListener("click", function () {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImg.src = images[currentIndex].src;

});


// Previous Image
prevBtn.addEventListener("click", function () {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImg.src = images[currentIndex].src;

});


// Close Lightbox
closeBtn.addEventListener("click", function () {

    lightbox.style.display = "none";

});


// Close when clicking background
lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }

});


// Category Filter
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        // Remove active class
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class
        this.classList.add("active");

        const filter = this.dataset.filter;

        galleryItems.forEach(item => {

            if (filter === "all" || item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});