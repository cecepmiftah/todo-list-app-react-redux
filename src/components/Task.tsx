import { useState } from "react";
import { DeleteBtn } from "./DeleteBtn";
import { EditBtn } from "./EditBtn";
import { EditModal } from "./EditModal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { updateTodoToComplete } from "../state/todo/todoSlice";

export const Task = ({ id, text }: { id: string; text: string }) => {
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const todo = useSelector((state: RootState) =>
    state.todos.find((todo) => todo.id === id)
  );
  const [isChecked, setIsChecked] = useState(todo?.completed);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);

    if (todo) {
      dispatch(
        updateTodoToComplete({
          ...todo,
          id: todo.id,
          completed: !todo.completed,
        })
      );
    }
  };

  function showInputHandler() {
    setShowInput(true);
  }

  return (
    <div className="flex justify-between gap-4 w-full">
      <div className="inline-flex items-center">
        <label
          className="relative flex items-center gap-2 p-3 rounded-full cursor-pointer"
          htmlFor={todo?.id}
        >
          <input
            type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
            id={todo?.id}
            name={todo?.id}
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-1/2 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
        <label
          className={`${todo?.completed && "line-through"} font-light`}
          htmlFor={todo?.id}
        >
          {text}
        </label>
      </div>

      <div className="flex gap-2">
        <EditBtn onClick={showInputHandler} />
        <DeleteBtn id={id} />
      </div>
      {showInput && (
        <div className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <EditModal setShowInput={setShowInput} id={id} />
          </div>
        </div>
      )}
    </div>
  );
};
