export const addTodos = (title, description) => {
  return {
    type: "ADD_TODO",
    payload: {
      title,
      description,
    },
  };
};
