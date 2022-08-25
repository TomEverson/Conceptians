export async function getArticle(title) {
    const request = await fetch(`https://qc68z7.deta.dev/blog/${title}`);
    const response = await request.json()
    return response
 }