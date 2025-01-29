import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Memories from "./components/Memories/Memories";
import PopularTrip from "./components/PopularTrips/PopularTrip";
function App() {
  return (
    <div className="main">
      <Nav />
      <Header />
      <Memories />
      <PopularTrip />
    </div>
  );
}

export default App;
