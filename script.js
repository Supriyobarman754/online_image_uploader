document.getElementById('imageInput').addEventListener('change', handleImageUpload);
        document.getElementById('clearStorage').addEventListener('click', clearStorage);

        function handleImageUpload(event) {
            const files = event.target.files;
            const previewContainer = document.getElementById('previewContainer');

            // Clear previous previews
            previewContainer.innerHTML = '';

            Array.from(files).forEach(file => {
                const reader = new FileReader();

                reader.onload = function(e) {
                    const imgElement = document.createElement('img');
                    imgElement.src = e.target.result;

                    // Create a mosaic item div for each image
                    const mosaicItem = document.createElement('div');
                    mosaicItem.classList.add('mosaic-item');

                    // Randomly add a class for larger images to create the mosaic effect
                    const randomClass = getRandomMosaicClass();
                    mosaicItem.classList.add(randomClass);

                    mosaicItem.appendChild(imgElement);
                    previewContainer.appendChild(mosaicItem);
                }

                reader.readAsDataURL(file);
            });
        }

        function getRandomMosaicClass() {
            // Return a random class for mosaic size (normal, large, extra-large)
            const classes = ['large', 'extra-large', ''];
            return classes[Math.floor(Math.random() * classes.length)];
        }

        function clearStorage() {
            document.getElementById('previewContainer').innerHTML = '';
            document.getElementById('imageInput').value = '';
        }
