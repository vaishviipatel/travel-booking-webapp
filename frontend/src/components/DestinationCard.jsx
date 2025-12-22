import React from 'react';
import './DestinationCard.css'; 
const destinations = [
  {
    title: "Bora Bora",
    location: "New Zealand",
    price: "$700",
    description:
      "The epitome of romance, Bora Bora is known for its luxurious stays and adventurous activities.",
    image: "/images/bora.jpeg",
  },
  {
    title: "Machu Picchu",
    location: "Peru",
    price: "$600",
    description:
      "A mountain in Peru rising over the so-called Lost City of Incas, with beautiful sunrises.",
    image: "/images/machu.jpeg",
  },
  {
    title: "Great Barrier Reef",
    location: "Australia",
    price: "$700",
    description:
      "One of the most remarkable natural wonders of Australia, full of beauty and marine life.",
    image: "/images/reef.jpeg",
  },

  {
    title: "Dawki River",
    location: "India",
    price: "$250",
    description:
      "The river's exceptionally clear water, allowing visibility to the riverbed, is a major attraction.",
    image: "/images/devki.jpeg",
  },

  {
    title: "Halong Bay",
    location: "Vietnam",
    price: "$550",
    description:
      "Halong Bay is a stunning UNESCO World Heritage Site in northern Vietnam, renowned for its surreal landscape of thousands of limestone karsts rising from the emerald waters",
    image: "/images/Halong.jpeg",
  },

  {
    title: "Bali",
    location: "Indonesia",
    price: "$300",
    description:
      "Bali is an Indonesian island and province located in the Lesser Sunda Islands, known for its vibrant culture, beautiful beaches, and lush landscapes",
    image: "/images/bali.jpg",
  },
  
  {
    title: "Chandra tal Lake",
    location: "India",
    price: "$150",
    description:
      "Chandra Taal, also known as The Moon Lake is a high-altitude lake located in the Lahaul and Spiti district of Himachal Pradesh, India, within the Spiti Valley of the Himalayas.",
    image: "/images/chandratal.jpeg",
  },

  {
    title: "Gokarna Beach",
    location: "India",
    price: "$200",
    description:
      "Gokarna Beach is a popular attraction in the coastal town of Gokarna, Karnataka, India, known for its serene beauty and spiritual significance.",
    image: "/images/gokarna.jpeg",
  },

  {
    title: "Diskit",
    location: "Ladakh",
    price: "$350",
    description:
      " It's a significant Buddhist pilgrimage site, known for its stunning location perched atop a hill overlooking the Shyok River and the surrounding valley.",
    image: "/images/diskit.jpeg",
  },

  {
    title: "Bana Hills",
    location: "Vietnam",
    price: "$300",
    description:
      "a popular hill station and theme park in Da Nang, Vietnam, known for its cool climate, stunning views, and unique attractions",
    image: "/images/bana.jpeg",
  },

  {
    title: "Bangkok",
    location: "Thailand",
    price: "$380",
    description:
      "Bangkok is famous for its vibrant street food scene, bustling markets, stunning temples, and lively nightlife. ",
    image: "/images/bangkok.jpg",
  },

  {
    title: "Ooty Hill Station",
    location: "India",
    price: "$300",
    description:
      "One of the most beautiful hill stations in India, Ooty nestles in the Nilgiri district of Tamil Nadu. ",
    image: "/images/ooty.jpg",
  },

  {
    title: "Krang Suri Waterfall",
    location: "India",
    price: "$250",
    description:
      "This is one of the most prominent and famous waterfalls of Meghalaya. From the base point, there is a 20 min trek to reach the waterfalls",
    image: "/images/krangsuri.jpg",
  },

  {
    title: "Gokayama",
    location: "Japan",
    price: "$250",
    description:
      "Gokayama is a historic area located in Nanto, Toyama Prefecture, Japan. It is known for its traditional gasshō-zukuri houses",
    image: "/images/gokayama.jpeg",
  },


  {
    title: "Lapland",
    location: "Finland",
    price: "$250",
    description:
      "Lapland is best known for its magical winter landscapes and northern lights viewing.",
    image: "/images/lapland.jpg",
  },


  

];

export default function DestinationCard() {
  return (
    <section className="destination-section">
      <h2 className="destination-heading">
        Most visited <span className="highlight">Destinations</span>
      </h2>
      <div className="destination-card-container">
        {destinations.map((dest, index) => (
          <div className="card" key={index}>
            <img src={dest.image} alt={dest.title} />
            <div className="card-content">
              <h3>{dest.title}</h3>
              <p className="country">{dest.location}</p>
              <div className="tags">
                <span>CULTURAL</span>
                <span>RELAX</span>
              </div>
              <p className="price">{dest.price}</p>
              <p className="description">{dest.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
