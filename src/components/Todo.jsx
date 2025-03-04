export default function Todo({ todo, onTaskChange, onDelete }) {
  return (
    <div
      className={`flex items-center justify-between mb-4 transition-all rounded-lg py-2 px-4 ${
        todo.done ? "hover:bg-slate-700" : "bg-slate-700"
      }`}
    >
      <div className="flex items-center">
        <div class="inline-flex items-center">
          <Checkbox td={todo} onTaskChange={onTaskChange} />
        </div>
        <Label td={todo} />
      </div>
      <Trash od={onDelete} />
    </div>
  );
}

function Label({ td, ...propos }) {
  return (
    <label
      htmlFor={td.id}
      className={`ms-2 text-sm text-wrap break-all ${
        td.done ? "line-through" : "text-gray-300"
      }`}
      {...propos}
    >
      {td.label}
    </label>
  );
}
function Checkbox({ td, onTaskChange }) {
  return (
    <label class="flex items-center cursor-pointer relative">
      <input
        type="checkbox"
        id={td.id}
        onChange={onTaskChange}
        checked={td.done}
        className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-400 checked:bg-blue-600 checked:border-blue-600"
      />
      <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3.5 w-3.5"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
    </label>
  );
}
function Trash({ od }) {
  return (
    <button
      onClick={od}
      className="hover:bg-slate-600 p-2 rounded-lg cursor-pointer transition-all"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
