<script>  
    let todolist = ["Thank God"];
    let currTodo=''
    let error=false

    function addTodo(){
        error=false;
        if (!currTodo){
            error=true;
        }
        todolist=[...todolist, currTodo];
        currTodo="";

    }
    function editTodo(index){
        let newTodolist =todolist.filter((val,i)=>{
            return i !== index;
        });
        currTodo=todolist[index]
        todolist=newTodolist

    }
    function removeTodo(index){
        let newTodolist =todolist.filter((val,i)=>{
            console.log(i.index,i !==index);
            return i !== index;
        });
        
        todolist=newTodolist


    }
</script>

<div class="mainContainer">
    <div class='headerContainer'>
        <h1>ToDo List</h1>
        <div class="headerBtns">
        <button><i class="fa-regular fa-floppy-disk"></i><p>Save</p></button>
        <button><i class="fa-solid fa-right-from-bracket"></i><p>Logout</p></button>
        </div>
    </div>
    
    <main>
        {#if todolist.length===0}
        <p>
            You Have nothing in your ToDo List!
        </p>
        {/if}
        {#each todolist as todo, index}
        <div class="todo">
            <p>
              {index + 1}. {todo}
            </p>
            <div class="actions">

                 <i on:click={()=>{editTodo(index)}} on:keydown={()=>{}} class="fa-regular fa-pen-to-square"/>
                 <i on:click={()=>{removeTodo(index)}} on:keydown={()=>{}} class="fa-regular fa-trash-can"></i>

            </div>
        </div>
        {/each}

    </main>

    <div class={"enterTodo " +(error ? 'errorBorder' : "")} >
        <input bind:value={currTodo} type="text" placeholder="Enter todo"/>
        <button on:click={addTodo}>ADD</button>
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
    .headerBtns{
        display: flex;
        align-items: center;
        gap: 14px;
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
    .todo{
        border-left: 1px solid cyan;
        padding: 8px 14px;
        align-items: center;
        justify-content: space-between;
        display: flex;
    }
    .actions{
        display: flex;
        align-items: center;
        gap: 14px;
        font-size: 1.3rem;
    }
    .actions i{
        cursor: pointer;
    }
    .actions i:hover{
        color: coral;
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