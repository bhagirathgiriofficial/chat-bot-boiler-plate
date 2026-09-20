import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

const chats = [
  { id: 1, title: "Explain React hooks" },
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
    <div className="flex h-screen bg-zinc-900 text-zinc-100">
      <Sidebar chats={chats} />
      <main className="flex flex-1 flex-col">
        <ChatWindow messages={messages} />
        <ChatInput />
      </main>
    </div>
  );
}
