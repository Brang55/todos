import { useReducer } from "react";
import { useForm } from "../../hooks/useForm";
import styles from "./NewTodo.module.css";
import { addReducer } from "../../reducers/addReducer";
import { TodoItem } from "../TodoItem/TodoItem";

export const NewTodo = () => {
  const { todo, changeHandler, checked, done } = useForm();

  const [newTodo, dispatch] = useReducer(addReducer, []);

  const addTodo = () => {
    dispatch({
      type: "TODO_ADD",
      payload: todo,
    });
  };

  const onClickRemove = (todo) => {
    dispatch({ type: "TODO_REMOVE", payload: todo });
  };

  return (
    <>
      <div className={styles.newTodo}>
        <input
          type="text"
          placeholder="New todo..."
          name="title"
          onChange={changeHandler}
        />
        <button onClick={addTodo}>Add new Todo</button>
      </div>
      <div>
        <ul>
          {newTodo.map((todo) => {
            return (
              <li style={{ marginBottom: 50 }}>
                <TodoItem key={todo} {...todo} checked={checked} done={done} />

                <button
                  className={styles.delete}
                  onClick={() => onClickRemove(todo)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
