document.addEventListener("DOMContentLoaded", function () {
    const imageInput = document.getElementById("imageInput");
    const previewImage = document.getElementById("previewImage");
    const clearStorage = document.getElementById("clearStorage");

    if (localStorage.getItem("savedImage")) {
        previewImage.src = localStorage.getItem("savedImage");
        previewImage.style.display = "block";
    }

    imageInput.addEventListener("change", function (event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const imageData = e.target.result;
                previewImage.src = imageData;
                previewImage.style.display = "block";

                localStorage.setItem("savedImage", imageData);
            };

            reader.readAsDataURL(file);
        }
    });

    clearStorage.addEventListener("click", function () {
        localStorage.removeItem("savedImage");
        previewImage.src = "";
        previewImage.style.display = "none";
    });
});