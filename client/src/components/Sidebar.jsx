export default function Sidebar({ chats }) {
  return (
    <aside className="hidden w-72 flex-col gap-4 border-r border-gray-800 bg-gray-950 p-4 md:flex">
      <div className="flex items-center gap-3 px-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#194cff] to-[#4568f2] text-lg font-bold shadow-lg shadow-[#194cff]/40">
          W
        </div>
        <div className="leading-tight">
          <p className="text-base font-bold">WsCube AI</p>
          <p className="text-xs text-gray-400">ChatBot</p>
        </div>
      </div>

      <button className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#194cff] to-[#4568f2] px-3 py-2.5 text-sm font-semibold shadow-md transition hover:opacity-90">
        <span className="text-lg leading-none">+</span> New Chat
      </button>

      <p className="px-2 text-xs font-medium uppercase tracking-wider text-gray-500">
        Recent chats
      </p>
      <ul className="flex flex-1 flex-col gap-1 overflow-y-auto">
        {chats.map((chat) => (
          <li
            key={chat.id}
            className={`cursor-pointer truncate rounded-lg px-3 py-2.5 text-sm transition ${
              chat.active
                ? "bg-gray-800 text-white"
                : "text-gray-400 hover:bg-gray-900 hover:text-gray-100"
            }`}
          >
            {chat.title}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3 border-t border-gray-800 pt-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 text-sm font-semibold">
          S
        </div>
        <div className="leading-tight">
          <p className="text-sm font-medium">Student</p>
          <p className="text-xs text-gray-500">Free plan</p>
        </div>
      </div>
    </aside>
  );
}
