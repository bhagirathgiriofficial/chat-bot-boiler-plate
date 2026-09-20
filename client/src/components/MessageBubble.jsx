export default function MessageBubble({ role, text }) {
  const isUser = role === "user";
  return (
    <div className={`flex items-end gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
          isUser
            ? "bg-gray-700"
            : "bg-gradient-to-br from-[#194cff] to-[#4568f2]"
        }`}
      >
        {isUser ? "S" : "W"}
      </div>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
          isUser
            ? "rounded-br-sm bg-[#194cff] text-white"
            : "rounded-bl-sm border border-gray-700 bg-gray-800 text-gray-100"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
