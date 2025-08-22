import React, { useState } from 'react';

const inspirationsData = {
  Adventure: [
    {
      title: "Bungee jumping ",
      description:
        "Bungee jumping is popular worldwide, with top spots including Verzasca Dam (Switzerland), Bloukrans Bridge (South Africa), Macau Tower (China), Bhote Koshi River (Nepal), Europabrucke Bridge (Austria), and Victoria Falls Bridge (Zimbabwe). In India, key locations include Rishikesh, Goa, Lonavala, Bangalore, and Jagdalpur. ",
      image: "/images/ad1.jpg",
    },
    {
      title: "River rafting",
      description:
        "River rafting, a thrilling adventure sport, is enjoyed at various locations worldwide. India stands out as a popular destination, with rivers like the Ganga in Rishikesh, the Yamuna in Mussoorie, and the Teesta in Sikkim offering diverse rafting experiences. Other notable destinations include the Alaknanda and Bhagirathi rivers in Uttarakhand, the Beas in Kullu-Manali, the Indus in Ladakh, and the Spiti River. .",
      image: "/images/ad2.jpg",
    },
    {
      title: "Paragliding",
      description:
        "Paragliding is a sport where you glide through the air using a flexible, fabric wing called a paraglider. It's a recreational activity enjoyed by thrill-seekers and adventurers alike, offering the chance to fly freely and enjoy stunning views. Paragliders are typically launched from hillsides or can be towed by a vehicle.",
     image: "/images/ad3.jpg",
    },
    {
      title: "Camping",
      description:
        "Camping involves staying overnight in a temporary shelter, like a tent, in a natural environment for recreation or outdoor education. It's a popular activity for families, individuals, and groups looking to escape the hustle of city life and connect with nature. ",
     image: "/images/ad4.jpg",
    },
  ],
  
   Family: [
    {
      title: "Boat Riding",
      description: "A family boat ride provides an opportunity for shared fun and adventure on the water, fostering a sense of togetherness and creating lasting memories. It can be a relaxing escape from everyday life, allowing families to connect and enjoy the beauty of nature, while also offering opportunities for active engagement and learning new skills.",
      image: "/images/f1.jpg",
    },
    {
      title: "Jungle Safari",
      description: "A family jungle safari in India offers a thrilling and educational experience, immersing participants in the country's rich wildlife and natural beauty. It's an opportunity to witness majestic tigers, diverse bird species, and unique flora in their natural habitats, fostering curiosity and creating lasting memories for all.",
      image: "/images/f2.jpg",
    },
    {
      title: "Animal Ride",
      description: "An elephant ride with your family can be a memorable and unique experience, offering a chance to connect with these gentle giants and appreciate their majestic presence. However, it's important to choose reputable and ethical operators who prioritize elephant well-being.",
      image: "/images/f3.jpg",
    },
  ],
  Solo: [
    {
      title: "Hiking and Nature walks",
      description: "Hiking and nature walks offer a fantastic opportunity for solo travel, allowing for both physical exercise and a deeper connection with nature. These activities provide a chance to explore beautiful landscapes, build endurance, and experience the calming effects of the outdoors. ",
      image: "/images/s4.jpg",
    },
    {
      title: "Trekking",
      description: "Trekking solo while traveling offers a unique opportunity for self-discovery and a deeper connection with nature and the world around you. It's a longer, more challenging walk or hike, often involving multiple days and overnight stays in tents or shelters, allowing you to explore trails and paths. This activity is perfect for those seeking adventure, physical challenge, and the freedom to set their own pace and explore at their own convenience.",
      image: "/images/s2.jpg",
    },
    {
      title: "Photography",
      description: "photography captures the excitement and spirit of travel, often focusing on the journey itself and the solo traveler's experience. It can range from capturing breathtaking landscapes to documenting personal moments of exploration and overcoming challenges.",
      image: "/images/s3.jpg",
    },
  ],

};

export default function Inspiration() {
  const [category, setCategory] = useState('Adventure');

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', fontFamily: 'Arial, sans-serif', padding: '0 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Travel Inspiration</h1>

      {/* Category Buttons */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        {Object.keys(inspirationsData).map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              margin: '0 10px',
              padding: '10px 25px',
              cursor: 'pointer',
              borderRadius: '30px',
              border: category === cat ? '2px solid #007BFF' : '1px solid #ccc',
              backgroundColor: category === cat ? '#007BFF' : '#fff',
              color: category === cat ? '#fff' : '#333',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              minWidth: '110px',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Inspiration Items */}
      {inspirationsData[category].map(({ title, description, image }, idx) => (
        <section
          key={idx}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '50px',
            flexWrap: 'wrap',
            gap: '20px',
            borderBottom: '1px solid #eee',
            paddingBottom: '30px',
          }}
        >
          <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
            <img
              src={image}
              alt={title}
              style={{ width: '100%', borderRadius: '10px', objectFit: 'cover', maxHeight: '250px' }}
              loading="lazy"
            />
          </div>

          <div style={{ flex: '1 1 400px', minWidth: '280px' }}>
            <h2 style={{ marginBottom: '15px' }}>{title}</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#444' }}>{description}</p>
          </div>
        </section>
      ))}
    </div>
  );
}
