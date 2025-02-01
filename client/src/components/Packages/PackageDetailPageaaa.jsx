import { useParams } from "react-router-dom";

const cars = [
  {
    id: 1,
    category: "TAXI",
    name: "Force Urbania 17 Seater",
    details: "16 auto 7 3",
    price: "₹8399 / day",
    image: "",
  },
  {
    id: 2,
    category: "TAXI",
    name: "Force Urbania 10 Seater",
    details: "10 manual 5 5",
    price: "₹7700 / day",
    image: "",
  },
  {
    id: 3,
    category: "TAXI",
    name: "Tempo Traveller 17 Seater",
    details: "16 manual 8 3",
    price: "₹5999 / day",
    image: "",
  },
];

/* Header Component */
function Header() {
  return (
    <header className="bg-gray-800 text-white">
      {/* Top bar with contact information */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <span>+91-8899488832</span>
        <div>
          {/* Social media links */}
          <a href="#" className="mx-2 hover:underline">
            Facebook
          </a>
          <a href="#" className="mx-2 hover:underline">
            Twitter
          </a>
          <a href="#" className="mx-2 hover:underline">
            Instagram
          </a>
        </div>
      </div>
      {/* Main navigation menu */}
      <nav className="bg-gray-700">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">Top Kashmir Tour & Travel</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                HOME PAGE
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                TOUR PACKAGES
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                SELF DRIVE CARS
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                ACTIVITIES
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                HOTELS
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                PAGES
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

/* FilterBar Component */
function FilterBar() {
  return (
    <section className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">
          Car rental in Srinagar Kashmir
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block font-semibold mb-1">Location</label>
            <select className="w-full border p-2">
              <option>Popular destinations</option>
              {/* Additional options can be added here */}
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Pick-up</label>
            <input type="datetime-local" className="w-full border p-2" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Drop-off</label>
            <input type="datetime-local" className="w-full border p-2" />
          </div>
          <div className="flex flex-col justify-end">
            <button className="bg-blue-600 text-white py-2 px-4 rounded">
              Search
            </button>
            <button className="mt-2 bg-gray-300 text-black py-2 px-4 rounded">
              Clear Filter
            </button>
          </div>
        </div>
        {/* Additional filtering options */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h2 className="font-bold">Filter Price</h2>
            <div className="flex items-center space-x-2 mt-2">
              <span>Min price ₹2399</span>
              <span>Max price ₹8399</span>
            </div>
            {/* A range slider or similar control can be inserted here */}
          </div>
          <div>
            <h2 className="font-bold">Categories</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {[
                "4x4",
                "Compact Suv",
                "Hatchbacks",
                "Mpv",
                "Self drive",
                "SUVs",
                "TAXI",
              ].map((cat) => (
                <span key={cat} className="bg-white border px-2 py-1 rounded">
                  {cat}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-bold">Sort</h2>
            <select className="w-full border p-2 mt-2">
              <option>New car</option>
              <option>Price</option>
              <option>Low to High</option>
              <option>High to Low</option>
              <option>Name (A-Z)</option>
              <option>Name (Z-A)</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

/* CarCard Component */
function CarCard({ car }) {
  return (
    <div className="border rounded overflow-hidden shadow hover:shadow-lg transition duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        {car.image ? (
          <img
            src={car.image}
            alt={car.name}
            className="object-cover h-full w-full"
          />
        ) : (
          <span>Image Placeholder</span>
        )}
      </div>
      <div className="p-4">
        <span className="text-sm text-gray-500">{car.category}</span>
        <h3 className="font-bold text-lg mt-2">{car.name}</h3>
        <p className="mt-1 text-gray-600">{car.details}</p>
        <p className="mt-2 text-blue-600 font-semibold">{car.price}</p>
        {car.discount && (
          <span className="mt-1 inline-block bg-red-100 text-red-600 px-2 py-1 rounded text-xs">
            {car.discount} off
          </span>
        )}
      </div>
    </div>
  );
}

/* CarList Component that maps over the cars array */
function CarList() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-4">27 cars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}

/* Footer Component */
function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-8">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="font-bold text-lg">Contact Info</h3>
          <p>Jawahar Nagar, Srinagar, Jammu and Kashmir 190008</p>
          <p>+91-8899488832</p>
          <p>topkashmirtravels@gmail.com</p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:underline">
              Facebook
            </a>
            <a href="#" className="hover:underline">
              Twitter
            </a>
            <a href="#" className="hover:underline">
              Instagram
            </a>
            <a href="#" className="hover:underline">
              Youtube
            </a>
            <a href="#" className="hover:underline">
              Pinterest
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 text-center py-4">
        © Copyright Top-Kashmir 2024-2025. All Rights Reserved.
      </div>
    </footer>
  );
}

/* Main App Component */
export default function PackageDetailPage() {
  const { packageId } = useParams();
  console.log(packageId);
  return (
    <div>
      <Header />
      <FilterBar />
      <CarList />
      <Footer />
    </div>
  );
}
