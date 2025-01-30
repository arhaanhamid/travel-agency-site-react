import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Memories from "./components/Memories/Memories";
import PopularTrip from "./components/PopularTrips/PopularTrip";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="main">
      <Nav />
      <div className="hero-section">
        <div className="blur-overlay"></div>
        <div className="hero-content">
          <h6>Connecting your journey with purpose</h6>
          <h3>
            Unforgettable travel
            <br />
            experiences with
            <br />a <em>positive</em> impact
          </h3>
        </div>
      </div>
      <Header />
      <Memories />
      <PopularTrip />
      <Footer />
    </div>
  );
}

export default App;
