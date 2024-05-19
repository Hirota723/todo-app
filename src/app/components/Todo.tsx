"use client";

import { editTodo } from "@/api";
import { Task } from "@/types";
import React, { useEffect, useRef, useState } from "react";

interface TodoProps {
  todo: Task;
}

const Todo = ({ todo }: TodoProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  useEffect(() => {
    if (isEditing) {
      ref.current?.focus();
    }
  }, [isEditing]);

  const handleEdit = async () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    await editTodo(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <li
      key={todo.id}
      className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
    >
      {isEditing ? (
        <input
          ref={ref}
          type="text"
          className="mr-2 py-1 rounded border-gray-400 border"
          value={editedText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditedText(e.target.value)
          }
        />
      ) : (
        <span>{todo.text}</span>
      )}

      <div>
        {isEditing ? (
          <button className="text-blue-500 mr-3" onClick={handleSave}>
            save
          </button>
        ) : (
          <button className="text-green-500 mr-3" onClick={handleEdit}>
            edit
          </button>
        )}

        <button className="text-red-500">Delete</button>
      </div>
    </li>
  );
};

export default Todo;
