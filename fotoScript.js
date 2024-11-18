let modal = document.getElementById("image-modal");
let modalImg = document.getElementById("enlargedImage");
let closeBtn = document.getElementsByClassName("close")[0];
let images = document.getElementsByClassName("gallery-image");
let imageCounter = document.getElementById("imageCounter");
let currentIndex = 0;

// Function to update image counter 
function updateCounter() { 
    imageCounter.innerText = `${currentIndex + 1}/${images.length}`; 
}

// Function to update image counter 
function resetCounter() { 
    imageCounter.innerText = `0/${images.length}`; }

// Function to open modal
function openModal(index) {
    modal.style.display = "block";
    modalImg.src = images[index].src;  // Set the modal image source
    currentIndex = index;
}

// Function to close modal
function closeModal() {
    modal.style.display = "none";
    resetCounter();
}

// Function to navigate to next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Loop to the next image
    modalImg.src = images[currentIndex].src;
    updateCounter();
}

// Function to navigate to previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the previous image
    modalImg.src = images[currentIndex].src;
    updateCounter();
}

// Attach click events to images to open the modal
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        openModal(i);
    };
}

// Close modal on click of the close button
closeBtn.onclick = function() {
    closeModal();
}

// Close modal on 'Esc' key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Navigate to next/prev image with arrow keys
document.addEventListener('keydown', function(event) {
    if (modal.style.display === "block") {
        if (event.key === 'ArrowRight') {
            nextImage();
        } else if (event.key === 'ArrowLeft') {
            prevImage();
        }
    }
});

// Add click events to the next/prev buttons
document.getElementById("next").onclick = nextImage;
document.getElementById("prev").onclick = prevImage;
