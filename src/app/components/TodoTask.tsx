import { Task } from "@/types";
import React from "react";
import Todo from "./Todo";

interface TodoTaskProps {
  todos: Task[];
}

const TodoTask = ({ todos }: TodoTaskProps) => {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoTask;
