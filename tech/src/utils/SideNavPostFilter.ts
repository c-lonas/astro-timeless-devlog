interface Post {
    url: string;
    title: string;
    category: string[]; 
}


function renderPosts(posts: Post[]) {
    const postsList = document.getElementById('posts-list');

    if (!postsList) return;

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
    if (!postsList) return;

    const postsData: Post[] = JSON.parse(postsList.dataset.posts || '[]');

    renderPosts(postsData);

    // Listen for category from Filter component
    document.addEventListener('categoryChanged', (event) => {

        // Wonky workaround
        const customEvent = event as CustomEvent<any>;
        const selectedCategory = customEvent.detail;
        
        const postsList = document.getElementById('posts-list');
        if (!postsList) return; // Guard for null
        const postsData: Post[] = JSON.parse(postsList.dataset.posts || '[]');

        const filteredPosts = selectedCategory === 'all'
            ? postsData
            : postsData.filter(post => post.category.includes(selectedCategory.toLowerCase()));

        renderPosts(filteredPosts);
    });

    // Initial filter for 'All' selected
    document.dispatchEvent(new CustomEvent('categoryChanged', { detail: 'all' }));
});





