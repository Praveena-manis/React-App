let tasks=[];
async function fetchTasks(){
    console.log("Fetching Task");
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(tasks);
        },1000)
    })
    
}
async function addTask(task){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            tasks.push(task);
            console.log(`Task ${task} Added`);
            resolve(task);
            
        },5000)
    });
}
async function addTodo(){
    //currently empty
    let currenttask= await fetchTasks();
    console.log("Current Task:",currenttask);
    //add some task
    await addTask("hi");
    await addTask('Homework');
    await addTask('Learn js');
    //fetch tasks again
    currenttask=await fetchTasks();
    console.log('current task',currenttask)
}
addTodo();