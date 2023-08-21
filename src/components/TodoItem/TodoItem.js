import { useForm } from "../../hooks/useForm";
import styles from "./TodoItem.module.css";

export const TodoItem = (todo) => {
  const {
    handleCheckChanged,
    checked,
    handleDoneChange,
    done,
    startedDate,
    doneDate,
  } = useForm();

  return (
    <div
      className={styles.todoItem}
      style={{
        backgroundColor: checked ? "#fff706" : done ? "#05f821" : "",
      }}
    >
      <div className={styles.todoContainer}>
        <span>{todo.title}</span>

        <div className={styles.doneTask}>
          <label htmlFor="done">Done</label>
          <input
            type="checkbox"
            id="done"
            checked={done}
            onChange={handleDoneChange}
          />
        </div>
        <div className={styles.startTask}>
          <label htmlFor="start">Start</label>
          <input
            type="checkbox"
            id="start"
            checked={checked}
            onChange={handleCheckChanged}
          />
        </div>
      </div>
      <div className={styles.times}>
        <span className={styles.timeStart}>Started: {startedDate}</span>

        <span className={styles.timeStop}>Done: {doneDate}</span>
      </div>
    </div>
  );
};
