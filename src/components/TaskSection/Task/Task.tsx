import styles from "./Task.module.css"
import { Trash, Check } from "@phosphor-icons/react";

export interface TaskType {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface TaskProps {
  task: TaskType;
}

export function Task( {task}: TaskProps ) {
  return (
    <section>
      <div className={styles.task}>
       
        <div className={styles.infoTask}>
        <button className={styles.notCompleted}></button>
        <p>{task.text}</p>
        </div>

         <button className={styles.trash}>
        <Trash size={20} />
         </button>
      </div>

      {/* <div className={styles.task}>
       
       <div className={styles.infoTask}>
       <button className={styles.completed}><Check size={12} /></button>
       <p>estudar react</p>
       </div>

        <button className={styles.trash}>
       <Trash size={20} />
        </button>
     </div> */}
    </section>
  );
}
