import { MouseEventHandler } from "react";
import editBtn from "../assets/edit.svg";

export const EditBtn = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={onClick}>
      <img src={editBtn} alt="delete button" />
    </button>
  );
};
