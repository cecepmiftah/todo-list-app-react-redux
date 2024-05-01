import { useDispatch } from "react-redux";
import deleteBtn from "../assets/delete.svg";
import { removeTodo } from "../state/todo/todoSlice";

interface ID {
  id: string;
}

export const DeleteBtn = ({ id }: ID) => {
  const dispatch = useDispatch();

  return (
    <button>
      <img
        src={deleteBtn}
        onClick={() => dispatch(removeTodo(id))}
        alt="delete button"
      />
    </button>
  );
};
