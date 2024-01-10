import styles from "./Task.module.css";
import { Trash, Check } from "@phosphor-icons/react";

export interface TaskType {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface TaskProps {
  task: TaskType;
  taskDone: (id: number) => void;
  deleteTask: (id: number) => void;
}

export function Task({ task, taskDone, deleteTask }: TaskProps) {
  const buttonClass = task.isCompleted 
  ? styles.completed 
  : styles.notCompleted;

  const textClass = task.isCompleted
    ? styles.taskCompleted
    : styles.taskNotCompleted;

  const checkIconStyle = { display: task.isCompleted ? "" : "none" };

  return (
    <section>
      <div className={styles.task}>
        <div className={styles.infoTask}>

          <button 
          className={buttonClass} 
          onClick={() => taskDone(task.id)}>
            <Check size={14} style={checkIconStyle} />
          </button>

          <p className={textClass}>{task.text}</p>
        </div>

        <button 
        className={styles.trash}
        onClick={() => deleteTask(task.id)}
        >
          <Trash size={20} />
        </button>
      </div>
    </section>
  );
}
