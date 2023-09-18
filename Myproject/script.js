// Function to fetch and display Air Animals
function fetchAirAnimals() {
    fetch('/airanimals')
        .then(response => response.json())
        .then(data => {
            const airAnimalsDiv = document.getElementById('airAnimals');
            airAnimalsDiv.innerHTML = '';

            data.forEach(animal => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <p>ID: ${animal.ID}</p>
                    <p>Name: ${animal.Name}</p>
                    <p>Data: ${animal.Data}</p>
                    <img src="${animal.Pic}" alt="${animal.Name}" /> <!-- แสดงรูปภาพ -->
                `;
                airAnimalsDiv.appendChild(card);
            });
        })
        .catch(error => {
            console.error(error);
            const airAnimalsDiv = document.getElementById('airAnimals');
            airAnimalsDiv.innerHTML = '<p class="error">Error loading Air Animals data.</p>';
        });
}

// Function to fetch and display Land Animals
function fetchLandAnimals() {
    fetch('/landanimals')
        .then(response => response.json())
        .then(data => {
            const landAnimalsDiv = document.getElementById('landAnimals');
            landAnimalsDiv.innerHTML = '';

            data.forEach(animal => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <p>ID: ${animal.ID}</p>
                    <p>Name: ${animal.Name}</p>
                    <p>Data: ${animal.Data}</p>
                    <img src="${animal.Pic}" alt="${animal.Name}" /> <!-- แสดงรูปภาพ -->
                `;
                landAnimalsDiv.appendChild(card);
            });
        })
        .catch(error => {
            console.error(error);
            const landAnimalsDiv = document.getElementById('landAnimals');
            landAnimalsDiv.innerHTML = '<p class="error">Error loading Land Animals data.</p>';
        });
}

// Function to fetch and display Water Animals
function fetchWaterAnimals() {
    fetch('/wateranimals')
        .then(response => response.json())
        .then(data => {
            const waterAnimalsDiv = document.getElementById('waterAnimals');
            waterAnimalsDiv.innerHTML = '';

            data.forEach(animal => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <p>ID: ${animal.ID}</p>
                    <p>Name: ${animal.Name}</p>
                    <p>Data: ${animal.Data}</p>
                    <img src="${animal.Pic}" alt="${animal.Name}" /> <!-- แสดงรูปภาพ -->
                `;
                waterAnimalsDiv.appendChild(card);
            });
        })
        .catch(error => {
            console.error(error);
            const waterAnimalsDiv = document.getElementById('waterAnimals');
            waterAnimalsDiv.innerHTML = '<p class="error">Error loading Water Animals data.</p>';
        });
}

// Fetch and display animal data when the page loads
fetchAirAnimals();
fetchLandAnimals();
fetchWaterAnimals();
