export default function Sidebar({ chats }) {
  return (
    <aside className="hidden w-64 flex-col gap-3 bg-zinc-950 p-3 md:flex">
      <button className="rounded-lg border border-zinc-700 px-3 py-2 text-left text-sm hover:bg-zinc-800">
        + New Chat
      </button>
      <ul className="flex flex-col gap-1">
        {chats.map((chat) => (
          <li
            key={chat.id}
            className="cursor-pointer truncate rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800"
          >
            {chat.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}
