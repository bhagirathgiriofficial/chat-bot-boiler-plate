import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

const chats = [
  { id: 1, title: "Explain React hooks", active: true },
  { id: 2, title: "MongoDB vs SQL" },
  { id: 3, title: "Trip plan for Goa" },
];

const messages = [
  { id: 1, role: "user", text: "What is useState in React?" },
  {
    id: 2,
    role: "ai",
    text: "useState is a hook that lets a component remember a value between renders.",
  },
  { id: 3, role: "user", text: "Can you show a quick example?" },
  {
    id: 4,
    role: "ai",
    text: "Sure! const [count, setCount] = useState(0); then call setCount(count + 1) inside a button click.",
  },
];

export default function App() {
  return (
    <div className="flex h-screen bg-gray-950 text-gray-100">
      <Sidebar chats={chats} />
      <main className="flex min-w-0 flex-1 flex-col bg-gray-900">
        <header className="flex items-center gap-3 border-b border-gray-800 px-4 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#194cff] to-[#4568f2] text-sm font-bold md:hidden">
            W
          </div>
          <div className="min-w-0">
            <h1 className="truncate text-sm font-semibold">
              {chats.find((c) => c.active).title}
            </h1>
            <p className="flex items-center gap-1.5 text-xs text-gray-400">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f8db46]" />
              WsCube AI ChatBot
            </p>
          </div>
        </header>
        <ChatWindow messages={messages} />
        <ChatInput />
      </main>
    </div>
  );
}
