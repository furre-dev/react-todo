import { Todo } from "@/app/page"
import { ChangeFunction, RemoveFunction } from "./TodosMap"

export default function TodoItem({ todo, changeChecked, removeTodo }: { todo: Todo, changeChecked: ChangeFunction, removeTodo: RemoveFunction }) {
  return (
    <li className="text-xl font-bold flex justify-between">
      <p className={`${todo.isDone ? "line-through" : ""}`}>{todo.titel}</p>
      <div className="space-x-4">
        <input onChange={(e) => {
          const inputIsChecked = e.target.checked
          changeChecked(inputIsChecked, todo.id)
        }} type="checkbox" checked={todo.isDone} />
        <button onClick={() => removeTodo(todo.id)} className="bg-red-500 text-sm px-2">Ta bort</button>
      </div>
    </li>
  )
}