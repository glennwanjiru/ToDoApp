
<script>
let email='';
let password='';
let ConfirmPassword='';


</script>



<div class="authContainer" >
    <form>
        <h1>Login</h1>


        <label>

            <p class={email ? 'above':'centre'}>Email</p>



            <input bind:value={email} type="email" placeholder="email" />
        </label>
        <label>
            <p class={password ? 'above':'centre'}>Password</p>
            <input bind:value={password} type="password" placeholder="password"/>
        </label>
        <label>
            <p class={ConfirmPassword ? 'above':'centre'}>Confirm Password</p>
            <input bind:value={ConfirmPassword} type="password" placeholder="Confirm Password"/>
        </label>
        <button type="button">Submit</button>
    </form>

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
   form button{
    background:navy ;
    color: white;
    border: none;
    padding: 15px 0;
    border-radius: 5px;
    font-size: 1.3rem;

    }
    form button:hover{
        background: blue;

    }


</style>
