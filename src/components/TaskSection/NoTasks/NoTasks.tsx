import styles from "./NoTasks.module.css"
import clipboard from "../../../assets/clipboard.svg"

export function NoTasks() {
    return (
        <div className={styles.noTasksContainer}>
            <img src={clipboard} alt="" className={styles.clipboard}/>
            <p className={styles.pbold}>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}