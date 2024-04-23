export const addTodos = (title, description) => {
  return {
    type: "ADD_TODO",
    payload: {
      title,
      description,
    },
  };
};
export const rmvTodo = (index) => {
  return {
    type: "DELETE_TODO",
    payload: index,
  };
};
