import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="min-h-screen flex gap-4 p-14 flex-col items-center bg-slate-100 z-10 max-sm:px-1 font-primary">
      <Header />
      <Main />
    </div>
  );
}

export default App;
