import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

const Home = lazy(() => import("./components/Home/Home"));
const Packages = lazy(() => import("./components/Packages/Packages"));
const Rentals = lazy(() => import("./components/Rentals/Rentals"));
const PackageDetailPage = lazy(
  () => import("./components/Packages/PackageDetailPage")
);

function App() {
  return (
    <Router className="main">
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:packageId" element={<PackageDetailPage />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />{" "}
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
