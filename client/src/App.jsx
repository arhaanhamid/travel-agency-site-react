import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";

const Home = lazy(() => import("./components/Home/Home"));
const PackagesPage = lazy(() => import("./components/Packages/PackagesPage"));
const RentalsPage = lazy(() => import("./components/Rentals/RentalsPage"));
const PackageDetailPage = lazy(
  () => import("./components/Packages/PackageDetailPage")
);

function App() {
  return (
    <Router className="main">
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/packages/:packageId" element={<PackageDetailPage />} />
          <Route path="/rentals" element={<RentalsPage />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />{" "}
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
