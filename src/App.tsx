import Navbar from "./components/Navbar";
import { useAppSelector } from "./hooks/redux";

function App() {
  const { isDark } = useAppSelector((s) => s.dark);
  return (
    <main className="App" style={{
      background:isDark ? "black" : 'white',
      color: isDark ? "white" : "black"
    }}>
      <Navbar />
    </main>
  );
}

export default App;
