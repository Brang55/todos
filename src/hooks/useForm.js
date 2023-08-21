import { useState } from "react";

export const useForm = () => {
  const [todo, setTodo] = useState({ title: "" });

  const changeHandler = (e) => {
    setTodo((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const [checked, setChecked] = useState(false);
  const [startedDate, setStartedDate] = useState(null);
  const [doneDate, setDoneDate] = useState(null);

  const currentDate = new Date();
  const getCurrentDate = `${currentDate.getDate()}.${currentDate.getMonth()} at ${currentDate.getHours()}:${currentDate.getMinutes()}`;

  const handleCheckChanged = () => {
    if (done) {
      setChecked(false);
    } else {
      setChecked(!checked);
    }

    setStartedDate(getCurrentDate);
  };

  const [done, setDone] = useState(false);

  const handleDoneChange = () => {
    setDone(!done);
    setChecked(false);
    setDoneDate(getCurrentDate);
  };

  return {
    todo,
    changeHandler,
    handleCheckChanged,
    checked,
    done,
    handleDoneChange,
    startedDate,
    doneDate,
  };
};
