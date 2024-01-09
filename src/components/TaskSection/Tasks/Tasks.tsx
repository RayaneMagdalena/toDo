import styles from "./Tasks.module.css"
import { Trash, Check } from "@phosphor-icons/react";

export function Tasks() {
  return (
    <section className={styles.tasksContainer}>
      <div className={styles.task}>
       
        <div className={styles.infoTask}>
        <button className={styles.notCompleted}></button>
        <p>estudar react </p>
        </div>

         <button className={styles.trash}>
        <Trash size={20} />
         </button>
      </div>

      <div className={styles.task}>
       
       <div className={styles.infoTask}>
       <button className={styles.completed}><Check size={12} /></button>
       <p>estudar react</p>
       </div>

        <button className={styles.trash}>
       <Trash size={20} />
        </button>
     </div>
    </section>
  );
}
