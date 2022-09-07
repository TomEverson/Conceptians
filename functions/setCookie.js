const axios = require('axios')
const cookie = require('cookie')

let info = {};

exports.handler = async function (event) {
    let json = JSON.parse(event.body)
    await axios.post(`https://conceptians.fly.dev/login`, json, {withCredentials: true})
    .then(response => (
      info = response.data
    ))

    if (info.status == "Success"){
        jwt_token = info.token
      Cookie = cookie.serialize("token", info.token, {
        secure: true,
        httpOnly: true,
        path: '/',
        maxAge: 604800,
      })
    }

    return {
      statusCode: 200,
      headers: {
        'Set-Cookie': Cookie,
        'Cache-Control': 'no-cache',
        'Content-Type': 'text/html',
      },
      body: JSON.stringify({ status: "Success", token: jwt_token }),
      
    };
};