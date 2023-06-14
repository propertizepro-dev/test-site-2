export default function Button({ children }) {
  return (
    <div className="flex">
      <button className="font-bebas text-zinc-100 bg-indigo-800 px-6 py-3 text-2xl rounded-3xl hover:bg-black hover:border-white border-transparent border-2 transition ease-in-out duration-300">
        {children}
      </button>
    </div>
  );
}
