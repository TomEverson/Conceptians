<script>
import {onMount} from 'svelte'
import axios from 'axios'

let email = ""

onMount(() => {
  email = sessionStorage.getItem("email");
  if (!email){
    window.location.href = "../create-account"
}
})

async function onclick(e){
  e.preventDefault()
  let data = "";
  const formData = new FormData(e.target);
  await axios.post(`https://conceptians.fly.dev/verification/verify`, formData , {headers: {'Accept': "x-www-form-urlencoded"}})
    .then(response =>(
      data = response.data
    )
    )
    .catch(error =>(
      console.log(error)
    ));

    if (data == "Success"){
      window.location.href = "../success"
    }
}


</script>

<main class="flex flex-row w-[100vw] h-[100vh]">

    <div class="sign-in w-[50%] h-[100%] flex flex-col justify-start items-center">
      <div class="flex flex-col justify-center h-[100%]">
        <p>Email has been sent!!</p>
      <form class="flex flex-col justify-evenly w-[400px] text-left" method="post" on:submit={onclick}>
      <label for="email" class="font-black text-lg">Email:</label>
      <input class="border border-black rounded-xl" name="email" id="email" type="text" placeholder="Email" bind:value={email}>
      <label for="code" class="font-black text-lg">Please Enter Your Verification Code:</label>
      <input class="border border-black rounded-xl" name="code" id="code" type="text" placeholder="Verification">
      <button type="submit" class="submit border border-black rounded-xl text-2xl font-normal leading-10 w-[400px] h-[59px] flex flex-row items-center justify-center bg-gray-400 disabled:bg-red-400" >
        Verify
      </button>
      </form>
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