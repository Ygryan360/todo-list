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
        className="text-gray-200 rounded-lg outline-0 w-full p-2 focus:border-blue-500 focus:border focus:ring-blue-500 border border-slate-600 placeholder:text-gray-400 focus:bg-slate-900"
      />
      <Button type="submit">Add</Button>
    </form>
  );
}
