import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Memories from "./components/Memories/Memories";
function App() {
  return (
    <div className="main">
      <Nav />
      <Header />
      <Memories />
    </div>
  );
}

export default App;
