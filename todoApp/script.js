const planBoard = document.querySelector('.plan-board')
const addPlan = document.querySelector('.add-plan');
const plans = document.querySelector('.plans');

// const xMark = document.querySelector('#xmark')
// const xMark = document.querySelector('span')
const input = document.querySelector('input')
const addBtn = document.querySelector('button')



addBtn.addEventListener('click', ()=>{
    if(input.value === ""){
        alert("Enter your tasks")
    } else{
        let plan = document.createElement('p');
        plan.innerHTML = input.value;
        let xmark = document.createElement('span');
        xmark.className = "xmark"
        xmark.innerHTML = '\u00d7'
        plan.append(xmark)
        
        plans.append(plan)
        input.value = ""
        storeData()

        // plan.addEventListener('click', ()=>{
        //         plan.style.textDecoration = "line-through";
        //         plan.style.color = "gray"
        //         console.log('worked');
        //     })
        // plan.addEventListener('dblclick', ()=>{
        //         plan.style.textDecoration = "none";
        //         plan.style.color = "rgb(2, 2, 87)"
        //         console.log('worked');
        //     })  

        // xmark.addEventListener('clicked', (e)=>{;
        //     if(e.target.tagName === "SPAN"){
        //         e.target.parentElement.remove()
        //         console.log('worked');
        //     }
        //         // xmark.style.display = "block"
        //     })

    }
    
})
function pressToAdd(){
}

plans.addEventListener('click', (e)=>{
    console.log('works perfectly');
    if(e.target.tagName === "P"){
        e.target.classList.toggle( "done");
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
})
    
    function storeData(){
       localStorage.setItem("toDo", plans.innerHTML)
    }
    
    function getData(){
        plans.innerHTML = localStorage.getItem("toDo")
    }


getData()