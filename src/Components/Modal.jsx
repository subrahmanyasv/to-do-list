import { useEffect, useState } from "react";

export default function Modal({ date , tasks , setTasks , setModal }) {
    const [newTask, setNewTask] = useState({
        id: Date.now(), // Unique ID
        content: "", // Task description
        date: date, // Initial date set to prop
        status: "pending", // Default status
    });

    useEffect(()=>{
        //to get the date object to yyyy-mm-dd format.
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        setNewTask((prevTask)=>({...prevTask , date :`${year}-${month}-${day}`}))
    },[])

    //Fn to handle in input change of both date and content inputbox.
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };

    const handleAddTask = (e) => {
        e.preventDefault(); // Prevent form submission
        setTasks([...tasks, newTask]); // Add task to parent state
        setModal(false); // Close the modal
    };

    return (
        <div className="">
            <form onSubmit={handleAddTask}>
                <fieldset className="d-flex w-100 justify-content-center align-items-center flex-column my-2">
                    {/* Date Input */}
                    <div className="my-1 w-100">
                        <label htmlFor="date">Date:</label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            value={newTask.date}
                            onChange={handleInputChange}
                            required className="w-100 d-block"
                        />
                    </div>

                    {/* Content Input */}
                    <div className="my-1 w-100">
                        <label htmlFor="content">Task:</label>
                        <input
                            type="text"
                            name="content"
                            id="content"
                            value={newTask.content}
                            placeholder="Enter task"
                            onChange={handleInputChange}
                            required className="w-100 d-block"
                        />
                    </div>

                    {/* Add Button */}
                    <div>
                        <button type="submit" className="btn my-1 btn-success" >Add Task</button>
                        <button type="reset"  className="btn my-1 btn-danger" onClick={()=>setModal(false)}>Cancel</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )

}