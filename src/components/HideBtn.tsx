import noEye from "../assets/No-eye.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { hideCompletedTask } from "../state/todo/todoSlice";
import { AppDispatch } from "../state/store";

export const HideBtn = ({ text }: { text: string }) => {
  const hideCompletedTaskState = useSelector(
    (state: RootState) => state.hideTaskCompleted
  );

  const dispatch = useDispatch<AppDispatch>();

  return (
    <button
      onClick={() => dispatch(hideCompletedTask())}
      className={`flex items-center gap-3 p-3 ${
        hideCompletedTaskState
          ? "bg-gray-700 shadow-lg shadow-gray-500"
          : "bg-gray-800"
      } w-60 rounded text-gray-400 shadow-md`}
    >
      <div>
        <img src={noEye} alt="no-eye" />
      </div>
      {text}
    </button>
  );
};
