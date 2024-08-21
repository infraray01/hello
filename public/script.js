document.addEventListener("DOMContentLoaded", function() {
    const images = [
        { src: 'img/1.jpg', name: 'Custom Name 1', link1: 'https://example.com/1', link2: 'https://example.com/1a' },
        { src: 'img/2.jpg', name: 'Custom Name 2', link1: 'https://example.com/2', link2: 'https://example.com/2a' },
        { src: 'img/3.jpg', name: 'Custom Name 3', link1: 'https://example.com/3', link2: 'https://example.com/3a' },

        { src: 'img/1.jpg', name: 'Custom Name 1', link1: 'https://example.com/1', link2: 'https://example.com/1a' },
        { src: 'img/2.jpg', name: 'Custom Name 2', link1: 'https://example.com/2', link2: 'https://example.com/2a' },
        { src: 'img/3.jpg', name: 'Custom Name 3', link1: 'https://example.com/3', link2: 'https://example.com/3a' },

        
        // Add more images as needed
    ];

    const imagesContainer = document.getElementById("images-container");
    const loadMoreButton = document.getElementById("load-more");
    let currentImageIndex = 0;

    function loadImages(count) {
        for (let i = 0; i < count; i++) {
            if (currentImageIndex >= images.length) {
                loadMoreButton.style.display = 'none';
                break;
            }
            const imageItem = document.createElement("div");
            imageItem.className = "image-item";
            
            const imageUrl = images[currentImageIndex].src;
            const imageName = images[currentImageIndex].name;
            const imageLink1 = images[currentImageIndex].link1;
            const imageLink2 = images[currentImageIndex].link2;

            imageItem.innerHTML = `
                <img src="${imageUrl}" alt="${imageName}">
                <p>${imageName}</p>
                <a href="${imageLink1}" class="custom-link-button">Link 1</a>
                <a href="${imageLink2}" class="custom-link-button">Link 2</a>
            `;
            
            imagesContainer.appendChild(imageItem);
            currentImageIndex++;

            // Trigger the transition by adding the 'visible' class after appending the element
            setTimeout(() => {
                imageItem.classList.add('visible');
            }, 100); // Delay to ensure the item is added to the DOM
        }
    }

    loadMoreButton.addEventListener("click", function() {
        loadImages(6);
    });

    loadImages(6);
});
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value;

        if (!query) {
            return;
        }

        fetch(`/search?q=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(results => {
                searchResults.innerHTML = '';
                results.forEach(item => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'result-item';
                    resultItem.innerHTML = `
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    `;
                    searchResults.appendChild(resultItem);
                });
            });
    });
});

