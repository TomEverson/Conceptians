<script>

import { signOut } from "@astro-auth/client";
    
    
</script>
    
    
<button on:click={() => {
    signOut("/");
  }}>
    Log Out
    
</button>
    
    
<style>

button{
    border: 1px solid #000000;
    width: 397px;
    height: 55px;
}

</style>