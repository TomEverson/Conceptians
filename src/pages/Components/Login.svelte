<script>

import { signIn } from "@astro-auth/client";


</script>

<main class="d-flex flex-row">

<div class="sign-in w-50 h-100 d-flex align-items-center justify-content-center">
<button on:click={() => {
    signIn({
      callbackURL: "/",
      provider: "google",
    });
  }}>
  <img src="img/google.png" alt="google">
    Sign In with Google

</button>
</div>

<div class="logo container d-flex align-items-center justify-content-center w-50 h-100">
    <img src="img/login.png" alt="login">
</div>


</main>

<style>

button{
    border: 1px solid #000000;
    width: 397px;
    height: 55px;
    border-radius: 10px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 163%;
}

main{
    width: 100vw;
    height: 100vh;
}

.logo{
    background-color: #496076;
}



</style>