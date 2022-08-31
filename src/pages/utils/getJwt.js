import jwt_decode from "jwt-decode";

export async function getJwt(req) {
    const request = await req.substring(13)
    const decoded = await jwt_decode(request);
    return decoded
 }