import { useSelector } from "react-redux";
import "./App.css";
import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import { HideBtn } from "./components/HideBtn";
import { Task } from "./components/Task";
import { RootState } from "./state/store";
import { Todo } from "./state/todo/todoSlice";

function App() {
  const todos = useSelector((state: RootState) => state.todos);
  const hideCompletedTaskState = useSelector(
    (state: RootState) => state.hideTaskCompleted
  );

  return (
    <div className="max-w-full min-h-screen flex flex-col justify-between text-white font-sans">
      <div className="flex flex-col flex-grow mx-8">
        <div className="my-14">
          <Header />
        </div>
        <div className="my-6 flex flex-col gap-2 md:justify-end">
          <HideBtn
            text={
              hideCompletedTaskState
                ? "Show completed tasks"
                : "Hide completed tasks"
            }
          />
          <p className="text-sm md:text-lg text-gray-400">
            {todos.length} Task
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {hideCompletedTaskState
            ? todos
                .filter((todo) => todo.completed === false)
                .map((todoMap) => <Task key={todoMap.id} {...todoMap} />)
            : todos.map((todo: Todo) => <Task key={todo.id} {...todo} />)}
        </div>
      </div>

      <div className="my-6 mx-8">
        <AddTask />
      </div>
    </div>
  );
}

export default App;
