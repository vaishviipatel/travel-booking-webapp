import React, { useState, useMemo } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import { useAuth } from "../context/AuthContext.jsx";
import { useBookings } from "../context/BookingContext.jsx";
import "./Packages.css";
import AdminPackageEditor from "../components/AdminPackageEditor";


const travelPlans = {
  "Darjeeling Tea Trails": [
    "Day 1: Arrival at Darjeeling - leisure and local walk",
    "Day 2: Tiger Hill sunrise and Batasia Loop visit",
    "Day 3: Visit to Tea Gardens and Museum",
    "Day 4: Explore local markets and Peace Pagoda",
    "Day 5: Departure from Darjeeling"
  ],
  "Sikkim Serenity": [
    "Day 1: Arrival at Gangtok",
    "Day 2: Visit Tsomgo Lake and Baba Mandir",
    "Day 3: Transfer to Yumthang Valley",
    "Day 4: Explore hot springs and zero point",
    "Day 5: Return to Gangtok and leisure time",
    "Day 6: Departure from Sikkim"
  ],
  "Golden Temple": [
    "Day 1: Arrival at Amritsar and local market visit",
    "Day 2: Golden Temple visit and Jallianwala Bagh",
    "Day 3: Wagah Border ceremony",
    "Day 4: Local food tour and departure"
  ],
  "Rann of Kutch Festival": [
    "Day 1: Arrival in Bhuj and local sightseeing",
    "Day 2: White Desert experience and cultural program",
    "Day 3: Visit to handicraft villages and Mandvi beach",
    "Day 4: Departure from Kutch"
  ],
  "Bangkok Buzz Tour": [
    "Day 1: Arrival in Bangkok and evening boat ride",
    "Day 2: Grand Palace and Wat Arun tour",
    "Day 3: Chatuchak Market shopping and Thai food",
    "Day 4: Safari World or Dream World theme park",
    "Day 5: Floating Market + leisure evening",
    "Day 6: Departure from Bangkok"
  ],
  "Barcelonian Streets": [
    "Day 1: Arrival and La Rambla street walk",
    "Day 2: Visit to Sagrada Familia and Gothic Quarter",
    "Day 3: Explore Park Güell and Montjuïc",
    "Day 4: Picasso Museum + local tapas tasting",
    "Day 5: Shopping and Barceloneta Beach",
    "Day 6: Leisure + Departure",
    "Day 7: Buffer day / flexible itinerary or extended stay"
  ],
  "Cape Town Adventure": [
    "Day 1: Arrival and V&A Waterfront visit",
    "Day 2: Hike or cable car to Table Mountain",
    "Day 3: Robben Island and city museum tours",
    "Day 4: Cape Point and Boulders Beach (penguins!)",
    "Day 5: Local culture, winery or safari tour",
    "Day 6: Departure from Cape Town"
  ],
  "Devki Spiritual Walk": [
    "Day 1: Arrival at Devki and Yamuna River meditation",
    "Day 2: Devki Temple visit and local ashram activities",
    "Day 3: Morning yoga + local village walk + departure"
  ],
  "Diskit Monastery Tour": [
    "Day 1: Arrival at Leh and acclimatization",
    "Day 2: Drive to Nubra Valley via Khardung La",
    "Day 3: Visit Diskit Monastery and Hunder sand dunes",
    "Day 4: Return to Leh + souvenir shopping",
    "Day 5: Departure from Leh"
  ],
  "Goa Party Nights": [
    "Day 1: Arrival at Goa and relax on Baga Beach",
    "Day 2: Fort Aguada visit + Tito’s Lane party night",
    "Day 3: Local shopping and beach sports",
    "Day 4: Departure from Goa"
  ],
  "Halong Bay Cruise": [
    "Day 1: Arrival in Hanoi and transfer to Halong",
    "Day 2: Cruise to Titop Island + kayaking",
    "Day 3: Floating villages tour and onboard activities",
    "Day 4: Return to port + departure"
  ],
  "Hong Kong Explorer": [
    "Day 1: Arrival and night market walk",
    "Day 2: Peak Tram to Victoria Peak + Star Ferry ride",
    "Day 3: Disneyland full day experience",
    "Day 4: Big Buddha + Ngong Ping 360 Cable Car",
    "Day 5: Tsim Sha Tsui shopping and evening harbor view",
    "Day 6: Departure from Hong Kong"
  ]
};

                                                    
const featuredPackage = {
  title: "Tropical Goa Getaway",
  location: "Goa, India",
  description:
    "Escape to Goa where pristine beaches meet vibrant culture. Enjoy luxury stays, water sports, and local cuisines.",
  price: "$2100",
  duration: "6 Nights / 7 Days",
  tags: ["All-Inclusive", "Luxury Stay", "Water Sports", "Nightlife", "Cultural Shows"],
  image: "/images/Goa-India.jpg",
};

const popularPackages = [
  {
    title: "Darjeeling Tea Trails",
    image: "/images/darjeeling.jpg",
    description: "Explore the enchanting hill town of Darjeeling, nestled in the Himalayas. Wake up to breathtaking views from Tiger Hill, stroll through the aromatic Tea Gardens, and experience the charm of the Batasia Loop with its panoramic landscapes and historic significance. A perfect retreat for nature lovers and peace seekers.",

    price: "$1500",
    bestPlaces: ["Tiger Hill", "Tea Gardens", "Batasia Loop"],
    bestSeason: "March to May",
    duration: "4 Nights / 5 Days",
  },
  {
    title: "Sikkim Serenity",
    image: "/images/sikkim.jpg",
    description: "Discover the serene beauty of Sikkim, where snow-capped mountains meet spiritual tranquility. Visit the crystal-clear Tsomgo Lake, the flower-laden Yumthang Valley, and the vibrant capital city of Gangtok. Ideal for adventurers, spiritual seekers, and photographers.",

    price: "$1800",
    bestPlaces: ["Tsomgo Lake", "Yumthang Valley", "Gangtok"],
    bestSeason: "April to June",
    duration: "5 Nights / 6 Days",

  },
  {
    title: "Golden Temple",
    image: "/images/golden-temple.jpg",
    description: "Immerse yourself in spirituality and history with a visit to Amritsar’s iconic Golden Temple. Witness the shimmering sanctum, pay respects at Jallianwala Bagh, and feel the patriotic spirit at the Wagah Border ceremony. A soulful experience of India’s rich culture.",

    price: "$2000",
    bestPlaces: ["Golden Temple", "Jallianwala Bagh", "Wagah Border"],
    bestSeason: "November to March",
    duration: "3 Nights / 4 Days",
  },

  {
    title: "Rann of Kutch Festival",
    image: "/images/kutch.jpg",
    description: "Celebrate Gujarat’s culture at the vibrant Rann Utsav in the white salt desert of Kutch. Dance to folk tunes, witness colorful handicrafts, and visit surreal landscapes like Kalo Dungar and Bhuj. A dazzling fusion of tradition, nature, and festivity.",

    price: "$2200",
    bestPlaces: ["White Desert", "Bhuj", "Kalo Dungar"],
    bestSeason: "October to February",
    duration: "4 Nights / 5 Days",
  },
  {
    title: "Bangkok Buzz Tour",
    image: "/images/bangkok.jpg",
    description: "Get swept up in the excitement of Bangkok, Thailand’s capital of contrast. Tour the majestic Grand Palace, marvel at Wat Arun, and shop your heart out at Chatuchak Market. This package blends history, spirituality, and vibrant nightlife in one exotic mix.",

    price: "$2900",
    bestPlaces: ["Grand Palace", "Wat Arun", "Chatuchak Market"],
    bestSeason: "November to February",
    duration: "5 Nights / 6 Days",
  },
  {
    title: "Barcelonian Streets",
    image: "/images/barcelona.jpeg",
    description: "Wander through Barcelona’s artistic streets, where Gaudí’s masterpieces meet Mediterranean charm. Stroll La Rambla, marvel at the Sagrada Familia, and relax in the whimsical Park Güell. A paradise for architecture lovers and cultural explorers.",

    price: "$400",
    bestPlaces: ["La Rambla", "Sagrada Familia", "Park Güell"],
    bestSeason: "May to June",
    duration: "6 Nights / 7 Days",
  },
  {
    title: "Cape Town Adventure",
    image: "/images/cape.jpg",
    description: "Embark on an unforgettable adventure in Cape Town, South Africa. Hike up Table Mountain for panoramic views, visit the historic Robben Island, and journey to the dramatic cliffs of Cape Point. Ideal for wildlife enthusiasts, hikers, and history buffs.",

    price: "$400",
    bestPlaces: ["Table Mountain", "Cape Point", "Robben Island"],
    bestSeason: "October to April",
    duration: "5 Nights / 6 Days",
  },
  {
    title: "Devki Spiritual Walk",
    image: "/images/devki.jpeg",
    description: "Reconnect with your spiritual side in Devki. Visit the sacred Devki Temple, meditate along the serene Yamuna River, and engage with the local ashram community. A peaceful getaway for spiritual seekers and cultural immersion.",

    price: "$1200",
    bestPlaces: ["Devki Temple", "Yamuna River Banks", "Local Ashrams"],
    bestSeason: "August to February",
    duration: "2 Nights / 3 Days",
  },
  {
    title: "Diskit Monastery Tour",
    image: "/images/diskit.jpeg",
    description: "Experience the tranquil beauty of Ladakh with a visit to Diskit Monastery and the magical Nubra Valley. Ride camels over the Hunder Sand Dunes, explore Buddhist heritage, and marvel at the stark yet stunning Himalayan desert landscape.",

    price: "$2600",
    bestPlaces: ["Diskit Monastery", "Nubra Valley", "Hunder Sand Dunes"],
    bestSeason: "May to September",
    duration: "4 Nights / 5 Days",
  },
  {
    title: "Goa Party Nights",
    image: "/images/goa.jpeg",
    description: "Dance the night away on Goa’s vibrant beaches! Enjoy the buzz of Baga Beach, explore the colonial charm of Fort Aguada, and party till dawn on Tito’s Lane. Perfect for beach lovers and nightlife enthusiasts.",

    price: "$2100",
    bestPlaces: ["Baga Beach", "Fort Aguada", "Tito's Lane"],
    bestSeason: "November to February",
    duration: "3 Nights / 4 Days",
  },
  {
    title: "Halong Bay Cruise",
    image: "/images/Halong.jpeg",
    description: "Sail across Vietnam’s scenic Halong Bay with its emerald waters and limestone karsts. Visit floating villages, kayak around Titop Island, and relax aboard a luxury cruise. A dreamy escape into nature and tranquility.",

    price: "$3300",
    bestPlaces: ["Halong Bay", "Titop Island", "Floating Villages"],
    bestSeason: "October to April",
    duration: "4 Nights / 4 Days",
  },
  {
    title: "Hong Kong Explorer",
    image: "/images/hongkong.jpeg",
    description: "Unleash your inner explorer in Hong Kong! Ride the Peak Tram to Victoria Peak, relive your childhood at Disneyland, and shop in the lively streets of Tsim Sha Tsui. A blend of modern skyline, cultural heritage, and family fun.",

    price: "$3800",
    bestPlaces: ["Victoria Peak", "Disneyland", "Tsim Sha Tsui"],
    bestSeason: "October to December",
    duration: "5 Nights / 6 Days",
  }


  // Add more popular packages as needed
];

const recommendedPackages = [
  { title: "Kerala Backwaters", image: "/images/kerala.jpg", description: "Glide through the tranquil backwaters of Kerala on a traditional houseboat. Experience the lush landscapes, coconut palms, and quiet village life that make this region one of India’s most relaxing escapes.",
 price: "$2500" },
  { title: "Himalayan Trek", image: "/images/himalaya.jpg", description: "Embark on a thrilling trek across the mighty Himalayas. Encounter breathtaking mountain views, high-altitude passes, and remote villages as you connect with nature in its purest form.",
 price: "$2700" },
  { title: "Andaman Islands", image: "/images/andaman.jpg", description: "Escape to the tropical paradise of the Andaman Islands. Bask on pristine beaches, snorkel among coral reefs, and explore colonial history at Ross Island. A must-visit for beach lovers and underwater adventurers.",
 price: "$3000" },
  { title: "Jaipur Heritage Tour", image: "/images/jaipur.jpg",description: "Step into Rajasthan’s royal history in the Pink City of Jaipur. Visit grand forts, colorful bazaars, and ornate palaces, while soaking in the vibrant culture and traditions of the Rajput kings.",
 price: "$1600" },
  { title: "Dubai Desert Escape", image: "/images/dubai.jpg", description: "Dive into luxury and adventure in the dazzling city of Dubai. Go dune bashing in the desert, explore towering skyscrapers, and experience traditional souks and futuristic malls all in one trip.",
 price: "$3200" },
  { title: "Bali Island Retreat", image: "/images/bali.jpg",description: "Find your zen on the serene island of Bali. Relax on sandy beaches, meditate at ancient temples, and indulge in spa treatments surrounded by lush tropical forests and rice terraces.",
 price: "$2800" },
   { title: "Gokarna Beach Camp", image: "/images/gokarna.jpeg", description: "Unwind at the peaceful beaches of Gokarna with campfires, seaside yoga, and cozy tents under the stars. A perfect blend of relaxation and spirituality away from the hustle of commercial beaches.",
 price: "$1800" },
  { title: "Kashmir Heaven Tour", image: "/images/kashmir.jpg", description: "Explore the unmatched beauty of Kashmir, often called Heaven on Earth. From the serene Dal Lake to snow-capped mountains and colorful gardens, every view is a postcard moment.",
 price: "$3500" },
  { title: "Himachal Hill Adventure", image: "/images/himachal.jpg",description: "Discover Himachal Pradesh’s natural charm with its snow-covered peaks, pine forests, and gushing rivers. Whether you seek adventure or serenity, these hills offer the perfect escape.",
 price: "$2400" },
  { title: "Jaisalmer Desert Safari", image: "/images/jaisalmer.jpeg", description: "Ride into the golden sands of Jaisalmer for a royal desert experience. Camp under the stars, enjoy traditional folk music, and witness the grandeur of forts and havelis carved in yellow sandstone.",
 price: "$2200" },
  { title: "Kutch Festival Tour", image: "/images/kutch.jpg", description: "Join the vibrant celebration of Gujarat’s culture at the Rann Utsav. See traditional crafts, folk performances, and the surreal beauty of the white desert under the moonlight.",
 price: "$2300" },
  { title: "Istanbul Cultural Tour", image: "/images/istanbull.jpg", description: "Roam the ancient city of Istanbul where East meets West. Visit the Blue Mosque, cruise the Bosphorus, and wander through centuries-old bazaars for a taste of Turkey’s rich history and vibrant life.",
 price: "$3800" }

];
export default function Packages() {
  const { user } = useAuth();
  const { addBooking } = useBookings();
  const isAdmin = user?.role === "admin";

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Admin states
  const [editorOpen, setEditorOpen] = useState(false);
  const [currentPackage, setCurrentPackage] = useState(null);
  const [isAddMode, setIsAddMode] = useState(false);

  // Booking states
  const [bookingFormOpen, setBookingFormOpen] = useState(false);
  const [travelersDetailsOpen, setTravelersDetailsOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [pendingBookingData, setPendingBookingData] = useState(null);

  const [bookingForm, setBookingForm] = useState({
    name: user?.name || "",
    date: "",
    travelers: 1,
  });

  const [travelersDetails, setTravelersDetails] = useState([]);

  // Combine all packages
  const allPackages = useMemo(() => {
    const popular = popularPackages.map(pkg => ({ ...pkg, type: "popular" }));
    const recommended = recommendedPackages.map(pkg => ({ ...pkg, type: "recommended" }));
    const featured = { ...featuredPackage, type: "featured" };
    return [featured, ...popular, ...recommended];
  }, []);

  // Search filtering - now used
  const filteredPackages = useMemo(() => {
    if (!searchTerm.trim()) return allPackages;
    const lowerSearch = searchTerm.toLowerCase();
    return allPackages.filter(pkg =>
      pkg.title.toLowerCase().includes(lowerSearch)
    );
  }, [searchTerm, allPackages]);

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg);
  };

  const handleCloseDetail = () => {
    setSelectedPackage(null);
  };

  const openEditor = (pkg = null) => {
    setCurrentPackage(pkg ? { ...pkg } : {
      title: "", location: "", description: "", price: "", duration: "", image: "", tags: [], bestPlaces: [], bestSeason: ""
    });
    setIsAddMode(!pkg);
    setEditorOpen(true);
  };

  const handleSave = () => {
    alert(`Package ${isAddMode ? "added" : "updated"} successfully!`);
    setEditorOpen(false);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    if (bookingForm.travelers < 1) {
      alert("Number of travelers must be at least 1");
      return;
    }

    if (bookingForm.travelers > 1) {
      const initialDetails = Array.from({ length: bookingForm.travelers }, (_, i) => ({
        name: i === 0 ? bookingForm.name : "",
        age: "",
        gender: "Male"
      }));
      setTravelersDetails(initialDetails);
      setTravelersDetailsOpen(true);
      setBookingFormOpen(false);
    } else {
      proceedToPayment([{ name: bookingForm.name, age: "", gender: "Male" }]);
    }
  };

  const handleTravelersDetailsSubmit = (e) => {
    e.preventDefault();

    const isValid = travelersDetails.every(t => t.name.trim() && t.age > 0 && t.age <= 120);
    if (!isValid) {
      alert("Please fill valid Name and Age for all travelers.");
      return;
    }

    proceedToPayment(travelersDetails);
  };

  const proceedToPayment = (travelerList) => {
  const bookingCode = "BK" + Math.floor(100000 + Math.random() * 900000);

  // Smart destination mapping
  const getDestination = () => {
    if (selectedPackage.location) {
      return selectedPackage.location;
    }

    const destinationMap = {
      "Bali Island Retreat": "Bali, Indonesia",
      "Dubai Desert Escape": "Dubai, UAE",
      "Kerala Backwaters": "Kerala, India",
      "Himalayan Trek": "Himalayas, India",
      "Andaman Islands": "Andaman & Nicobar Islands, India",
      "Jaipur Heritage Tour": "Jaipur, Rajasthan, India",
      "Kashmir Heaven Tour": "Kashmir, India",
      "Himachal Hill Adventure": "Himachal Pradesh, India",
      "Jaisalmer Desert Safari": "Jaisalmer, Rajasthan, India",
      "Kutch Festival Tour": "Kutch, Gujarat, India",
      "Gokarna Beach Camp": "Gokarna, Karnataka, India",
      "Istanbul Cultural Tour": "Istanbul, Turkey",
      "Bangkok Buzz Tour": "Bangkok, Thailand",
      "Barcelonian Streets": "Barcelona, Spain",
      "Cape Town Adventure": "Cape Town, South Africa",
      "Halong Bay Cruise": "Halong Bay, Vietnam",
      "Hong Kong Explorer": "Hong Kong",
      "Goa Party Nights": "Goa, India",
      "Diskit Monastery Tour": "Ladakh, India",
      "Devki Spiritual Walk": "Vrindavan, India",
      "Rann of Kutch Festival": "Kutch, Gujarat, India",
      "Golden Temple": "Amritsar, Punjab, India",
      "Sikkim Serenity": "Sikkim, India",
      "Darjeeling Tea Trails": "Darjeeling, West Bengal, India",
      "Tropical Goa Getaway": "Goa, India",
    };

    return destinationMap[selectedPackage.title] || selectedPackage.title.replace(/\s*(Tour|Retreat|Escape|Adventure|Trek|Camp|Festival|Getaway|Buzz|Streets|Cruise|Explorer|Nights|Trails|Serenity|Walk)$/i, "").trim();
  };

  const destination = getDestination();

  // ... rest of the function remains the same
    const formattedDate = new Date(bookingForm.date).toLocaleDateString('en-GB', {
      day: 'numeric', month: 'long', year: 'numeric'
    });

    const pricePerPerson = parseFloat(selectedPackage.price.replace(/[^0-9.-]+/g, "")) || 0;
    const totalAmount = pricePerPerson * bookingForm.travelers;

    const bookingData = {
      userId: user?.id,
      userName: bookingForm.name || user?.name || "Guest User",
      userEmail: user?.email || "",
      code: bookingCode,
      destination,
      date: formattedDate,
      status: "Pending",
      packageTitle: selectedPackage.title,
      pricePerPerson: selectedPackage.price,
      totalPrice: `$${totalAmount.toLocaleString()}`,
      travelers: bookingForm.travelers,
      travelersDetails: travelerList,
    };

    setPendingBookingData(bookingData);
    setPaymentModalOpen(true);
    setTravelersDetailsOpen(false);
  };

  const handleFakePaymentSuccess = () => {
    if (pendingBookingData) {
      addBooking({ ...pendingBookingData, status: "Paid" });
      alert(`Payment Successful! 🎉\nTotal Paid: ${pendingBookingData.totalPrice}`);

      setPaymentModalOpen(false);
      setPendingBookingData(null);
      handleCloseDetail();

      setBookingForm({ name: user?.name || "", date: "", travelers: 1 });
      setTravelersDetails([]);
    }
  };

  const updateTraveler = (index, field, value) => {
    const updated = [...travelersDetails];
    updated[index][field] = value;
    setTravelersDetails(updated);
  };

  return (
    <div className="packages-container">
      <div className="packages-header">
        <h2>Packages</h2>
        <div className="search-add">
          <input
            type="text"
            placeholder="Search packages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {isAdmin && (
            <button className="add-btn" onClick={() => openEditor()}>
              <FaPlus /> Add Package
            </button>
          )}
        </div>
      </div>

      <div className="packages-main">
        <div className="left-section">
          {/* Featured Package */}
          <div className="featured-package">
            <img src={featuredPackage.image} alt={featuredPackage.title} />
            <div className="featured-info">
              <h3>{featuredPackage.title}</h3>
              <p>{featuredPackage.description}</p>
              <p className="price">
                <span className="price-bold">{featuredPackage.price}</span> | {featuredPackage.duration}
              </p>
              {isAdmin && (
                <button className="edit-btn" onClick={() => openEditor(featuredPackage)}>
                  <FaEdit /> Edit
                </button>
              )}
              <div className="tags">
                {featuredPackage.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </div>
          </div>

          {/* Search Results or Recommended */}
          <h4 className="section-title">
            {searchTerm.trim() ? `Results for "${searchTerm}"` : "Recommended Packages"}
          </h4>
          <div className="recommended-list">
            {(searchTerm.trim() ? filteredPackages : recommendedPackages).map((pkg, i) => (
              <div key={i} className="recommended-card" onClick={() => handlePackageClick(pkg)}>
                <img src={pkg.image} alt={pkg.title} />
                <div className="card-info">
                  <h5>{pkg.title}</h5>
                  <p>{pkg.price}</p>
                </div>
                {isAdmin && (
                  <button className="card-edit-btn" onClick={(e) => { e.stopPropagation(); openEditor(pkg); }}>
                    <FaEdit />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="right-sidebar">
          <h4 className="section-title">Popular Packages</h4>
          {popularPackages.map((pkg, i) => (
            <div key={i} className="popular-card" onClick={() => handlePackageClick(pkg)}>
              <img src={pkg.image} alt={pkg.title} />
              <div>
                <h5>{pkg.title}</h5>
                <p>{pkg.price}</p>
              </div>
              {isAdmin && (
                <button className="card-edit-btn" onClick={(e) => { e.stopPropagation(); openEditor(pkg); }}>
                  <FaEdit />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Package Detail Modal */}
      {selectedPackage && (
        <div className="modal-overlay" onClick={handleCloseDetail}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={selectedPackage.image} alt={selectedPackage.title} />
            <div>
              <h3>{selectedPackage.title}</h3>
              <p>{selectedPackage.description || "Amazing experience awaits!"}</p>
              <p className="price"><strong>{selectedPackage.price}</strong> | {selectedPackage.duration}</p>

              {travelPlans[selectedPackage.title] && (
                <div className="travel-plan">
                  <h4>Itinerary</h4>
                  <ul>
                    {travelPlans[selectedPackage.title].map((day, i) => (
                      <li key={i}>{day}</li>
                    ))}
                  </ul>
                </div>
              )}

              {user && !isAdmin && (
                <button className="book-now-btn" onClick={() => setBookingFormOpen(true)}>
                  Book Now
                </button>
              )}

              {isAdmin && (
                <button onClick={() => { handleCloseDetail(); openEditor(selectedPackage); }}>
                  <FaEdit /> Edit Package
                </button>
              )}

              <button onClick={handleCloseDetail}>Close</button>
            </div>
          </div>
        </div>
      )}


      {/* Booking Form Modal */}
      {bookingFormOpen && user && !isAdmin && (
        <div className="modal-overlay" onClick={() => setBookingFormOpen(false)}>
          <div className="booking-form-modal" onClick={e => e.stopPropagation()}>
            <h3>Book: {selectedPackage?.title}</h3>
            <form onSubmit={handleBookingSubmit}>
              <label>
                Full Name (Lead Traveler):
                <input
                  type="text"
                  value={bookingForm.name}
                  onChange={e => setBookingForm({ ...bookingForm, name: e.target.value })}
                  required
                />
              </label>
              <label>
                Travel Date:
                <input
                  type="date"
                  value={bookingForm.date}
                  onChange={e => setBookingForm({ ...bookingForm, date: e.target.value })}
                  required
                />
              </label>
              <label>
                Number of Travelers:
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={bookingForm.travelers}
                  onChange={e => {
                    const val = parseInt(e.target.value) || 1;
                    setBookingForm({ ...bookingForm, travelers: val });
                  }}
                  required
                />
              </label>
              <div className="form-actions">
                <button type="submit">Next</button>
                <button type="button" onClick={() => setBookingFormOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Travelers Details Modal (only if travelers > 1) */}
      {travelersDetailsOpen && (
        <div className="modal-overlay" onClick={() => setTravelersDetailsOpen(false)}>
          <div className="travelers-details-modal" onClick={e => e.stopPropagation()}>
            <h3>Traveler Details ({bookingForm.travelers} Travelers)</h3>
            <form onSubmit={handleTravelersDetailsSubmit}>
              {travelersDetails.map((traveler, index) => (
                <div key={index} className="traveler-entry">
                  <h4>Traveler {index + 1} {index === 0 && "(Lead Traveler)"}</h4>
                  <label>
                    Full Name:
                    <input
                      type="text"
                      value={traveler.name}
                      onChange={e => updateTraveler(index, "name", e.target.value)}
                      placeholder={index === 0 ? bookingForm.name : ""}
                      required
                    />
                  </label>
                  <label>
                    Age:
                    <input
                      type="number"
                      min="1"
                      max="120"
                      value={traveler.age}
                      onChange={e => updateTraveler(index, "age", e.target.value)}
                      required
                    />
                  </label>
                  <label>
                    Gender:
                    <select
                      value={traveler.gender}
                      onChange={e => updateTraveler(index, "gender", e.target.value)}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                </div>
              ))}
              <div className="form-actions">
                <button type="submit">Proceed to Payment</button>
                <button type="button" onClick={() => {
                  setTravelersDetailsOpen(false);
                  setBookingFormOpen(true);
                }}>Back</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Updated Payment Modal - Shows Correct Total */}
      {paymentModalOpen && pendingBookingData && (
        <div className="modal-overlay" onClick={() => setPaymentModalOpen(false)}>
          <div className="payment-modal" onClick={e => e.stopPropagation()}>
            <h3>Payment Details</h3>
            <div className="payment-summary">
              <p><strong>Package:</strong> {pendingBookingData.packageTitle}</p>
              <p><strong>Travelers:</strong> {pendingBookingData.travelers}</p>
              <p><strong>Price per person:</strong> {pendingBookingData.pricePerPerson}</p>
              <p className="total-price">
                <strong>Total Amount:</strong>{" "}
                <span style={{ color: "#28a745", fontSize: "1.6em", fontWeight: "bold" }}>
                  {pendingBookingData.totalPrice}
                </span>
              </p>
            </div>

            <form className="fake-payment-form">
              <label>Card Holder Name: <input type="text" placeholder="John Doe" required /></label>
              <label>Card Number: <input type="text" placeholder="4111 1111 1111 1111" maxLength="19" required /></label>
              <div className="expiry-cvv">
                <label>Expiry Date: <input type="text" placeholder="MM/YY" maxLength="5" required /></label>
                <label>CVV: <input type="number" placeholder="123" maxLength="3" required /></label>
              </div>
              
              <div className="form-actions">
                <button type="button" className="pay-btn" onClick={handleFakePaymentSuccess}>
                  Pay Now
                </button>
                <button type="button" onClick={() => setPaymentModalOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Admin Editor Modal */}
      <AdminPackageEditor
        isOpen={editorOpen}
        onClose={() => setEditorOpen(false)}
        packageData={currentPackage}
        setPackageData={setCurrentPackage}
        onSave={handleSave}
        isAddMode={isAddMode}
      />
    </div>
  );
}