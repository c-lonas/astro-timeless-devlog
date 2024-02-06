
function renderPosts(posts) {
    const postsList = document.getElementById('posts-list');
    postsList.innerHTML = '';
    posts.forEach(post => {
        const anchor = document.createElement('a');
        anchor.href = post.url;

        const listItem = document.createElement('li');
        listItem.className = 'fade-in group pl-4 pb-4'; 

        const paragraph = document.createElement('p');
        paragraph.className = "transition-transform ease-in-out duration-300 group-hover:translate-x-[-5px] group-hover:text-cyan-600 group-hover:text-glow-sm";
        paragraph.textContent = post.title;

        listItem.appendChild(paragraph);
        anchor.appendChild(listItem);
        postsList.appendChild(anchor);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const postsList = document.getElementById('posts-list');
    const postsData = JSON.parse(postsList.dataset.posts);

    renderPosts(postsData);

    // Listen for category from Filter component
    document.addEventListener('categoryChanged', (event) => {
    const selectedCategory = event.detail;
    const postsData = JSON.parse(document.getElementById('posts-list').dataset.posts);
    const postsList = document.getElementById('posts-list');

    const filteredPosts = selectedCategory === 'all'
        ? postsData
        : postsData.filter(post => post.category.includes(selectedCategory.toLowerCase()));

    renderPosts(filteredPosts);
    });
    
    // Initial filter for 'All' selected
    document.dispatchEvent(new CustomEvent('categoryChange', { detail: '' }));
});


