"use client"

import FormWithInput from "@/components/FormWithInput";
import TodosMap from "@/components/TodosMap";
import { FormEvent, useEffect, useState } from "react";

export type Todo = { id: number, titel: string, isDone: boolean }
type LocalStorageTodo = Todo[] | null

export default function Home() {
  const todosInLocaleStorage = localStorage.getItem("todosList");
  const todosJson: LocalStorageTodo = todosInLocaleStorage ? JSON.parse(todosInLocaleStorage) : null;
  const [todoName, setTodoName] = useState<string>("")
  const [todos, setTodos] = useState<null | Todo[]>(todosJson);

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const timestamp = Date.now()
    const currentTodos = todos ? [...todos] : null
    if (!currentTodos) {
      return setTodos([{ id: timestamp, titel: todoName, isDone: false }])
    }

    currentTodos.push({ id: timestamp, titel: todoName, isDone: false })
    return setTodos(currentTodos)
  }

  const handleRemoveTodo = (id: number) => {
    const currentTodos = todos ? [...todos] : null;
    if (!currentTodos) return;

    const updatedTodos = currentTodos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };


  const handleChangeChecked = (c: boolean, id: number) => {
    const currentTodos = todos ? [...todos] : null
    if (!currentTodos) return;
    const currentTodo = currentTodos.find((todo) => todo.id === id)
    if (!currentTodo) return;
    currentTodo.isDone = c
    setTodos(currentTodos)
  }

  useEffect(() => {
    localStorage.setItem("todosList", JSON.stringify(todos));
  }, [todos]);

  return (
    <main className="w-[400px] mx-auto flex flex-col justify-center items-center pt-24">
      <h1 className="text-4xl">Todo Lista</h1>
      <FormWithInput onSubmit={handleAddTodo} setTodoName={setTodoName} todoName={todoName} />
      {todos && todos.length > 0 ? (
        <TodosMap changeChecked={handleChangeChecked} todos={todos} removeTodo={handleRemoveTodo} />
      )
        :
        <span className="mt-10">Du har inga todos, lägg gärna till några!</span>
      }
    </main>
  );
}
