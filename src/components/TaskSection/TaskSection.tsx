import styles from "./TaskSection.module.css";
import { NoTasks } from "./NoTasks/NoTasks";
import { Tasks } from "./Tasks/Tasks";

export function TaskSection() {
    return (
        <section className={styles.taskSection}>
            <div className={styles.taskProgress}>
            <p className={styles.createdTasks}>Tarefas criadas <span>0</span></p>
            <p className={styles.completedTasks}>Concluídas <span>2 de 5 </span></p>
            </div>

            {/* <NoTasks /> */}
            <Tasks />
        </section>
    )
}