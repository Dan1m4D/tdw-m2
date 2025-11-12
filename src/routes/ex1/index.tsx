import { createFileRoute } from "@tanstack/react-router";
import ToDoForm from "../components/ToDoForm";
import { useState, useEffect } from "react";

interface ToDo {
  id: number;
  text: string;
  createdAt: Date;
  editedAt?: Date;
}

const ToDo1 = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ToDo[]>([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (todo) {
      const newTodo: ToDo = {
        id: Date.now(),
        text: todo,
        createdAt: new Date(),
      };
      setTodos([...todos, newTodo]);
      setTodo("");
    }
  }

  return (
    <article className="h-screen flex flex-row-reverse justify-center items-center gap-4 m-4">
      <section className="max-w-1/2 min-w-2/5 bg-accent/20 shadow-xl border border-accent p-4 flex flex-col min-h-[50vh]">
        <h2 className="text-2xl font-bold mb-4">To Do 1</h2>
        <ToDoForm onAddTodo={handleAddTodo} setTodo={setTodo} todo={todo} />
        
        
      </section>
      <section className="max-w-1/2 min-w-2/5 bg-accent/20 shadow-xl border border-accent p-4 flex flex-col min-h-[50vh]">
        {todos.length === 0 ? (
          <p className="text-center mt-4">No to-do items yet.</p>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">To-Do List</h2>
            <ul className="list-disc list-inside">
              {todos.map((item) => (
                <li key={item.id} className="mb-2">
                  <span>{item.text}</span>
                  <br />
                  <small className="text-gray-500">
                    Created at: {item.createdAt.toLocaleString()}
                  </small>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </article>
  );
};

export const Route = createFileRoute("/ex1/")({
  component: ToDo1,
});
