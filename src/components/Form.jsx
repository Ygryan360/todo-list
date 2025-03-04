import Button from "./Button";
export default function Form({ onSubmit }) {
  return (
    <form
      method="post"
      className="flex items-center mb-10 gap-2"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        name="new"
        id="new"
        autoComplete="off"
        required
        placeholder="Add task"
        className="text-gray-200 rounded-lg outline-0 w-full p-2 bg-slate-900 focus:border-blue-500 focus:border-2 focus:ring-blue-500 border-2 border-slate-600 placeholder:text-gray-400"
      />
      <Button type="submit">Ajouter</Button>
    </form>
  );
}
