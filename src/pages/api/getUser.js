export async function getUser(req) {
    const request = await fetch(`https://conceptians.fly.dev/users/${req}`);
    const response = await request.json()
    return response
 }