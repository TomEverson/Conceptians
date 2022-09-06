export async function getArticle(title) {
    const request = await fetch(`${import.meta.env.BACKEND}/blog/${title}`);
    const response = await request.json()
    return response
 }