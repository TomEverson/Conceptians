export async function getUser(req) {
    const request = await fetch(`http://localhost:8000/users/${req}`);
    const response = await request.json()
    return response
 }