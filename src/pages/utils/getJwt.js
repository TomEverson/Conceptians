import jwt_decode from "jwt-decode";

export async function getJwt(req) {
    const decoded = await jwt_decode(req);
    return decoded
 }