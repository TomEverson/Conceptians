<script>

import axios from "axios"
let json = {}

async function onclick(e){
  let info = {};
  const formData = new FormData(e.target);
  json = Object.fromEntries(formData.entries())
  await axios.post('http://127.0.0.1:8000/login', json ,{withCredentials: true} )
    .then(response =>(
      info = response.data
    )
    )
  
    if (info.status == "Success"){
      localStorage.setItem('token', info.token)
    }
}

</script>

<main class="flex flex-row w-[100vw] h-[100vh]">

<div class="sign-in w-[50%] h-[100%] flex flex-col justify-center items-center">
  <div class="flex flex-col justify-evenly h-[100%]">

  <img src="img/C.png" alt="login" class="w-[150px] h-auto">
  <div>
  <h1 class="font-black leading-10" style="font-family: 'Noto Sans'; font-size: 42px;">Welcome Back!</h1>
  <p class="mt-4 text-sm" style="font-family: 'Mulish';">Please enter your details.</p>
</div>

  <form class="flex flex-col justify-center w-[400px] text-left" on:submit|preventDefault={onclick} method="post">
  <label for="email" class="font-black text-lg">Email:</label>
  <input class="border border-black rounded-xl" name="email" placeholder="Enter Your Email">
  <label for="password" class="font-black text-lg">Password:</label>
  <input class="border border-black rounded-xl" name="password" type="password" placeholder="Password">
  <button type="submit" class="submit border border-black rounded-xl text-2xl font-normal leading-10 w-[400px] h-[59px] flex flex-row items-center justify-center bg-gray-400 disabled:bg-red-400">
  Log-In
  </button>
  </form>
  <p>Don't have an account?<a href="../create-account" style="color: #5A4FF3;"> Sign-Up</a></p>
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