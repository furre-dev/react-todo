import { Todo } from "@/app/page"
import TodoItem from "./TodoItem"

export type ChangeFunction = (c: boolean, id: number) => void;
export type RemoveFunction = (id: number) => void;

export default function TodosMap({ todos, changeChecked, removeTodo }: { todos: Todo[], changeChecked: ChangeFunction, removeTodo: RemoveFunction }) {
  return (
    <ul className="w-full border border-white px-10 py-4 rounded-[22px] mt-4 space-y-2">
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            changeChecked={changeChecked}
            removeTodo={removeTodo}
          />

        )
      })}
    </ul>
  )
}