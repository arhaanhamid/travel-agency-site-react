import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import Testpage from "./components/Testpage/Testpage";
import FloatingButtons from "./components/UIComponents/FloatingButtons";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const LoadingPage = lazy(() => import("./LoadingPage"));
const PackageDetailPage = lazy(
  () => import("./components/Services/DetailPages/PackageDetailPage")
);
const ServicesPage = lazy(() => import("./components/Services/ServicesPage"));

const HotelDetailPage = lazy(
  () => import("./components/Services/DetailPages/HotelDetailPage")
);
const CarDetailPage = lazy(
  () => import("./components/Services/DetailPages/CarDetailPage")
);
const BoatDetailPage = lazy(
  () => import("./components/Services/DetailPages/BoatDetailPage")
);
const ActivityDetailPage = lazy(
  () => import("./components/Services/DetailPages/ActivityDetailPage")
);
const NotFoundPage = lazy(() => import("./NotFoundPage"));

function App() {
  return (
    <Router className="main">
      <Suspense fallback={<LoadingPage />}>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:type" element={<ServicesPage />} />
          <Route
            path="/services/packages/:packageId"
            element={<PackageDetailPage />}
          />
          <Route
            path="/services/hotels/:hotelId"
            element={<HotelDetailPage />}
          />
          <Route
            path="/services/activities/:activityId"
            element={<ActivityDetailPage />}
          />
          <Route path="/services/boats/:boatId" element={<BoatDetailPage />} />
          <Route path="/services/cars/:carId" element={<CarDetailPage />} />
          <Route path="/testpage" element={<Testpage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </Suspense>
    </Router>
  );
}

export default App;
