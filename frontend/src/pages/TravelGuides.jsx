import React from 'react';
import './TravelGuides.css';

const destinations = [
   
  {
    name: "Delhi",
    language: "Hindi, English",
    currency: "Indian Rupee (₹)",
    time: "GMT+5:30",
    essentials: [
      "Carry a government ID for entry to some places",
      "Wear light, breathable clothes in summer",
      "Use prepaid taxis or ride-hailing apps for safer travel"
    ],
    tips: [
      "Try street food like chaat and parathas",
      "Visit early morning or late evening for crowded places",
      "Explore historical sites with a guide to understand the history"
    ],
    itinerary: [
      "Day 1: Red Fort, Jama Masjid, Chandni Chowk",
      "Day 2: Qutub Minar, Lotus Temple, Humayun’s Tomb",
      "Day 3: Akshardham Temple, India Gate, National Museum"
    ],
  },
  {
    name: "Mumbai",
    language: "Marathi, Hindi, English",
    currency: "Indian Rupee (₹)",
    time: "GMT+5:30",
    essentials: [
      "Monsoon season is heavy, carry rain gear",
      "Stay hydrated and carry sunscreen",
      "Use local trains carefully, avoid peak hours"
    ],
    tips: [
      "Try vada pav and pav bhaji from street vendors",
      "Visit the Gateway of India early morning",
      "Explore art galleries and cafes in Bandra"
    ],
    itinerary: [
      "Day 1: Gateway of India, Elephanta Caves",
      "Day 2: Marine Drive, Chowpatty Beach, Hanging Gardens",
      "Day 3: Bollywood tour, Bandra Fort, Sanjay Gandhi National Park"
    ],
  },
  {
    name: "Kolkata",
    language: "Bengali, English",
    currency: "Indian Rupee (₹)",
    time: "GMT+5:30",
    essentials: [
      "Carry light clothes and umbrella (rainy season)",
      "Try local sweets like rasgulla and sandesh",
      "Use yellow taxis or app-based cabs for transport"
    ],
    tips: [
      "Visit cultural spots like theatres and museums",
      "Walk around College Street for books and coffee",
      "Enjoy the Durga Puja festival if visiting in season"
    ],
    itinerary: [
      "Day 1: Victoria Memorial, St. Paul’s Cathedral",
      "Day 2: Howrah Bridge, Indian Museum, Marble Palace",
      "Day 3: Kumartuli pottery village, Park Street restaurants"
    ],
  },
  {
    name: "London",
    language: "English",
    currency: "British Pound (£)",
    time: "GMT+1 (BST during summer)",
    essentials: [
      "Get an Oyster card for easy public transport",
      "Carry an umbrella—weather is often rainy",
      "Many museums are free; carry ID for discounts"
    ],
    tips: [
      "Try afternoon tea and fish & chips",
      "Book popular attractions like the London Eye in advance",
      "Explore parks like Hyde Park and Regent’s Park"
    ],
    itinerary: [
      "Day 1: Buckingham Palace, Westminster Abbey, Big Ben",
      "Day 2: British Museum, Covent Garden, Soho",
      "Day 3: Tower of London, Tower Bridge, Tate Modern"
    ],
  },
  {
    name: "Bangkok",
    language: "Thai",
    currency: "Thai Baht (฿)",
    time: "GMT+7",
    essentials: [
      "Dress modestly when visiting temples",
      "Use bottled water to stay hydrated",
      "Avoid tuk-tuks for long rides, prefer metered taxis or Grab app"
    ],
    tips: [
      "Try street food like pad thai and mango sticky rice",
      "Visit floating markets early in the morning",
      "Bargain politely in local markets"
    ],
    itinerary: [
      "Day 1: Grand Palace, Wat Pho, Wat Arun",
      "Day 2: Chatuchak Market, Jim Thompson House",
      "Day 3: Floating Market, Chinatown, Khao San Road"
    ],
  },
  {
    name: "San Francisco",
    language: "English",
    currency: "US Dollar ($)",
    time: "GMT-7 (PDT during summer)",
    essentials: [
      "Wear layers; weather can change quickly",
      "Use public transport like MUNI and BART",
      "Book Alcatraz tickets in advance"
    ],
    tips: [
      "Try clam chowder in a sourdough bread bowl",
      "Rent a bike to explore the Golden Gate Park",
      "Visit local neighborhoods like Mission and Castro"
    ],
    itinerary: [
      "Day 1: Golden Gate Bridge, Fisherman’s Wharf, Pier 39",
      "Day 2: Alcatraz Island, Chinatown, Lombard Street",
      "Day 3: Golden Gate Park, Painted Ladies, Exploratorium"
    ],
  },


  {
    name: "Paris",
    language: "French",
    currency: "Euro (€)",
    time: "GMT+2",
    essentials: ["Visa required for some countries", "Pack comfortable shoes", "Metro is cheap and efficient"],
    tips: ["Buy museum passes", "Try street crepes", "Avoid taxis—use public transport"],
    itinerary: [
      "Day 1: Eiffel Tower, Seine River Cruise",
      "Day 2: Louvre, Montmartre",
      "Day 3: Versailles Palace"
    ],
  },
  {
    name: "Tokyo",
    language: "Japanese",
    currency: "Yen (¥)",
    time: "GMT+9",
    essentials: ["JR Pass saves money", "Google Translate helps", "Cash preferred in many places"],
    tips: ["Use Suica card", "Respect train etiquette", "Slurp noodles!"],
    itinerary: [
      "Day 1: Senso-ji, Shibuya Crossing",
      "Day 2: Tokyo Skytree, Akihabara",
      "Day 3: Mt. Fuji day trip"
    ],
  }
];

export default function TravelGuides() {
  return (
    <div className="travel-guide-page">
      <h1>🌍 Travel Guides</h1>

      {destinations.map((dest, index) => (
        <div key={index} className="destination-guide">
          <h2>{dest.name}</h2>

          <div className="info-grid">
            <div>
              <h4>Language & Currency</h4>
              <p><strong>Language:</strong> {dest.language}</p>
              <p><strong>Currency:</strong> {dest.currency}</p>
              <p><strong>Time Zone:</strong> {dest.time}</p>
            </div>

            <div>
              <h4>Travel Essentials</h4>
              <ul>
                {dest.essentials.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Traveler Tips</h4>
              <div className="tips-carousel">
                {dest.tips.map((tip, i) => (
                  <div className="tip" key={i}>{tip}</div>
                ))}
              </div>
            </div>

            <div>
              <h4>Suggested Itinerary</h4>
              <ol>
                {dest.itinerary.map((day, i) => (
                  <li key={i}>{day}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
