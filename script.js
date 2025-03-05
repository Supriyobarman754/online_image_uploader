document.addEventListener("DOMContentLoaded", function () {
    const imageInput = document.getElementById("imageInput");
    const previewContainer = document.getElementById("previewContainer");
    const clearStorage = document.getElementById("clearStorage");

    // Retrieve saved images from localStorage and display them
    if (localStorage.getItem("savedImages")) {
        const savedImages = JSON.parse(localStorage.getItem("savedImages"));
        savedImages.forEach(imageData => {
            displayImage(imageData);
        });
    }

    // Handle image upload
    imageInput.addEventListener("change", function (event) {
        const files = event.target.files;

        if (files) {
            const savedImages = JSON.parse(localStorage.getItem("savedImages")) || [];

            Array.from(files).forEach(file => {
                const reader = new FileReader();

                reader.onload = function (e) {
                    const imageData = e.target.result;
                    savedImages.push(imageData); // Add new image to saved images array

                    // Store all images back to localStorage
                    localStorage.setItem("savedImages", JSON.stringify(savedImages));

                    // Display the new image
                    displayImage(imageData);
                };

                reader.readAsDataURL(file);
            });
        }
    });

    // Function to display image in the preview container
    function displayImage(imageData) {
        const imgElement = document.createElement('img');
        imgElement.src = imageData;
        imgElement.style.maxWidth = "200px";  // Adjust the size as needed
        imgElement.style.margin = "10px";
        imgElement.style.borderRadius = "8px";
        previewContainer.appendChild(imgElement);
    }

    // Handle clear storage
    clearStorage.addEventListener("click", function () {
        localStorage.removeItem("savedImages");
        previewContainer.innerHTML = '';  // Clear all images from the preview
    });
});
