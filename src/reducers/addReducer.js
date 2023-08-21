export const addReducer = (state, action) => {
  switch (action.type) {
    case "TODO_ADD":
      return [...state, action.payload];
    case "TODO_REMOVE":
      const updatedTodos = state.filter((todo) => todo !== action.payload);
      return [...updatedTodos];
    default:
      return state;
  }
};
