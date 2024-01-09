import styles from "./Input.module.css";
import { PlusCircle } from "@phosphor-icons/react";

export function Input() {
    return (
        <div className={styles.inputContainer}>
           <input type="text" placeholder="Adicione uma nova tarefa" className={styles.input}/>
           <button className={styles.button}>
            Criar
           <PlusCircle size={24} />
           </button>
        </div>
    )
}