// CSS
import "./global.css";
// Components
import { Header } from "./components/Header/Header";
import { Input } from "./components/Input/Input";
import { TaskSection } from "./components/TaskSection/TaskSection";
// Hooks
import { useState } from "react";

interface tasks {
  id: number;
  text: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<tasks[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  // Nova Tarefa
   function handleCreateNewTask() {
    const id = Math.floor(Math.random() * 10000);

    const newTask: tasks = {
      id,
      text: newTaskText,
      isCompleted: false,
    };

    // Adiciona e reorganiza as tarefas - concluídas no final
    setTasks((state) => [
      ...state.filter((task) => !task.isCompleted),
      newTask,
      ...state.filter((task) => task.isCompleted),
    ]);

    setNewTaskText("");
  }

  // Tarefa concluída
  const taskDone = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    // Reorganiza as tarefas - concluídas no final
    const reorganizedTasks = [
      ...updatedTasks.filter((task) => !task.isCompleted),
      ...updatedTasks.filter((task) => task.isCompleted),
    ];

    setTasks(reorganizedTasks);
  };

  // Excluir tarefa
  const deleteTask = (id: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div>
      <Header />
      <Input
        newTaskText={newTaskText}
        setNewTaskText={setNewTaskText}
        handleCreateNewTask={handleCreateNewTask}
      />
      <TaskSection 
      tasks={tasks} 
      taskDone={taskDone} 
      deleteTask={deleteTask}
      />
    </div>
  );
}
