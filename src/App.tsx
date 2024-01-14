import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header/Header";
import { Input } from "./components/Input/Input";
import { TaskSection } from "./components/TaskSection/TaskSection";

import { useState, useEffect } from "react";
import Modal from "react-modal";
import { CheckCircle, XCircle } from "@phosphor-icons/react";

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

  // Salvar tarefas no localStorage
  const saveTasksToLocalStorage = (tasks: tasks[]) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // Carregar tarefas do localStorage ao inicializar
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Atualizar tarefas e salvar no localStorage
  const updateTasksAndSave = (newTasks: tasks[]) => {
    setTasks(newTasks);
    saveTasksToLocalStorage(newTasks);
  };

  // Nova Tarefa
  const handleCreateNewTask = () => {
    const id = Math.floor(Math.random() * 10000);

    const newTask: tasks = {
      id,
      text: newTaskText,
      isCompleted: false,
    };

    // Adiciona e reorganiza as tarefas - concluídas no final
    const updatedTasks = [
      ...tasks.filter((task) => !task.isCompleted),
      newTask,
      ...tasks.filter((task) => task.isCompleted),
    ];

    updateTasksAndSave(updatedTasks);
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
    updateTasksAndSave(reorganizedTasks)
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
    saveTasksToLocalStorage(filteredTasks);
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
      <Modal
        isOpen={modalOpen}
        className={styles.modalContainer}
        overlayClassName={styles.Overlay}
      >
        <p className={styles.textDesktop}>Deseja apagar essa tarefa?</p>
        <p className={styles.textMobile}>Deletar?</p>

        <div className={styles.buttonsContainer}>
        
          <button onClick={confirmDelete} className={styles.buttonConfirm}>
            <p>Confirmar</p>
            <span>
              <CheckCircle size={30} />
            </span>
          </button>

          <button onClick={cancelDelete} className={styles.buttonCancel}>
            <p> Cancelar</p>
            <span>
              <XCircle size={30} />
            </span>
          </button>
       
        </div>
      </Modal>
    </div>
  );
}
