import trip01 from "./Trips01.jpg";
import trip02 from "./Trips02.jpg";
import trip03 from "./Trips03.jpg";
import trip04 from "./Trips04.jpg";
import trip05 from "./Trips05.jpg";
import trip06 from "./Trips06.jpg";
import trip07 from "./Trips07.jpg";
import trip08 from "./Trips07.jpg";
import boat01 from "./boats/boat01.jpg";
import boat02 from "./boats/boat02.jpg";
import boat03 from "./boats/boat03.jpg";
import boat04 from "./boats/boat04.jpg";
import boat05 from "./boats/boat05.jpg";
import boat06 from "./boats/boat06.jpg";
import boat07 from "./boats/boat07.jpg";
import car01 from "./cars/car01.jpeg";
import car02 from "./cars/car02.jpeg";
import car03 from "./cars/car03.jpeg";
import car04 from "./cars/car04.jpeg";
import car05 from "./cars/car05.png";
import car06 from "./cars/car06.png";
import car07 from "./cars/car07.png";
import car08 from "./cars/car08.png";
import car09 from "./cars/car09.png";
import car10 from "./cars/car10.png";
import hotel_a_00 from "./hotels/hotel_a_00.jpeg";
import hotel_a_01 from "./hotels/hotel_a_01.jpeg";
import hotel_a_02 from "./hotels/hotel_a_02.jpeg";
import hotel_a_03 from "./hotels/hotel_a_03.jpeg";
import hotel_a_04 from "./hotels/hotel_a_04.jpeg";
import hotel_a_05 from "./hotels/hotel_a_05.jpeg";
import hotel_b_00 from "./hotels/hotel_b_00.jpeg";
import hotel_b_01 from "./hotels/hotel_b_01.jpeg";
import hotel_b_02 from "./hotels/hotel_b_02.jpg";
import hotel_b_03 from "./hotels/hotel_b_03.jpeg";
import hotel_b_04 from "./hotels/hotel_b_04.jpeg";
import hotel_b_05 from "./hotels/hotel_b_05.jpg";
import hotel_c_00 from "./hotels/hotel_c_00.jpg";
import hotel_c_01 from "./hotels/hotel_c_01.jpg";
import hotel_c_02 from "./hotels/hotel_c_02.jpg";
import hotel_c_03 from "./hotels/hotel_c_03.jpg";
import hotel_c_04 from "./hotels/hotel_c_04.jpeg";
import hotel_c_05 from "./hotels/hotel_c_05.jpg";
import hotel_d_00 from "./hotels/hotel_d_00.jpeg";
import hotel_d_01 from "./hotels/hotel_d_01.jpeg";
import hotel_d_02 from "./hotels/hotel_d_02.jpeg";
import hotel_d_03 from "./hotels/hotel_d_03.jpeg";
import hotel_d_04 from "./hotels/hotel_d_04.jpeg";
import hotel_d_05 from "./hotels/hotel_d_05.jpeg";
import hotel_e_00 from "./hotels/hotel_e_00.jpeg";
import hotel_e_01 from "./hotels/hotel_e_01.jpeg";
import hotel_e_02 from "./hotels/hotel_e_02.png";
import hotel_e_03 from "./hotels/hotel_e_03.png";
import hotel_e_04 from "./hotels/hotel_e_04.png";
import hotel_e_05 from "./hotels/hotel_e_05.png";
import hotel_f_00 from "./hotels/hotel_f_00.png";
import hotel_f_01 from "./hotels/hotel_f_01.png";
import hotel_f_02 from "./hotels/hotel_f_02.png";
import hotel_f_03 from "./hotels/hotel_f_03.png";
import hotel_f_04 from "./hotels/hotel_f_04.png";
import hotel_f_05 from "./hotels/hotel_f_05.png";
import hotel_g_00 from "./hotels/hotel_g_00.png";
import hotel_g_01 from "./hotels/hotel_g_01.png";
import hotel_g_02 from "./hotels/hotel_g_02.png";
import hotel_g_03 from "./hotels/hotel_g_03.png";
import hotel_g_04 from "./hotels/hotel_g_04.png";
import hotel_g_05 from "./hotels/hotel_g_05.png";

export const iconsData = {
  sightseeing: "ri-glasses-line",
  hotel: "ri-hotel-line",
  transport: "ri-taxi-line",
  duration: "ri-hourglass-line",
  location: "ri-map-pin-line",
  freeWiFi: "ri-wifi-line",
  restaurant: "ri-restaurant-line",
  roomService: "ri-service-bell-line",
  parking: "ri-parking-box-line",
  frontDesk24x7: "ri-user-community-line",
  fineDining: "ri-restaurant-2-line",
  fitnessCenter: "ri-boxing-line",
  butlerService: "ri-team-line",
  laundryService: "ri-t-shirt-air-line",
  barLounge: "ri-goblet-2-line",
  eventFacilities: "ri-megaphone-line",
};

const packagesData = [
  {
    id: 1,
    images: [trip01, trip02, trip03],
    location: "Pahalgam",
    duration: "4",
    title: "Pahalgam Serenity Retreat",
    desc: "Escape to the enchanting valley of Pahalgam, where the pristine landscapes and tranquil river views create an unforgettable retreat. Immerse yourself in the natural beauty of sprawling meadows, lush forests, and gently flowing rivers. Experience local culture with traditional cuisine and warm hospitality, while enjoying outdoor adventures like trekking and horseback riding. This package offers a blend of relaxation and adventure in the heart of Kashmir, ensuring a rejuvenating experience away from the hustle of city life. Enjoy scenic vistas, crisp mountain air, and a peaceful atmosphere that renews your spirit. Discover the magic of Pahalgam with our curated itinerary.",
    price: "15000",
    isPopular: true,
    amenities: [
      { title: "Sightseeing", label: "sightseeing" },
      { title: "Hotel", label: "hotel" },
      { title: "Transport", label: "transport" },
      { title: 4, label: "duration" },
      { title: "Pahalgam", label: "location" },
    ],
    timelineData: [
      {
        day: "Day 1",
        title: "Arrival in Pahalgam",
        summary: "Check-in and riverside walk",
        desc: "Arrive at Pahalgam • Transfer to hotel • Evening stroll along the Lidder River • Local dinner and overnight stay",
      },
      {
        day: "Day 2",
        title: "Valley Exploration",
        summary: "Explore Betaab and Aru Valleys",
        desc: "Morning visit to Betaab Valley • Picnic lunch in Aru Valley • Leisure time on nature trails • Return by evening",
      },
      {
        day: "Day 3",
        title: "Local Culture",
        summary: "Experience local markets and crafts",
        desc: "Visit local handicraft markets • Interact with artisans • Traditional lunch • Evening cultural performance",
      },
      {
        day: "Day 4",
        title: "Farewell Pahalgam",
        summary: "Relaxation and departure",
        desc: "Spend your final day enjoying a leisurely breakfast and taking a last stroll through the scenic village. Capture the beauty of Pahalgam one last time, and reflect on the unforgettable experiences of your retreat. Bid farewell to the serene landscapes, with memories to cherish forever, as you prepare for your journey home.",
      },
    ],
  },
  {
    id: 2,
    images: [trip04, trip05, trip06],
    location: "Sonamarg",
    duration: "2",
    title: "Sonamarg Meadow Escape",
    desc: "Embark on an unforgettable journey to the captivating meadows of Sonamarg, where the golden hues of nature and majestic mountain views combine to create a serene escape. In this compact yet exhilarating two-day adventure, you will be immersed in breathtaking landscapes, from vibrant wildflowers to sweeping vistas of snow-capped peaks. Enjoy guided tours to nearby glaciers and explore charming local trails that reveal the region’s rich natural heritage. Indulge in local cuisine and experience the warm hospitality of the locals, making your stay both relaxing and invigorating. Let this escape rejuvenate your soul completely.",
    price: "10000",
    isPopular: false,
    amenities: [
      { title: "Sightseeing", label: "sightseeing" },
      { title: "Hotel", label: "hotel" },
      { title: "Transport", label: "transport" },
      { title: 2, label: "duration" },
      { title: "Sonamarg", label: "location" },
    ],
    timelineData: [
      {
        day: "Day 1",
        title: "Arrival & Glacier Tour",
        summary: "Guided tour to Thajiwas Glacier",
        desc: "Arrive in Sonamarg • Transfer to hotel • Afternoon tour to Thajiwas Glacier • Dinner at a local restaurant",
      },
      {
        day: "Day 2",
        title: "Adventure & Return",
        summary: "Local trail exploration and markets",
        desc: "Morning hike on local trails • Visit local bazaars • Check-out and transfer for departure",
      },
    ],
  },
  {
    id: 3,
    images: [trip07, trip08, trip01],
    location: "Jammu",
    duration: "3",
    title: "Jammu Heritage Tour",
    desc: "Discover the historical and cultural treasures of Jammu on this immersive three-day heritage tour. Journey through ancient forts, majestic temples, and bustling markets that showcase the region's rich traditions. Experience the architectural marvels of Bahu Fort and the spiritual serenity of revered shrines, while indulging in traditional cuisine and local crafts. This package offers an insightful glimpse into the diverse heritage of Jammu, blending history with modern comforts. Enjoy guided tours, engaging narratives from local experts, and moments of quiet reflection amid historical landmarks. Experience a journey that connects the past with the present in unforgettable ways for lasting memories.",
    price: "12000",
    isPopular: false,
    amenities: [
      { title: "Sightseeing", label: "sightseeing" },
      { title: "Hotel", label: "hotel" },
      { title: "Transport", label: "transport" },
      { title: 3, label: "duration" },
      { title: "Jammu", label: "location" },
    ],
    timelineData: [
      {
        day: "Day 1",
        title: "Arrival & Fort Visit",
        summary: "Explore Bahu Fort and temples",
        desc: "Arrive in Jammu • Transfer to hotel • Visit Bahu Fort and Raghunath Temple • Evening leisure walk",
      },
      {
        day: "Day 2",
        title: "Cultural Immersion",
        summary: "Museum tours and local markets",
        desc: "Visit the Jammu Museum • Explore bustling bazaars • Enjoy traditional cuisine • Overnight stay",
      },
      {
        day: "Day 3",
        title: "Sacred Sites & Departure",
        summary: "Tour local shrines and depart",
        desc: "Morning visit to a revered shrine • Check-out and transfer to airport • Farewell by tour representative for lasting memories.",
      },
    ],
  },
  {
    id: 4,
    images: [trip03, trip05, trip07],
    location: "Katra",
    duration: "2",
    title: "Katra Pilgrimage Journey",
    desc: "Embark on a soulful pilgrimage to Katra, home of the revered Vaishno Devi shrine. This two-day journey offers a blend of spiritual devotion and cultural discovery. Begin your experience with a warm welcome, followed by a comprehensive briefing on the sacred trek. Engage in prayers, rituals, and moments of quiet reflection that connect you with ancient traditions. Enjoy comfortable accommodations and local hospitality that enrich your journey. As you traverse scenic paths leading to the holy shrine, you will experience a profound sense of peace and renewal. Let this pilgrimage inspire your heart and soul and create everlasting cherished memories.",
    price: "8000",
    isPopular: true,
    amenities: [
      { title: "Sightseeing", label: "sightseeing" },
      { title: "Hotel", label: "hotel" },
      { title: "Transport", label: "transport" },
      { title: 2, label: "duration" },
      { title: "Katra", label: "location" },
    ],
    timelineData: [
      {
        day: "Day 1",
        title: "Arrival & Preparation",
        summary: "Check-in and pilgrimage briefing",
        description:
          "Arrive in Katra • Transfer to hotel • Briefing on the Vaishno Devi trek • Evening devotional session",
      },
      {
        day: "Day 2",
        title: "Vaishno Devi Pilgrimage",
        summary: "Complete the sacred trek and return",
        description:
          "Early morning departure • Trek to the Vaishno Devi shrine • Participate in rituals • Return to hotel and check-out and create everlasting cherished memories.",
      },
    ],
  },
  {
    id: 5,
    images: [trip01, trip03, trip02],
    location: "Doodhpathri",
    duration: "2",
    title: "Doodhpathri Nature Escape",
    desc: "Discover the untouched natural beauty of Doodhpathri, where rolling meadows and crystal clear streams provide an idyllic retreat from daily life. In this two-day getaway, explore scenic landscapes, breathe in the fresh mountain air, and witness nature at its most serene. Enjoy leisurely walks through lush meadows, experience local flora and fauna, and unwind amidst breathtaking vistas. This package combines adventure with relaxation, offering guided nature walks, comfortable accommodations, and authentic local experiences. Reconnect with nature and embrace the tranquility of Doodhpathri for a truly rejuvenating escape. Allow the peaceful surroundings to restore your energy and inspire your spirit completely.",
    price: "9500",
    isPopular: false,
    amenities: [
      { title: "Sightseeing", label: "sightseeing" },
      { title: "Hotel", label: "hotel" },
      { title: "Transport", label: "transport" },
      { title: 2, label: "duration" },
      { title: "Doodhpathri", label: "location" },
    ],
    timelineData: [
      {
        day: "Day 1",
        title: "Arrival & Meadow Walk",
        summary: "Guided walk through scenic meadows",
        description:
          "Arrive in Doodhpathri • Check-in at resort • Afternoon guided walk through meadows • Evening bonfire and dinner",
      },
      {
        day: "Day 2",
        title: "Local Exploration & Departure",
        summary: "Explore nature and depart",
        description:
          "Morning exploration of local landscapes • Photography session • Check-out and transfer for departure",
      },
    ],
  },
  {
    id: 6,
    images: [trip04, trip06, trip01],
    location: "Yusmarg",
    duration: "3",
    title: "Yusmarg Adventure Trail",
    desc: "Experience the wild beauty of Yusmarg, where verdant landscapes and rugged mountain trails invite you to an adventure of a lifetime. Over three days, immerse yourself in nature with guided treks, horseback rides, and camping under the starry sky. This package is designed for adventure enthusiasts seeking an escape into the untouched wilderness of Kashmir. Enjoy breathtaking views, serene natural settings, and thrilling outdoor activities that challenge and inspire. Experience local hospitality, savor traditional cuisine, and create memories as you explore the vibrant, untamed beauty of Yusmarg. Let every moment of this adventure fill you with joy and boundless energy.",
    price: "13000",
    isPopular: true,
    amenities: [
      { title: "Sightseeing", label: "sightseeing" },
      { title: "Hotel", label: "hotel" },
      { title: "Transport", label: "transport" },
      { title: 3, label: "duration" },
      { title: "Yusmarg", label: "location" },
    ],
    timelineData: [
      {
        day: "Day 1",
        title: "Arrival & Orientation",
        summary: "Check-in and adventure briefing",
        description: `Arrive in Yusmarg • Transfer to hotel • Safety briefing and itinerary overview • Evening campfire and local stories`,
      },
      {
        day: "Day 2",
        title: "Adventure Activities",
        summary: "Trekking, horseback riding, and exploration",
        description: `Morning trek on scenic trails • Horseback riding session • Lunch at a local eatery • Afternoon leisure exploration`,
      },
      {
        day: "Day 3",
        title: "Departure",
        summary: "Farewell and transfer",
        description: `Morning free time for relaxation • Check-out and transfer for departure • Farewell by tour representative`,
      },
    ],
  },
  {
    id: 7,
    images: [trip08, trip03, trip07],
    location: "Anantnag",
    duration: "3",
    title: "Anantnag Cultural Voyage",
    desc: "Anantnag, the cultural heart of Kashmir, offers a mesmerizing blend of history, spirituality, and natural beauty. This three-day journey takes you through its ancient temples, lush meadows, and pristine rivers. Begin with a visit to Martand Sun Temple, a stunning architectural marvel from the 8th century. Stroll through the bustling streets, rich with local handicrafts and traditional Kashmiri cuisine. Explore Verinag, the source of the Jhelum River, surrounded by enchanting Mughal gardens. Experience the serenity of Aharbal Waterfall, often called the 'Niagara of Kashmir.' This trip promises a perfect mix of heritage, adventure, and tranquility in one of Kashmir’s most vibrant towns.",
    price: "11000",
    isPopular: false,
    amenities: [
      { title: "Sightseeing", label: "sightseeing" },
      { title: "Hotel", label: "hotel" },
      { title: "Transport", label: "transport" },
      { title: 3, label: "duration" },
      { title: "Anantnag", label: "location" },
    ],
    timelineData: [
      {
        day: "Day 1",
        title: "Arrival & Local Tour",
        summary: "Discover historical landmarks",
        description: `Arrive in Anantnag • Transfer to hotel • Guided tour of historical sites • Traditional dinner and overnight stay`,
      },
      {
        day: "Day 2",
        title: "Cultural Exploration",
        summary: "Visit museums and bustling markets",
        description: `Morning visit to local museums • Explore vibrant bazaars • Taste regional cuisine • Evening cultural performance`,
      },
      {
        day: "Day 3",
        title: "Departure",
        summary: "Farewell tour and transfer",
        description: `Morning free time for last-minute sightseeing • Check-out and transfer to airport • Farewell by tour representative`,
      },
    ],
  },
];

export default packagesData;

export const hotelsData = [
  {
    id: 1,
    title: "Shuhul Resort",
    location: "Raj Bagh, Srinagar",
    category: "Standard",
    desc: "Shuhul Resort is located in the scenic Raj Bagh area of Srinagar. The resort offers comfortable and well-furnished rooms, equipped with essential amenities to ensure a relaxing stay. Guests can enjoy the peaceful environment and explore nearby attractions. The hotel also provides services such as housekeeping, parking, and a restaurant. Ideal for both business and leisure travelers, it offers excellent value for money.",
    images: [
      hotel_a_00,
      hotel_a_01,
      hotel_a_02,
      hotel_a_03,
      hotel_a_04,
      hotel_a_05,
    ],
    price: "3500",
    amenities: [
      { label: "freeWiFi", title: "Free Wifi" },
      { label: "restaurant", title: "Restaurant" },
      { label: "parking", title: "Parking" },
      { label: "eventFacilities", title: "Event Facilities" },
    ],
  },
  {
    id: 2,
    title: "Paisley Palace",
    location: "Srinagar",
    category: "Premium",
    desc: "Paisley Palace is a luxurious 3-star hotel, conveniently located 15 km from Srinagar Airport. The hotel offers premium services, including a fine-dining restaurant, a health club, and conference facilities. The rooms are designed for comfort with modern furnishings, and guests can enjoy a range of recreational activities. It is an ideal choice for travelers seeking comfort, convenience, and luxury in the heart of Srinagar.",
    images: [
      hotel_b_00,
      hotel_b_01,
      hotel_b_02,
      hotel_b_03,
      hotel_b_04,
      hotel_b_05,
    ],
    price: "6500",
    amenities: [
      { label: "roomService", title: "Room Service" },
      { label: "fineDining", title: "Fine Dining" },
      { label: "laundryService", title: "Laundry Service" },
      { label: "fitnessCenter", title: "Fitness Center" },
    ],
  },
  {
    id: 3,
    title: "Lime Wood Inn",
    location: "Sonwar Bagh, Srinagar",
    category: "Standard",
    desc: "Lime Wood Inn offers a charming stay in the heart of Sonwar Bagh, Srinagar. The hotel combines comfort with convenience, featuring well-equipped rooms, friendly service, and affordable rates. It is a perfect base for exploring Srinagar’s scenic spots. Guests can enjoy modern amenities such as Wi-Fi, air-conditioning, and room service. The Inn also offers a cozy restaurant serving local and international dishes, ensuring a delightful stay for all visitors.",
    images: [
      hotel_c_00,
      hotel_c_01,
      hotel_c_02,
      hotel_c_03,
      hotel_c_04,
      hotel_c_05,
    ],
    price: "4000",
    amenities: [
      { label: "frontDesk24x7", title: "Front Desk 24/7" },
      { label: "butlerService", title: "Butler Service" },
      {
        label: "traditionalKashmiriDecor",
        title: "Traditional Kashmiri Decor",
      },
      { label: "barLounge", title: "Bar Lounge" },
    ],
  },
  {
    id: 4,
    title: "Hotel German Residency",
    location: "Near M.A Link Road, Srinagar",
    category: "Standard",
    desc: "Hotel German Residency provides a warm, comfortable atmosphere for travelers visiting Srinagar. Situated near M.A Link Road, this 3-star hotel is known for its cozy rooms and convenient location. Guests can enjoy quick access to shopping, dining, and cultural attractions. The hotel offers a variety of services, including free Wi-Fi, parking, and room service. The rooms are tastefully furnished, with modern amenities to ensure a relaxing stay for all guests.",
    images: [
      hotel_d_00,
      hotel_d_01,
      hotel_d_02,
      hotel_d_03,
      hotel_d_04,
      hotel_d_05,
    ],
    price: "3200",
    amenities: [
      { label: "restaurant", title: "Restaurant" },
      { label: "parking", title: "Parking" },
      { label: "laundryService", title: "Laundry Service" },
    ],
  },
  {
    id: 5,
    title: "Hotel Diwan Srinagar",
    location: "Srinagar",
    category: "Premium",
    desc: "Hotel Diwan Srinagar offers a perfect blend of traditional Kashmiri architecture and modern luxury. Located in a serene part of Srinagar, it features spacious, elegantly designed rooms with views of the beautiful surroundings. The hotel also offers a fine-dining restaurant and a health club for relaxation. Ideal for business and leisure travelers, it ensures a comfortable stay with premium amenities, including a bar/lounge and event hosting facilities.",
    images: [
      hotel_e_00,
      hotel_e_01,
      hotel_e_02,
      hotel_e_03,
      hotel_e_04,
      hotel_e_05,
    ],
    price: "7500",
    amenities: [
      { label: "freeWiFi", title: "Free Wifi" },
      { label: "roomService", title: "Room Service" },
      { label: "fineDining", title: "Fine Dining" },
      { label: "eventFacilities", title: "Event Facilities" },
      { label: "barLounge", title: "Bar Lounge" },
    ],
  },
  {
    id: 6,
    title: "Hotel City Grace",
    location: "Srinagar",
    category: "Budget",
    desc: "Hotel City Grace offers a budget-friendly option for travelers looking for a comfortable and convenient stay in Srinagar. Located in the city center, the hotel provides easy access to popular tourist spots. It features simple yet well-equipped rooms with essential amenities. The hotel’s staff is known for their hospitality, offering services like free Wi-Fi, parking, and room service. A great choice for travelers on a budget without compromising on quality.",
    images: [
      hotel_f_00,
      hotel_f_01,
      hotel_f_02,
      hotel_f_03,
      hotel_f_04,
      hotel_f_05,
    ],
    price: "2500",
    amenities: [
      { label: "frontDesk24x7", title: "Front Desk 24/7" },
      { label: "butlerService", title: "Butler Service" },
      { label: "fitnessCenter", title: "Fitness Center" },
      { label: "laundryService", title: "Laundry Service" },
      { label: "barLounge", title: "Bar Lounge" },
    ],
  },
  {
    id: 7,
    title: "Heritage Luxury Srinagar",
    location: "Near Srinagar Airport",
    category: "Premium",
    desc: "Hotel Heritage Luxury offers a premium stay near Srinagar Airport, designed for those seeking a luxurious experience. This 3-star hotel features spacious rooms with modern decor, including air-conditioning, Wi-Fi, and satellite TV. The hotel provides high-end amenities like an on-site restaurant, fitness center, and concierge services. It’s perfect for both short stays and longer visits, ensuring that every guest receives the best service in a tranquil setting.",
    images: [
      hotel_g_00,
      hotel_g_01,
      hotel_g_02,
      hotel_g_03,
      hotel_g_04,
      hotel_g_05,
    ],
    price: "8000",
    amenities: [
      { label: "restaurant", title: "Restaurant" },
      { label: "parking", title: "Parking" },
      { label: "freeWiFi", title: "Free Wifi" },
      { label: "eventFacilities", title: "Event Facilities" },
    ],
  },
];

export const boatsData = [
  {
    id: 1,
    title: "Royal Shikara Houseboat",
    location: "Dal Lake, Srinagar",
    category: "Luxury",
    desc: "Experience the charm of Kashmiri hospitality at Royal Shikara Houseboat, floating on the serene waters of Dal Lake. This luxury houseboat features elegantly designed rooms with intricate wood carvings, Wi-Fi, and modern amenities. Enjoy breathtaking lake views, traditional Kashmiri meals, and personalized service for a truly memorable stay.",
    images: [boat01],
    price: "12000",
    amenities: [
      { label: "restaurant", title: "Restaurant" },
      { label: "parking", title: "Parking" },
      { label: "freeWiFi", title: "Free Wifi" },
      { label: "eventFacilities", title: "Event Facilities" },
    ],
  },
  {
    id: 2,
    title: "Heavenly Retreat Houseboat",
    location: "Nigeen Lake, Srinagar",
    category: "Premium",
    desc: "Nestled in the peaceful waters of Nigeen Lake, Heavenly Retreat Houseboat offers a premium stay with beautifully decorated interiors and a touch of Kashmiri heritage. Each room is well-equipped with modern comforts like air-conditioning, Wi-Fi, and a private balcony overlooking the lake. Enjoy a relaxing stay with warm hospitality and delicious Kashmiri cuisine.",
    images: [boat02],
    price: "10000",
    amenities: [
      { label: "frontDesk24x7", title: "Front Desk 24/7" },
      { label: "butlerService", title: "Butler Service" },
      { label: "fitnessCenter", title: "Fitness Center" },
      { label: "laundryService", title: "Laundry Service" },
      { label: "barLounge", title: "Bar Lounge" },
    ],
  },
  {
    id: 3,
    title: "Floating Paradise Houseboat",
    location: "Dal Lake, Srinagar",
    category: "Budget",
    desc: "Floating Paradise Houseboat provides a cozy and affordable stay on Dal Lake, ideal for travelers looking for an authentic houseboat experience. The houseboat offers traditionally designed rooms with wooden paneling, basic amenities, and a stunning sunrise view over the lake. Perfect for budget travelers seeking a peaceful escape.",
    images: [boat03],
    price: "5000",
    amenities: [
      { label: "freeWiFi", title: "Free Wifi" },
      { label: "roomService", title: "Room Service" },
      { label: "fineDining", title: "Fine Dining" },
      { label: "eventFacilities", title: "Event Facilities" },
      { label: "barLounge", title: "Bar Lounge" },
    ],
  },
  {
    id: 4,
    title: "Golden Lotus Houseboat",
    location: "Jhelum River, Srinagar",
    category: "Mid-range",
    desc: "Golden Lotus Houseboat offers a blend of comfort and tradition on the tranquil Jhelum River. Guests can enjoy spacious rooms with Kashmiri carpets, modern bathrooms, and a relaxing deck area. Ideal for families and couples looking for a unique water-living experience with warm hospitality.",
    images: [boat04],
    price: "7500",
    amenities: [
      { label: "restaurant", title: "Restaurant" },
      { label: "parking", title: "Parking" },
      { label: "laundryService", title: "Laundry Service" },
    ],
  },
  {
    id: 5,
    title: "Majestic Waves Houseboat",
    location: "Dal Lake, Srinagar",
    category: "Luxury",
    desc: "Majestic Waves Houseboat offers an opulent retreat on Dal Lake, featuring handcrafted wooden interiors, plush bedding, and top-notch amenities. Guests can savor authentic Kashmiri cuisine, enjoy guided shikara rides, and immerse themselves in the breathtaking beauty of the lake.",
    images: [boat05],
    price: "14000",
    amenities: [
      { label: "frontDesk24x7", title: "Front Desk 24/7" },
      { label: "butlerService", title: "Butler Service" },
      {
        label: "traditionalKashmiriDecor",
        title: "Traditional Kashmiri Decor",
      },
      { label: "barLounge", title: "Bar Lounge" },
    ],
  },
  {
    id: 6,
    title: "Tranquil Shores Houseboat",
    location: "Nigeen Lake, Srinagar",
    category: "Premium",
    desc: "Perfectly positioned in the serene Nigeen Lake, Tranquil Shores Houseboat offers a peaceful escape with elegantly designed rooms, modern amenities, and warm hospitality. Guests can relax on the sundeck, enjoy panoramic views, and experience the best of Kashmiri traditions.",
    images: [boat06],
    price: "9500",
    amenities: [
      { label: "roomService", title: "Room Service" },
      { label: "fineDining", title: "Fine Dining" },
      { label: "laundryService", title: "Laundry Service" },
      { label: "fitnessCenter", title: "Fitness Center" },
    ],
  },
  {
    id: 7,
    title: "Sunset Bliss Houseboat",
    location: "Dal Lake, Srinagar",
    category: "Mid-range",
    desc: "Sunset Bliss Houseboat is known for its mesmerizing sunset views over Dal Lake. With cozy rooms featuring traditional wooden paneling, modern amenities, and an inviting common area, this houseboat is a perfect choice for travelers seeking comfort and an authentic Kashmiri experience.",
    images: [boat07],
    price: "7000",
    amenities: [
      { label: "freeWiFi", title: "Free Wifi" },
      { label: "restaurant", title: "Restaurant" },
      { label: "parking", title: "Parking" },
      { label: "eventFacilities", title: "Event Facilities" },
    ],
  },
];

export const carsData = [
  {
    id: 1,
    title: "Maruti Suzuki Swift",
    location: "Srinagar - Budgam",
    price: 5500,
    images: [car01],
    passengers: 5,
    baggage: 2,
    desc: "The Maruti Suzuki Swift is a perfect blend of style and efficiency, designed for both dynamic city driving and scenic escapes across Kashmir. With agile handling, modern safety features, and an economical engine, this compact car promises a smooth ride on busy urban roads as well as winding country lanes. Its comfortable, thoughtfully designed interior makes every journey enjoyable and stress-free, while advanced technology enhances every drive. The Swift is an ideal choice for those who seek reliability combined with performance.",
    amenities: [
      { label: "acHeater", title: "Ac/Heater" },
      { label: "airbag", title: "Airbag" },
      { label: "chargingPoint", title: "Charging Point" },
      { label: "familyDriver", title: "Family Friendly Driver" },
      { label: "musicSystem", title: "Music System" },
    ],
  },
  {
    id: 2,
    title: "Hyundai Creta",
    location: "Srinagar - Chodura",
    price: 35000,
    images: [car02],
    passengers: 5,
    baggage: 3,
    desc: "Experience sophistication and robust performance with the Hyundai Creta, an SUV engineered to handle both bustling city streets and rugged terrain. The spacious interior and state-of-the-art technology ensure a secure and comfortable journey. Every detail, from the ergonomic seating to the intuitive infotainment system, has been meticulously designed to enhance your driving pleasure. Ideal for exploring the diverse landscapes of Kashmir, the Creta combines style, power, and advanced safety features to deliver a truly memorable travel experience.",
    amenities: [
      { label: "gpsNavigation", title: "GPS Navigation" },
      { label: "bluetooth", title: "Bluetooth Connectivity" },
      { label: "airbag", title: "Airbag" },
      { label: "acHeater", title: "Ac/Heater" },
      { label: "localInsight", title: "Local Insight" },
      { label: "sunroof", title: "Sunroof" },
    ],
  },
  {
    id: 3,
    title: "Tata Nexon",
    location: "Srinagar",
    price: 5000,
    images: [car03],
    passengers: 5,
    baggage: 3,
    desc: "Discover the dynamic performance of the Tata Nexon, a compact SUV built for both urban adventures and off-road escapades. Its bold design is complemented by advanced safety features and efficient performance that deliver a smooth ride on challenging roads. The modern cabin is spacious and equipped with innovative technology to keep you connected on every journey. Designed with both style and practicality in mind, the Nexon offers a reliable driving experience that adapts perfectly to the diverse landscapes of Kashmir.",
    amenities: [
      { label: "cruiseControl", title: "Cruise Control" },
      { label: "touchscreen", title: "Touchscreen Display" },
      { label: "rearCamera", title: "Rear Camera" },
      { label: "airbag", title: "Airbag" },
      { label: "musicSystem", title: "Music System" },
      { label: "acHeater", title: "Ac/Heater" },
    ],
  },
  {
    id: 4,
    title: "Mahindra Scorpio-N",
    location: "Srinagar - Budgam",
    price: 3500,
    images: [car04],
    passengers: 7,
    baggage: 4,
    desc: "Conquer challenging roads with the Mahindra Scorpio-N, a robust SUV engineered for superior performance and durability. This powerful vehicle is built to tackle both urban congestion and off-road adventures in the scenic regions of Kashmir. Featuring a spacious interior with modern amenities, advanced safety systems, and a commanding engine, the Scorpio-N ensures stability and comfort on every journey. Its rugged design is harmoniously blended with contemporary technology to provide a secure, exhilarating driving experience without compromising on luxury.",
    amenities: [
      { label: "leatherSeats", title: "Leather Seats" },
      { label: "heatedSeats", title: "Heated Seats" },
      { label: "gpsNavigation", title: "GPS Navigation" },
      { label: "rearCamera", title: "Rear Camera" },
      { label: "acHeater", title: "Ac/Heater" },
      { label: "airbag", title: "Airbag" },
      { label: "chargingPoint", title: "Charging Point" },
    ],
  },
  {
    id: 5,
    title: "Kia Seltos",
    location: "Srinagar - Jammu",
    price: 2000,
    images: [car05],
    passengers: 5,
    baggage: 3,
    desc: "Embrace modern luxury with the Kia Seltos, a stylish SUV that perfectly balances innovative design with exceptional performance. Its refined interior, intuitive controls, and versatile features make every journey both comfortable and connected. Ideal for navigating the busy urban centers and serene countryside of Kashmir, the Seltos delivers a smooth, secure ride. With a focus on safety and modern convenience, this vehicle is tailored for drivers who value technology, aesthetics, and efficiency, ensuring a travel experience that is as memorable as it is reliable.",
    amenities: [
      { label: "localInsight", title: "Local Insight" },
      { label: "bluetooth", title: "Bluetooth Connectivity" },
      { label: "musicSystem", title: "Music System" },
      { label: "familyDriver", title: "Family Friendly Driver" },
      { label: "keylessEntry", title: "Keyless Entry" },
    ],
  },
  {
    id: 6,
    title: "Toyota Innova Crysta",
    location: "Srinagar - Barahmulla",
    price: 9000,
    images: [car06],
    passengers: 7,
    baggage: 5,
    desc: "Step into spacious elegance with the Toyota Innova Crysta, a premium vehicle designed for family travel and group adventures across the diverse landscapes of Kashmir. Boasting a roomy, well-appointed cabin and versatile seating configurations, this vehicle ensures comfort and convenience on long journeys. Advanced safety features, modern infotainment, and a robust engine combine to deliver a secure and pleasurable ride. The Innova Crysta is perfect for both leisurely trips and practical daily use, offering a harmonious blend of luxury, performance, and reliability that caters to every travel need.",
    amenities: [
      { label: "acHeater", title: "Ac/Heater" },
      { label: "airbag", title: "Airbag" },
      { label: "chargingPoint", title: "Charging Point" },
      { label: "cruiseControl", title: "Cruise Control" },
      { label: "gpsNavigation", title: "GPS Navigation" },
      { label: "touchscreen", title: "Touchscreen Display" },
      { label: "sunroof", title: "Sunroof" },
    ],
  },
  {
    id: 7,
    title: "Honda City",
    location: "Srinagar - Budgam",
    price: 1500,
    images: [car07],
    passengers: 5,
    baggage: 3,
    desc: "Experience the perfect combination of sophistication and efficiency with the Honda City, a sedan that redefines urban commuting. Designed with precision and an emphasis on comfort, this vehicle features a spacious interior, modern safety features, and impressive fuel economy. The sleek exterior and smooth handling make it ideal for navigating the bustling streets and tranquil highways of Kashmir. Every journey becomes more enjoyable thanks to its thoughtful design and advanced technology, ensuring that you travel in both style and confidence.",
    amenities: [
      { label: "airbag", title: "Airbag" },
      { label: "localInsight", title: "Local Insight" },
      { label: "bluetooth", title: "Bluetooth Connectivity" },
      { label: "familyDriver", title: "Family Friendly Driver" },
      { label: "rearCamera", title: "Rear Camera" },
      { label: "keylessEntry", title: "Keyless Entry" },
    ],
  },
  {
    id: 8,
    title: "Maruti Suzuki Ertiga",
    location: "Srinagar - Anantnag",
    price: 1000,
    images: [car08],
    passengers: 7,
    baggage: 4,
    desc: "Discover practicality and versatility with the Maruti Suzuki Ertiga, a multi-purpose vehicle designed to accommodate both family outings and daily commutes. With a spacious cabin, flexible seating arrangements, and modern amenities, the Ertiga ensures every trip is comfortable and convenient. Its efficient performance, coupled with robust safety features, makes it an ideal choice for exploring the varied landscapes of Kashmir. Enjoy a reliable, economical ride that doesn’t compromise on comfort or style, making each journey as enjoyable as it is practical.",
    amenities: [
      { label: "acHeater", title: "Ac/Heater" },
      { label: "airbag", title: "Airbag" },
      { label: "gpsNavigation", title: "GPS Navigation" },
      { label: "leatherSeats", title: "Leather Seats" },
      { label: "heatedSeats", title: "Heated Seats" },
      { label: "musicSystem", title: "Music System" },
      { label: "touchscreen", title: "Touchscreen Display" },
      { label: "chargingPoint", title: "Charging Point" },
    ],
  },
  {
    id: 9,
    title: "MG Hector",
    location: "Srinagar - Budgam",
    price: 4500,
    images: [car09],
    passengers: 5,
    baggage: 4,
    desc: "Elevate your driving experience with the MG Hector, a bold SUV that blends striking design with advanced technology and luxurious comfort. Engineered for dynamic performance, this vehicle features a spacious cabin, state-of-the-art infotainment system, and robust safety features that ensure a secure ride. Whether traversing urban avenues or exploring the scenic routes of Kashmir, the Hector delivers exceptional power and refinement. Its premium materials and innovative design make every journey not only safe but also remarkably enjoyable and stylish.",
    amenities: [
      { label: "acHeater", title: "Ac/Heater" },
      { label: "airbag", title: "Airbag" },
      { label: "familyDriver", title: "Family Friendly Driver" },
      { label: "cruiseControl", title: "Cruise Control" },
      { label: "rearCamera", title: "Rear Camera" },
      { label: "keylessEntry", title: "Keyless Entry" },
      { label: "localInsight", title: "Local Insight" },
      { label: "bluetooth", title: "Bluetooth Connectivity" },
    ],
  },
  {
    id: 10,
    title: "Tata Harrier",
    location: "Srinagar - Budgam",
    price: 7000,
    images: [car10],
    passengers: 5,
    baggage: 4,
    desc: "Redefine your adventures with the Tata Harrier, a sophisticated SUV that epitomizes power, style, and modern innovation. With a commanding presence and an impeccably designed interior, this vehicle offers advanced safety features, luxurious comfort, and state-of-the-art technology for an unparalleled driving experience. Whether maneuvering through urban landscapes or exploring rugged terrains, the Harrier delivers a smooth and confident ride. Every detail, from its bold exterior to its ergonomic cabin, has been crafted to ensure that every journey across the majestic vistas of Kashmir is both extraordinary and memorable.",
    amenities: [
      { label: "acHeater", title: "Ac/Heater" },
      { label: "airbag", title: "Airbag" },
      { label: "chargingPoint", title: "Charging Point" },
      { label: "gpsNavigation", title: "GPS Navigation" },
      { label: "sunroof", title: "Sunroof" },
      { label: "leatherSeats", title: "Leather Seats" },
      { label: "touchscreen", title: "Touchscreen Display" },
      { label: "cruiseControl", title: "Cruise Control" },
      { label: "rearCamera", title: "Rear Camera" },
    ],
  },
];
