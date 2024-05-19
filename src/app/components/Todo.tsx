import { Task } from "@/types";
import React from "react";

interface TodoProps {
  todo: Task;
}

const Todo = ({ todo }: TodoProps) => {
  return (
    <li
      key={todo.id}
      className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
    >
      <span>{todo.text}</span>
      <div>
        <button className="text-green-500 mr-3">edit</button>
        <button className="text-red-500">Delete</button>
      </div>
    </li>
  );
};

export default Todo;
