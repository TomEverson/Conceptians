<script>

import axios from "axios"
import z from 'zxcvbn'

let password = ''
let json = {}

async function onclick(e){
  e.preventDefault()
  let data = "";
  const formData = new FormData(e.target);
  json = Object.fromEntries(formData.entries())
  let email = json.email
  await axios.post(`${import.meta.env.BACKEND}/verification`, formData , {headers: {'Accept': "x-www-form-urlencoded"}})
    .then(response =>(
      data = response.data
    )
    )
    .catch(error =>(
      console.log(error)
    ));

    if (data == "Confirm"){
      sessionStorage.setItem("email", email)
      window.location.href = "../verify"
    }
}


$: secure = z(password).score > 3


</script>

<main class="flex flex-row w-[100vw] h-[100vh]">

<div class="sign-in w-[50%] h-[100%] flex flex-col justify-center items-center">
  <div class="flex flex-col justify-evenly h-[100%]">

  <img src="img/C.png" alt="login" class="w-[150px] h-auto">
  <div>
  <h1 class="font-black leading-10" style="font-family: 'Noto Sans'; font-size: 42px;">Welcome to Conceptians!</h1>
  <p class="mt-4 text-sm" style="font-family: 'Mulish';">Please enter your details.</p>
</div>

  <form class="flex flex-col justify-center w-[400px] text-left" on:submit={onclick} method="post">
  <label for="name" class="font-black text-lg">Name:</label>
  <input class="border border-black rounded-xl" name="name" type="text" placeholder="Enter Your Name">
  <label for="email" class="font-black text-lg">Email:</label>
  <input class="border border-black rounded-xl" name="email" type="email" placeholder="Enter Your Email">
  <label for="password" class="font-black text-lg">Password:</label>
  <p style={secure?'display:none':'color:red'}>{secure ? 'Strong' : 'Weak'} password</p>
  <input class="border border-black rounded-xl" name="password" type="password" placeholder="Password" bind:value={password}>
  <button disabled={!secure} type="submit" class="submit border border-black rounded-xl text-2xl font-normal leading-10 w-[400px] h-[59px] flex flex-row items-center justify-center bg-gray-400 disabled:bg-red-400" >
  Sign-Up
  </button>
  </form>
  <p>Already have an account? <a href="../login" style="color: #5A4FF3;">Log-In</a></p>
  </div>
</div>



<div class="logo w-[50%] h-[100%] flex items-center justify-center">
    <img src="img/login.png" alt="login">
</div>


</main>

<style>


input{
  margin: 0.5rem 0rem;
  padding-left: 1rem;
  width: 397px;
  height: 51px;
}




.submit , label{
  font-family: 'Mulish';
}

.logo{
    background-color: #496076;
}



</style>