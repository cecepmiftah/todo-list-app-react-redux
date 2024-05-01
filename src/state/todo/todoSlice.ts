import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  hideTaskCompleted?: boolean;
}

const initialState: TodoState = {
  todos: [],
  hideTaskCompleted: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const newState = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = newState;
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const { id, text, completed } = action.payload;

      const todoToUpdate = state.todos.find((todo) => todo.id === id);

      if (todoToUpdate) {
        todoToUpdate.text = text;
        todoToUpdate.completed = completed;
      }
    },
    updateTodoToComplete: (state, action: PayloadAction<Todo>) => {
      const { id, completed } = action.payload;

      const todoToUpdate = state.todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.completed = completed;
      }
    },
    hideCompletedTask: (state) => {
      state.hideTaskCompleted = !state.hideTaskCompleted;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateTodo,
  updateTodoToComplete,
  hideCompletedTask,
} = todoSlice.actions;
export default todoSlice.reducer;
