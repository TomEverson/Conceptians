export async function getUser(req) {
    const request = await fetch(`${import.meta.env.BACKEND}/users/${req}`);
    const response = await request.json()
    return response
 }