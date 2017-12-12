export const addTodo = (text) => ({
  type: 'ADD_TODO',
  text
});

export const completeTodo = (todo) => ({
  type: 'COMPLETE_TODO',
  todo
});

export const editTodo = (text) => ({
    type: 'CHANGE_TODO',
    text
});

export const resetTodo = (text) => ({
    type: 'RESET_TODO',
    text
});

export const validateTodo = (result) => ({
    type: 'VALIDATED',
    result
});
