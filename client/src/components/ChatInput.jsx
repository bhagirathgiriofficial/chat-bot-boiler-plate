export default function ChatInput() {
  return (
    <div className="px-4 pb-4 pt-2">
      <div className="mx-auto flex max-w-3xl items-end gap-2 rounded-2xl border border-gray-700 bg-gray-800 p-2 shadow-lg focus-within:border-[#194cff]">
        <textarea
          rows={1}
          placeholder="Ask WsCube AI anything..."
          className="flex-1 resize-none bg-transparent px-3 py-2 text-sm outline-none placeholder:text-gray-500"
        />
        <button className="rounded-xl bg-gradient-to-r from-[#194cff] to-[#4568f2] px-4 py-2 text-sm font-semibold transition hover:opacity-90">
          Send
        </button>
      </div>
      <p className="mt-2 text-center text-xs text-gray-500">
        WsCube AI ChatBot can make mistakes. Check important info.
      </p>
    </div>
  );
}
