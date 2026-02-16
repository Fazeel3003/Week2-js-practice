// Using fetch with Promises (from Day 1)
fetch('https://jsonplaceholder.typicode.com/users/1')  // GET request to API
    .then(response => response.json())  // Convert response to JSON
    .then(data => console.log('Post Title:', data.title))  // Access data
    .catch(error => console.log('Error:', error));  // Handle errors

// Using Async/Await (cleaner)
async function fetchPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        console.log('Async Post Title:', data.title);
    } catch (error) {
        console.log('Async Error:', error);
    }
}

fetchPost();  // Call the async function