// CSS
import "./global.css";
import styles from "./App.module.css"
// Components
import { Header } from "./components/Header/Header";
import { Input } from "./components/Input/Input";
import { TaskSection } from "./components/TaskSection/TaskSection";
import Modal from "react-modal";
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
  const [modalOpen, setModalOpen] = useState(false);
  const [taskToDeleteId, setTaskToDeleteId] = useState<number | null>(null);

  // Nova Tarefa
  const handleCreateNewTask = () => {
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
  };

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
    setTaskToDeleteId(id);
    setModalOpen(true);
  };

  // Confirmar exclusão
  const confirmDelete = () => {
    const filteredTasks = tasks.filter((task) => task.id !== taskToDeleteId);
    setTasks(filteredTasks);
    setModalOpen(false);
    setTaskToDeleteId(null);
  };

  // Cancelar exclusão
  const cancelDelete = () => {
    setModalOpen(false);
    setTaskToDeleteId(null);
  };

  return (
    <div>
      <Header />
      <Input
        newTaskText={newTaskText}
        setNewTaskText={setNewTaskText}
        handleCreateNewTask={handleCreateNewTask}
      />
      <TaskSection tasks={tasks} taskDone={taskDone} deleteTask={deleteTask} />

      {/* Modal de Confirmação */}
      <Modal isOpen={modalOpen}  className={styles.modalContainer}            overlayClassName={styles.Overlay}>
        <p>Deseja apagar essa tarefa?</p>
        <div className={styles.buttonsContainer}>
        <button onClick={confirmDelete} className={styles.buttonConfirm}>Confirmar</button>
        <button onClick={cancelDelete} className={styles.buttonCancel}>Cancelar</button>
        </div>
      </Modal>
    </div>
  );
}
