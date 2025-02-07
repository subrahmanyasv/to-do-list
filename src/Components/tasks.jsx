import "./CSS/totalStyles.css"


//Component to render individual tasks.
export default function Task({ task , setTasks}){

    //Method to handle Task complete functionality.
    function CompleteTask(){
        //IT sets the task with previous task by filtering out the task with same id and storing it in another variable named updatedTasks. Then its returned by deconstructing the updatedTask with the current task's status being changed to completed.
        setTasks(prevTasks =>{
            console.log(prevTasks)
            const updatedTasks = prevTasks.filter((t)=> t.id !== task.id)
            // console.log("Updated task: ")
            // console.log(updatedTasks)
            return [...updatedTasks , {...task , status: "completed"}]
        })
    }


    //Method to handle delete functionality. It sets the previous task to the tasks state by filtering out the current task.
    function DeleteTask(){
        setTasks(prevTasks => ( prevTasks.filter((t)=> (t.id !== task.id))))
    }

    return(
        <div className="d-flex flex-md-row flex-column justify-content-between align-items-center py-2 px-lg-4">
            <h1 className="fs-4" style={{ textDecoration: task.status === "completed" ? "line-through" : "none" }}>{task.content}</h1>
            <div className="w-75 d-flex justify-content-end align-items-center">
            <button className="mx-1 btn btn-success" onClick={ CompleteTask } disabled={task.status === "completed" ? true : false}>Complete</button>
            <button className="mx-1 btn btn-danger" onClick={ DeleteTask }>Delete</button>
            </div>
        </div>
    )
}