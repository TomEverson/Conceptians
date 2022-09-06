const axios = require('axios')
const cookie = require('cookie')
require('dotenv').config()

let info = {};

exports.handler = async function (event) {
    let json = JSON.parse(event.body)
    await axios.post(`${process.env.BACKEND}/login`, json, {withCredentials: true})
    .then(response => (
      info = response.data
    ))

    if (info.status == "Success"){
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
      body: JSON.stringify({ message: "Success" }),
      
    };
  };