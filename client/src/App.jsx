import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import Testpage from "./Testpage/Testpage";
import FloatingButtons from "./components/UIComponents/FloatingButtons";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const FormPage = lazy(() => import("./components/Forms/FormPage"));
const LoadingPage = lazy(() => import("./LoadingPage"));
const ServicesPage = lazy(() => import("./components/Services/ServicesPage"));
const DetailPage = lazy(() => import("./components/Services/DetailPage"));
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
          <Route path="/services/:type/:dataId" element={<DetailPage />} />
          <Route path="/forms" element={<FormPage />} />
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
