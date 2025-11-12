import React from 'react'

interface ToDoFormProps {
  onAddTodo: () => void;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todo: string;
}

const ToDoForm = ({ onAddTodo, setTodo, todo }: ToDoFormProps) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAddTodo();
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onAddTodo();
        }
    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col"> 
        <h2 className="text-2xl font-bold mb-4">Add To-Do Item</h2>
        <input
          type="text"
          placeholder="Enter to-do item"
          className="input input-bordered w-full mb-4"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button type="submit" className="btn btn-primary">Add Item</button>        
      
    </form>
  )
}

export default ToDoForm
