
<script>
  import { authHandlers } from "./store/store";

let email='';
let password='';
let ConfirmPassword='';
let error=false;
let register= false;
let authenticating=false;

async function handleAuthenticate(){
{
    if (authenticating){
        return;
    }

    authenticating=true;
    if (!email || !password ||(register && !ConfirmPassword)){
        error=true
        return;
    }

    try{
        if (!register){
        await authHandlers.login(email,password)
    }
    else{
        await authHandlers.signup(email,password);
    }

    }catch(err){
        console.log('there was an Auth error',err)
        error=true;
    }

}
}
 
function handleRegister()
{
    register= !register;
}



</script>



<div class="authContainer" >
    <form>
        <h1>{register?"Register":"Login"}</h1>
        {#if error}
        <p class="error">The information entered is not correct</p>
        {/if}


        <label>

            <p class={email ? 'above':'centre'}>Email</p>
            <input bind:value={email} type="email" placeholder="email" />
        </label>
        <label>
            <p class={password ? 'above':'centre'}>Password</p>
            <input bind:value={password} type="password" placeholder="password"/>
        </label>
        {#if register}
        <label>
            <p class={ConfirmPassword ? 'above':'centre'}>Confirm Password</p>
            <input bind:value={ConfirmPassword} type="password" placeholder="Confirm Password"/>
        </label>
        {/if}

        <button on:click={handleAuthenticate} type="button" class="submitBtn">
            {#if authenticating}
            <i class="fa-solid fa-spinner spin"/>
            {:else}
            Submit
            {/if}
        </button>
    </form>
    <div class="options">
        <p> Or</p>
        {#if register}
        <div>
            <p>Already have an account?</p>
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <p on:click={handleRegister} on:keydown={()=>{}}>Login</p>
        </div>
        {:else}
        <div>
            <p>Don't have an account?</p>
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <p on:click={handleRegister} on:keydown={()=>{}}>Register</p>
        </div>

        {/if}
    </div>

</div>

<style>
    .authContainer
     {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        padding: 25px;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 15px;

    }
    form,.options{
        width: 400px;
        max-width: 100%;
        margin: 0 auto;


    }
    form input{
        width: 100%;

    }
    h1{
        text-align: center;
        font-size: 3rem;
    }
    form label{
        position: relative;
        border: 1px solid navy;
        border-radius: 5px;

    } 
    form input{
        border: none;
        background: transparent;
        color: white;
        padding: 14px;
    }
    form input:focus{
        border: none;
        outline: none;
        padding: 18px 18px;
    }
    form label:focus-within {
        border-color: blue;
        border-width: 2px;
         

    }
   form button{
    background:navy ;
    color: white;
    border: none;
    padding: 15px 0;
    border-radius: 5px;
    font-size: 1.3rem;
    display: grid;
    place-items: center;

    }
    form button:hover{
        background: blue;

    }

    .above,.centre{
        position: absolute;
        transform:translateY(-50%) ;
        pointer-events: none;
        border-radius: 4px;
        padding: 0 6px;
        font-size: 0.8rem; 

    }
    .above{
        top:0;
        left: 24px;
        background: navy;
        border:1px solid blue;
        font-size:0.7rem;

    }
    .centre{
        top:50%;
        left:6px;
        border: 1px solid transparent;
        opacity: 0;
    

    }
    .error{
        color: coral;
        font-size:0.9rem ;
        text-align: center;
    }
    .options{
        padding: 15px 0;
        overflow: hidden;
        font-size: 0.9rem;
        display: flex;
        flex-direction: column;
        gap: 4px;
        /*width: 100%;*/
    }
    .options > p {
        position: relative;
        text-align: center;
        width: fit-content;
        margin: 0 auto;
        padding: 0 8px;

    }
    .options >p::after,.options>p::before{
        position: absolute;
        content:'' ;
        top: 50%;
        
        transform: translateY(-50%);
        width: 100vw;
        height: 1.5px;
        background: white;

    }
    .options > p::after{
        right: 100%;
    }
    .options > p::before{
        left:100%;
    }

    .options div{
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
    }
    .options div p:last-of-type{
        color: cyan;
        cursor: pointer;
    }
    .spin{
        animation: spin 2s infinite;
    }
    @keyframes spin{
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }



</style>
