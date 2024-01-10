import styles from "./TaskSection.module.css";
import { NoTasks } from "./NoTasks/NoTasks";
import { Task } from "./Task/Task";
import { TaskType } from "./Task/Task";

interface TaskSectionProps {
    tasks: TaskType[];
    taskDone: (id: number) => void;
    deleteTask: (id: number) => void;
  }

export function TaskSection({ tasks, taskDone, deleteTask }: TaskSectionProps) {
    return (
        <section className={styles.taskSection}>
            <div className={styles.taskProgress}>
            <p className={styles.createdTasks}>Tarefas criadas <span>{tasks.length}</span></p>
            <p className={styles.completedTasks}>Concluídas <span>{tasks.filter(task => task.isCompleted).length} de {tasks.length}</span></p>
            </div>

           
{tasks.length === 0 ? (
        <NoTasks />
      ) : (
        tasks.map(task => (
            <div key={task.id} className={styles.task}>
                <Task  task={task} taskDone={taskDone} deleteTask={deleteTask}/>
            </div>
        ))
      )}

        </section>
    )
}