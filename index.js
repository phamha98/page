// Sample data
const data = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Bob Brown' }
];

// Function to render search results
function renderResults(results) {
    const resultList = document.getElementById('results');
    resultList.innerHTML = '';

    if (results.length === 0) {
        resultList.innerHTML = '<li>No results found</li>';
        return;
    }

    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result.name;
        resultList.appendChild(li);
    });
}

// Function to handle search
function handleSearch(event) {
    const searchText = event.target.value.toLowerCase();
    const filteredData = data.filter(item => item.name.toLowerCase().includes(searchText));
    renderResults(filteredData);
}

// Attach event listener to search input
document.getElementById('searchInput').addEventListener('input', handleSearch);
