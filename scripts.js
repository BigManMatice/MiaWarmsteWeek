
function enterClass(klas) {
    let code = prompt("Voer de code in voor " + klas);
    if (code) {
        checkCode(klas, code);
    }
}

function checkCode(klas, code) {
    // Correcte codes per klas
    const codes = {
        //---- 1ste jaar----//
        '1Aa': 'solidariteit',
        '1Ab': 'samenhorigeheid',
        '1Ac': 'liefdadigheid',
        '1Ad': 'evenement',
        '1Ba': 'winter',
        '1Bb': 'België',

        //---- 2de jaar ----//
        '2Aa-EO': 'acties',
        '2Aa-STEM': 'goede_doel',
        '2Ab-STEM': 'geldinzameling',
        '2Ac-MW': 'bewustzijn',
        '2Ad-MW': 'maatschappelijk',
        '2Ae-MW': 'thema',
        '2Ba-EOMW': 'sportwedstrijden',
        '2Ba-MW': 'concerten',
        '2Bb-MW': 'vrijwilligers',

        //---- 3de jaar----//
        '3BO': 'hulp',
        '3BEW': 'initiatieven',
        '3M&Wa': 'donaties',
        '3M&Wb': 'organisatie',
        '3MWW': 'warm',
        '3O&L': 'gemeenschap',
        '3STEM': 'betrokkenheid',
        '3Z&Wa': 'steun',
        '3Z&Wb': 'bijdragen',

        //----4de jaar----//
        '4BO': 'radiomarathon',
        '4BEW': 'school',
        '4M&W': 'sponsorloop',
        '4MWWa': 'verkoop',
        '4MWWb': 'veiling',
        '4O&L': 'inzet', 
        '4STEM': 'hoop',
        '4Z&W': 'muziek',

        //----5de jaar----//
        '5AP': 'beweging',
        '5BEW': 'team',
        '5BIT': 'uitdaging',
        '5BO': 'motivatie',
        '5GZ': 'inspiratie',
        '5OBa': 'hulpverlening',
        '5OBb': 'zorg',
        '5OOS': 'passie',
        '5STEM': 'compassie',
        '5WW': 'inzet',
        '5ZORGa': 'hoop',
        '5ZORGb': 'muziek',

        //----6de jaar----//
        '6AP':'Kenny',
        '6BO': 'kracht',
        '6BEW': 'project',
        '6BIT': 'armoede',
        '6GZ': 'creativiteit',
        '6OBa': 'media',
        '6OBb': 'enthousiasme',
        '6OOS': 'steunpilaren',
        '6STEM': 'respect',
        '6WW': 'empatisch',
        '6ZORGa': 'kwetsbaarheid',
        '6ZORGb': 'inclusie',

        //----7de jaar----//
        '7BS': 'engagement',
        '7KZ': 'solidariteitacties',
        '7SJ': 'aandacht',
        '7TBZ':'samenwerking',

    };

    if (codes[klas] && codes[klas] === code) {
        // Ga naar de juiste pagina
        window.location.href = "klassen/"+klas + ".html";
    } else {
        alert("De code is incorrect");
    }
}

//--------------------------NAVBAR---------------------------

fetch("../navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    })
    .catch(error => console.error("Error loading navbar:", error));



//---------------------GALLERIJ------------------------





/*/-----------------------Upload script-------------------------

 // Get the necessary elements
 const imageUpload = document.getElementById('imageUpload');
 const imageGrid = document.getElementById('imageGrid');
 const modal = document.getElementById('modal');
 const modalImage = document.getElementById('modalImage');
 const closeModal = document.getElementById('closeModal');

 // Function to display images in the grid
 function displayImages(images) {
     imageGrid.innerHTML = ''; // Clear the grid first
     images.forEach((imageDataUrl, index) => {
         const img = document.createElement('img');
         img.src = imageDataUrl;
         img.alt = 'Uploaded Image';
         img.setAttribute('data-index', index);

         // Add a click event listener to enlarge the image
         img.addEventListener('click', function() {
             modal.style.display = 'flex';
             modalImage.src = imageDataUrl;
         });

         // Add the image to the grid
         imageGrid.appendChild(img);
     });
 }

 // Save images to localStorage
 function saveImages(images) {
     localStorage.setItem('uploadedImages', JSON.stringify(images));
 }

 // Load images from localStorage
 function loadImages() {
     const storedImages = localStorage.getItem('uploadedImages');
     return storedImages ? JSON.parse(storedImages) : [];
 }

 // Initialize with images from localStorage
 document.addEventListener('DOMContentLoaded', function() {
     const images = loadImages();
     displayImages(images);
 });

 // Handle image upload
 imageUpload.addEventListener('change', function() {
     const files = Array.from(imageUpload.files); // Get the selected files
     const images = loadImages(); // Load existing images from localStorage

     // Loop through the selected files and add them to the images array
     files.forEach((file) => {
         const reader = new FileReader();
         reader.onload = function(e) {
             const imageDataUrl = e.target.result;
             images.push(imageDataUrl); // Add new image to the array
             displayImages(images); // Re-render the image grid
             saveImages(images); // Save updated images array to localStorage
         };
         reader.readAsDataURL(file); // Read the file as Data URL
     });
 });

 // Handle closing the modal
 closeModal.addEventListener('click', function() {
     modal.style.display = 'none';
 });

 // Close modal when clicking outside the image
 modal.addEventListener('click', function(e) {
     if (e.target === modal) {
         modal.style.display = 'none';
     }
 });

 // Close modal with Esc key
 document.addEventListener('keydown', function(e) {
     if (e.key === 'Escape' || e.key === 'Esc') {  // Check for 'Esc' or 'Escape'
         modal.style.display = 'none';
     }
 });

 // Navigate to the next image 
 next.addEventListener('click', function () { currentIndex = (currentIndex + 1) % images.length; modalImage.src = images[currentIndex]; }); 
 // Navigate to the previous image 
 prev.addEventListener('click', function () { currentIndex = (currentIndex - 1 + images.length) % images.length; modalImage.src = images[currentIndex]; });
*/