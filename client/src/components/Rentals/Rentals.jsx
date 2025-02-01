/* 
  Data for all 27 car cards.
  Each car object contains a category, name, details and price.
  The "image" field is left empty; you can replace it with the correct URL.
*/
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
  {
    id: 4,
    category: "TAXI",
    name: "Tempo Traveller 14 Seater",
    details: "13 manual 7 3",
    price: "₹4999 / day",
    image: "",
  },
  {
    id: 5,
    category: "TAXI",
    name: "Toyota Innova Crysta",
    details: "6 manual 4 4",
    price: "₹3999 / day",
    image: "",
  },
  {
    id: 6,
    category: "TAXI",
    name: "Toyota Innova",
    details: "6 manual 4 4",
    price: "₹2999 / day",
    image: "",
  },
  {
    id: 7,
    category: "TAXI",
    name: "Toyota Glanza",
    details: "4 manual 3 4",
    price: "₹2599 / day",
    image: "",
  },
  {
    id: 8,
    category: "TAXI",
    name: "Honda Amaze",
    details: "4 manual 3 4",
    price: "₹2599 / day",
    image: "",
  },
  {
    id: 9,
    category: "TAXI",
    name: "Swift Dzire",
    details: "4 manual 3 4",
    price: "₹2499 / day",
    image: "",
  },
  {
    id: 10,
    category: "TAXI",
    name: "Toyota Etios",
    details: "4 manual 3 4",
    price: "₹2399 / day",
    image: "",
  },
  {
    id: 11,
    category: "4x4",
    name: "Toyota Fortuner",
    details: "7 manual 4 4",
    price: "₹5500 / day",
    image: "",
  },
  {
    id: 12,
    category: "4x4",
    name: "New Mahindra Thar",
    details: "4 manual 3 3",
    price: "₹6500 / day",
    image: "",
  },
  {
    id: 13,
    category: "Mpv",
    name: "Toyota Innova",
    details: "6 manual 4 4",
    price: "₹6000 / day",
    image: "",
  },
  {
    id: 14,
    category: "Self drive",
    name: "New Scorpio S11",
    details: "7 manual 4 5",
    price: "₹6700 / day",
    image: "",
  },
  {
    id: 15,
    category: "4x4",
    name: "Old Mahindra Thar",
    details: "6 manual 2 3",
    price: "₹5000 / day",
    image: "",
  },
  {
    id: 16,
    category: "Self drive",
    name: "Hyundai Creta",
    details: "6 manual 5 4",
    price: "₹5000 / day",
    image: "",
  },
  {
    id: 17,
    category: "Self drive",
    name: "Xuv 500",
    details: "7 manual 3 4",
    price: "₹4300 / day",
    image: "",
  },
  {
    id: 18,
    category: "Self drive",
    name: "Old Mahindra Scorpio",
    details: "7 manual 5 5",
    price: "₹4400 / day",
    image: "",
  },
  {
    id: 19,
    category: "Compact Suv",
    name: "Kia Seltos",
    details: "5 manual 3 4",
    price: "₹4800 / day",
    image: "",
  },
  {
    id: 20,
    category: "Hatchbacks",
    name: "Maruti Suzuki Wagon R",
    details: "4 manual 3 4",
    price: "₹2800 / day",
    image: "",
  },
  {
    id: 21,
    category: "Hatchbacks",
    name: "Maruti Suzuki Baleno",
    details: "4 manual 3 4",
    price: "₹3700 / day",
    image: "",
  },
  {
    id: 22,
    category: "Hatchbacks",
    name: "Maruti Suzuki Swift Dzire",
    details: "4 manual 5 4",
    price: "₹3500 / day",
    image: "",
    discount: "10%",
  },
  {
    id: 23,
    category: "Hatchbacks",
    name: "Maruti Suzuki Swift 2024",
    details: "4 manual 3 4",
    price: "₹3300 / day",
    image: "",
  },
  {
    id: 24,
    category: "Hatchbacks",
    name: "Maruti Suzuki Alto 800",
    details: "4 manual 2 4",
    price: "₹2700 / day",
    image: "",
  },
  {
    id: 25,
    category: "Compact Suv",
    name: "Mahindra Kuv100",
    details: "5 manual 4 4",
    price: "₹4000 / day",
    image: "",
  },
  {
    id: 26,
    category: "Hatchbacks",
    name: "Ford Figo",
    details: "4 manual 2 4",
    price: "₹3000 / day",
    image: "",
  },
  {
    id: 27,
    category: "Hatchbacks",
    name: "Grand i10",
    details: "4 manual 2 4",
    price: "₹3300 / day",
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
export default function Rentals() {
  return (
    <div>
      <Header />
      <FilterBar />
      <CarList />
      <Footer />
    </div>
  );
}
