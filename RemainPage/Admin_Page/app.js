
let userDataFromDatabase = [];

fetch('http://localhost:5000/api/orders')
    .then(response => response.json())
    .then(data => {
        const formattedData = data.map(item => {
            const name = item.Username;
            const items = [];
            // Assuming the mapping between items and the corresponding quantity
            // Adjust this mapping according to your specific requirements
            if (item.AlooParatha > 0) {
                items.push(`AlooParatha x ${item.AlooParatha}`);
            }
            if (item.Maggi > 0) {
                items.push(`Maggi x ${item.Maggi}`);
            }
            if (item.Chowmine > 0) {
                items.push(`Chowmine x ${item.Chowmine}`);
            }
            if (item.Vegroll > 0) {
                items.push(`Vegroll x ${item.Vegroll}`);
            }
            if (item.Tea > 0) {
                items.push(`Tea x ${item.Tea}`);
            }
if (item.Coffee > 0) {
                items.push(`Coffee x ${item.Coffee}`);
}
            if (item.Cone > 0) {
                items.push(`Cone x ${item.Cone}`);
            }
            if (item.icecreambar > 0) {
                items.push(`icecreambar x ${item.icecreambar}`);
            }
            userDataFromDatabase.push({ name, items });
        });

        createUserBoxes(userDataFromDatabase);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

function createUserBoxes(userData) {
    const userDataContainer = document.getElementById('userData');
    userDataContainer.innerHTML = '';

    userData.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');

        const nameParagraph = document.createElement('p');
        nameParagraph.innerHTML = `<strong>Name:</strong> ${user.name}`;

        const itemsList = document.createElement('ul');
        user.items.forEach(item => {
            const itemListItem = document.createElement('li');
            itemListItem.textContent = item;
            itemsList.appendChild(itemListItem);
        });

        userDiv.appendChild(nameParagraph);
        userDiv.appendChild(itemsList);

        userDataContainer.appendChild(userDiv);
    });
}
