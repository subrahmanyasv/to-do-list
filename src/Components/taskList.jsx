import Task from "./tasks"

export default function TaskList({ selectedTasks , setTasks }){
    return(
        <div>
        {   
        //Checks for tasks length. If greater than 0 , then displays tasks.
            selectedTasks.length > 0 ?   
                selectedTasks.map(t=>
                    <Task key={t.id} task={t} setTasks={ setTasks } />
                ) : <h1>No tasks added for today</h1>
        }
        </div>
    )
}