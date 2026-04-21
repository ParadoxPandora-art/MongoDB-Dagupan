const fetchBtn = document.getElementById('fetch-btn');
const dataContainer = document.getElementById('data-container');
const loadingIndicator = document.getElementById('loading');

fetchBtn.addEventListener('click', () => {
    fetchUserData();
});

async function fetchUserData() {
    loadingIndicator.classList.remove('hidden');
    dataContainer.innerHTML = ''; 

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json();
        displayData(users);

    } catch (error) {
        dataContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    } finally {
        loadingIndicator.classList.add('hidden');
    }
}

function displayData(users) {
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        
        userCard.innerHTML = `
            <strong>${user.name}</strong><br>
            <small>${user.email}</small>
        `;
        
        dataContainer.appendChild(userCard);
    });
}