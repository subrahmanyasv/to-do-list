import { useState , useRef , useEffect } from 'react'
import "./App.css";
import AddTask from './Components/addTask';
import TaskList from './Components/taskList';
import Calender from './Components/Calendar';
import Header from './Components/Header';

function App() {
  const[ tasks , setTasks ] = useState([]);     //To store all the tasks.
  const[ selectedDate , setSelectedDate ] = useState(new Date());     //To store selected date.
  const[ darkMode , setDarkMode ] = useState(false) //To store the value of current prefrence of dark mode
  const[ selectedTasks, setSelectedTasks] = useState([]) //To store the selected date's task.
  

  //This useEffect is used to store the tasks to the local storage of the client's system on each unmount and reload it to tasks state on each mount.
  useEffect(()=>{
    //To avoid the unnecessary pushing before pulling real data from localstorage, we check for length.
    if(tasks.length > 0){   
      localStorage.setItem("Tasks", JSON.stringify(tasks)); //On each task change, its pushed to localStorage.
    }
  },[tasks])


  //This useEffect is to filter out the tasks of the day to selectedTasks.
  useEffect(()=>{
        const year = selectedDate.getFullYear();  //Gets full year
        const month = String(selectedDate.getMonth() + 1).padStart( 2 , "0"); //Gets the month and pads.
        const day = String( selectedDate.getDate()).padStart( 2, "0");  //Gets the date and pads.
        let date = `${year}-${month}-${day}`; //Concatinates it to the required date format.
        let filteredTasks = tasks.filter(task => task.date === date);   //Filtering tasks.
        setSelectedTasks(filteredTasks);  //Setting the selectedTasks.
  },[selectedDate , tasks])   //It should happen for both situation when date changes, or tasks.

  //This is the initial effect hook to get the data from localstorage.
  useEffect(()=>{
    setTasks(JSON.parse(localStorage.getItem("Tasks"))||[])
    setSelectedDate(new Date());
  },[])


 return(
  <div className='container MainDiv lightMode'>
    <Header darkMode = { darkMode } setDarkMode={ setDarkMode }/>
    <div className='row w-100'>
      <div className='col-sm-6 col-lg-4 d-flex justify-content-center align-items-center flex-column'>
        <AddTask date={ selectedDate } tasks={ tasks } setTasks={ setTasks } />
        <Calender  selectedDate={ selectedDate } setSelectedDate={ setSelectedDate }/>
      </div>
      <div className='col-sm-6 col-lg-8 my-5 bg-light h-100 border rounded px-4 py-2'>
        <TaskList selectedTasks={ selectedTasks } setTasks = { setTasks } />  
      </div>
    </div>
  </div>
 )
}

export default App
