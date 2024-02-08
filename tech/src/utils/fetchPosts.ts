export async function fetchPosts() {
    const allPosts = await Astro.glob('../pages/posts/*.md');
    // Process posts if necessary
    return allPosts;
}