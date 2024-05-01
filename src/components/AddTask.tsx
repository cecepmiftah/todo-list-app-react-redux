import { useDispatch } from "react-redux";
import { FormEvent, useState } from "react";
import { addTodo } from "../state/todo/todoSlice";

export const AddTask = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  function addTodoHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch(addTodo(todo));
    setTodo("");
  }

  return (
    <form
      onSubmit={addTodoHandler}
      className="w-full md:w-[90%] flex gap-4 justify-center"
    >
      <input
        type="text"
        placeholder="New task..."
        className="py-2 px-6 rounded-xl md:py-4 md:w-1/2 bg-gray-600 border-none"
        value={todo}
        onChange={(e) => setTodo(() => e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-800 py-2 px-6 md:py-4 rounded-xl hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  );
};
