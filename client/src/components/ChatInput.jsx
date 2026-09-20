export default function ChatInput() {
  return (
    <div className="p-4">
      <div className="mx-auto flex max-w-3xl items-end gap-2 rounded-2xl bg-zinc-800 p-2">
        <textarea
          rows={1}
          placeholder="Send a message..."
          className="flex-1 resize-none bg-transparent px-2 py-2 text-sm outline-none placeholder:text-zinc-500"
        />
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-500">
          Send
        </button>
      </div>
    </div>
  );
}
