import { DetailedHTMLProps, Dispatch, FormEventHandler, FormHTMLAttributes, SetStateAction } from "react";

export default function FormWithInput({ onSubmit, todoName, setTodoName }: { onSubmit: FormEventHandler<HTMLFormElement>, todoName: string, setTodoName: Dispatch<SetStateAction<string>> }) {
  return (<form onSubmit={onSubmit} className="flex w-full mt-2 gap-2">
    <input
      onChange={(e) => { setTodoName(e.target.value) }}
      value={todoName}
      className="w-full bg-white outline-none text-md text-black px-2 py-1 rounded"
      placeholder="Lägg till något som du behöver göra"
    />
    <button
      disabled={!todoName}
      type="submit"
      className="bg-white text-black rounded min-w-24 disabled:opacity-50">Lägg till</button>
  </form>)
}