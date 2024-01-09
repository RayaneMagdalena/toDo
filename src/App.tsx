// CSS
import "./global.css"
// Components
import { Header } from "./components/Header/Header"
import { Input } from "./components/Input/Input"
import { TaskSection } from "./components/TaskSection/TaskSection"
// Hooks
import { useState } from "react"

interface tasks {
  id: number
  text: string
  isCompleted: boolean
}


export function App() {
 const [tasks, setTasks] = useState<tasks[]>([])
 const [newTaskText, setNewTaskText] = useState('')

// Nova Tarefa
function handleCreateNewTask() {
  const id = Math.floor(Math.random() * 10000)

  const newTasks: tasks = {
      id,
      text: newTaskText,
      isCompleted: false
    };

  setTasks((state) => [...state, newTasks]);
  setNewTaskText('');

}

  return(
    <div>
      <Header />
      <Input 
      newTaskText={newTaskText}
      setNewTaskText={setNewTaskText}
      handleCreateNewTask={handleCreateNewTask} 
      />
      <TaskSection tasks={tasks}/>
    </div>
  )
}
