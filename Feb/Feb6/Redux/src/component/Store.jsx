import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
  isLoading: false,
};

const taskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      state.task.push(action.payload);
    },
    deleteTask(state, action) {
      state.task = state.task.filter(
        (currentTask, index) => index !== action.payload
      );
    },
    fetchTask(state, action) {
      state.task.push(action.payload);
    },
  },
});

export const { addTask, deleteTask } = taskReducer.actions;

export const store = configureStore({
  reducer: {
    taskReducer: taskReducer.reducer,
  },
});
