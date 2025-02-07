//This component is used to add a task to the Tasks state of the app component. It takes the "tasks" variable and "setTasks" method as input and returns the div with input bar and a add button.

import { useEffect, useRef, useState } from "react"
import Modal from "./Modal";

export default function AddTask({ date, tasks, setTasks }) {
    const [modal, setModal] = useState(false);    //To mount/umount modal component.
    return (
        <>
            {!modal && <button className="btn btn-success my-3" onClick={() => setModal(true)} >Add Task</button>}

            {modal && <Modal date={ date } tasks={ tasks } setTasks={ setTasks } setModal={ setModal }/>}
        </>
    )
}