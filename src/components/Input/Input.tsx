import styles from "./Input.module.css";
import { PlusCircle } from "@phosphor-icons/react";


interface InputProps {
    newTaskText: string;
    setNewTaskText: React.Dispatch<React.SetStateAction<string>>;
    handleCreateNewTask: (event?: React.FormEvent) => void;
  }

export function Input({newTaskText, setNewTaskText, handleCreateNewTask}: InputProps) {

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value);
      }
    
      function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        handleCreateNewTask(event);
      }

      const isNewTaskEmpty = newTaskText.length === 0;

    return (
        <form onSubmit={handleSubmit} className={styles.inputContainer}>
           <input 
           type="text" 
           placeholder="Adicione uma nova tarefa" 
           className={styles.input} 
           value={newTaskText} 
           onChange={handleInputChange}
           />

           <button 
           type="submit" 
           className={styles.button}
           disabled={isNewTaskEmpty}
           >
            Criar
           <PlusCircle size={24} />
           </button>
        </form>
    )
}