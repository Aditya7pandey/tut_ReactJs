import { useState } from "react";
import "./App.css";
import Task from "./components/Task";

function App() {
  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);

  const Add = () => {
    if (task.trim() === "") return;
    setTaskList([...taskList, task]);
    setTask("");
  };

  const deleteTask = (index) =>{
    const newList = [...taskList]
    newList.splice(index,1)
    setTaskList(newList)
  }

  const editTask = (index,newTask) =>{
    const newList = [...taskList]
    newList[index] = newTask
    setTaskList(newList)
  }

  return (
    <div className="h-150 w-full border flex justify-center p-10">
      <div className="border w-100">
        <h1 className="bg-green-400 m-5">To Do List</h1>
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          className="rounded border w-90 p-3  "
        />
        <button
          className="bg-black text-white m-1"
          onClick={() => {
            Add();
          }}
        >
          Add
        </button>

        <div className="mt-5">
          <label>Task Left: {taskList.length}</label>
          {taskList.map((t, index) => (
            <Task key={index} task={t}
            onDelete={()=>deleteTask(index)}
            onEdit={(newTask) => editTask(index,newTask)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
