import { ChangeEvent, FormEvent, MouseEventHandler, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { Todo, updateTodo } from "../state/todo/todoSlice";

export const EditModal = ({
  hideInputHandler,
  id,
}: {
  hideInputHandler: MouseEventHandler<HTMLButtonElement>;
  id: string;
}) => {
  const todo = useSelector((state: RootState) =>
    state.todos.find((todo) => todo.id === id)
  )!;
  const dispatch = useDispatch<AppDispatch>();

  const [todoUpdate, setTodoUpdate] = useState<Todo | null>(todo);

  function updateTodoHandler(e: ChangeEvent<HTMLInputElement>) {
    if (!todoUpdate) return;
    setTodoUpdate({ ...todoUpdate, text: e.target.value });
  }

  function updateTodoList(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (todoUpdate) {
      dispatch(updateTodo(todoUpdate));
      hideInputHandler();
    }
  }

  return (
    <div className="relative w-80 h-auto bg-gray-800">
      <button
        className="absolute right-1 top-1 text-xl z-30 p-2"
        onClick={hideInputHandler}
      >
        X
      </button>
      <div className="py-6 flex flex-col gap-3 justify-center items-center">
        <h1 className="text-center">Update Task</h1>
        <form onSubmit={updateTodoList} className="">
          <input
            type="text"
            className="py-2 px-1 mx-2 text-black"
            value={todoUpdate?.text}
            onChange={updateTodoHandler}
          />
          <button
            type="submit"
            className="py-3 px-2 bg-blue-800 hover:bg-blue-700 rounded-lg text-sm"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};
