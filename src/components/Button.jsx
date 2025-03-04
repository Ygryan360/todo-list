export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 transition-all bg-blue-500 hover:bg-blue-600 rounded-lg text-white cursor-pointer"
    >
      {children}
    </button>
  );
}
