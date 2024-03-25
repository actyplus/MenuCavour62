// script.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://script.google.com/macros/s/AKfycbxhenNXGT4JH3DrlVe7JJKvqu_Etg3wlLXJWsAfpKun/exec')
        .then(response => response.json())
        .then(data => {
            const menuContainer = document.getElementById('menu-container');
            data.forEach((menuItem) => {
                const itemElement = document.createElement('div');
                itemElement.className = 'menu-item';
                itemElement.innerHTML = `
                    <h3>${menuItem.name}</h3>
                    <p>${menuItem.description}</p>
                    <p>Prezzo: ${menuItem.price}</p>
                `;
                menuContainer.appendChild(itemElement);
            });
        })
        .catch(error => console.error('Error:', error));
});
