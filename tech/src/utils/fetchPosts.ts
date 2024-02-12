import { getCollection } from "astro:content";

export async function fetchPosts() {
    const allPosts = await getCollection("posts");
    return allPosts;
}