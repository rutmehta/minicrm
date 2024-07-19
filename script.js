// Sample data - in a real app, this would come from a backend
let posts = [
    {
        id: 1,
        title: "How Jainism Can Inpsire EMS Providers To Be Their Very Best",
        link: "https://bit.ly/yja-jainism-ems",
        description: "Rihi Jain's take on being a 'good' jain vs 'good EMT'",
        image: "https://yja.github.io/new_yja/assets/images/community/rihijainym2023.png"
    }
];

// Function to display posts
function displayPosts() {
    const container = document.getElementById('content-container') || document.getElementById('posts-list');
    container.innerHTML = ''; // Clear existing content

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <img src="${post.image}" alt="${post.title}">
            <p>${post.description}</p>
            <a href="${post.link}" target="_blank">Read More</a>
            ${container.id === 'posts-list' ? `<button onclick="deletePost(${post.id})">Delete</button>` : ''}
        `;
        container.appendChild(postElement);
    });
}

// Function to add a new post
function addPost(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const link = document.getElementById('link').value;
    const description = document.getElementById('description').value;
    const imageInput = document.getElementById('image');
    
    const newPost = {
        id: posts.length + 1,
        title,
        link,
        description,
        image: imageInput.files.length > 0 ? URL.createObjectURL(imageInput.files[0]) : ''
    };

    posts.push(newPost);
    displayPosts();
    event.target.reset();
}

// Function to delete a post
function deletePost(id) {
    posts = posts.filter(post => post.id !== id);
    displayPosts();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    displayPosts();
    const form = document.getElementById('post-form');
    if (form) {
        form.addEventListener('submit', addPost);
    }
});