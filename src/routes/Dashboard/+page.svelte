<script>

      
    let todolist = ["Make a 3D model"];
    let currTodo=''
    error=false

    function addTodo(){
        error=false;
        if (!currTodo){
            error=true;
        }
        todolist.push(currTodo);

    }


</script>

<div class="mainContainer">
    <div class='headerContainer'>
        <h1>ToDo List</h1>
        <button><i class="fa-regular fa-floppy-disk"></i><p>Save</p></button>
    </div>
    
    <main>
        {#each todolist as todo, index}
        <div class="todo">
            {index + 1}. {todo}
        </div>
        {/each}

    </main>

    <div class={"enterTodo" + "errorBorder"}>
        <input bind:value={currTodo} type="text" placeholder="Enter todo"/>
        <button>ADD</button>
    </div>

</div>

<style>
    .mainContainer{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        gap: 24px;
        padding: 24px;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;


    }
    .headerContainer{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .headerContainer button{
        background: #003c5b;
        color:white ;
        padding: 10px 18px;
        border: none;
        border-radius: 5px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
       

    }
    .headerContainer button i {
        font-size: 1.1rem;
    }
    .headerContainer button:hover{
        opacity: 0.7;
    }

    main{
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1;
    }
    
    .enterTodo{
        display: flex;
        align-items: stretch;
        border: 1px solid aqua;
        overflow: hidden;
        border-radius: 5px;

    }
    .errorBorder{
        border-color: coral !important;
    }
    .enterTodo input{
        background: transparent;
        border: none;
        padding: 14px;
        color: white;
        flex: 1;



    }
    .enterTodo input:focus{
        outline: none;
    }
    .enterTodo button{
        padding: 0 20px;
        background: #003c5b;
        border: none;
        color:cyan;
        font-weight: 600;
        cursor: pointer;

    }
    .enterTodo button:hover{
        background: transparent;
    }

</style>