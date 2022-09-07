export async function getArticle(title) {
    const request = await fetch(`https://conceptians.fly.dev/blog/${title}`);
    const response = await request.json()
    return response
 }