import React, { useState } from "react";
import "./TravelerStories.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const stories = [
  {
    image: "/images/bali.jpg",
    title: "Bali Island",
    location: "Indonesia",
    tags: ["Cultural", "Relax"],
    price: "$500",
    author: "Samantha Reed",
    shortDescription:
      "Bali is known for its beaches, temples, and food. A perfect getaway full of scenic beauty and culture.",
    fullStory: `My trip to Bali was nothing short of magical. The moment I arrived, the air was thick with the scent of incense and frangipani. I stayed in Ubud for three nights, where every corner seemed to breathe culture and calm. The rice terraces, particularly Tegallalang, were like green waves stretching into the horizon. I woke up early each day to do yoga overlooking the jungle and ended evenings with Balinese dance performances.

One highlight was visiting the Tirta Empul Temple, where I participated in a water purification ritual. Though I wasn’t a local, the people welcomed me warmly. The experience was deeply spiritual.

Afterward, I moved to Seminyak to enjoy the beaches. I took surfing lessons, enjoyed seafood dinners on the sand, and explored street markets. Watching the sunset at Uluwatu Temple, followed by a Kecak fire dance, was the perfect end to my stay.

This trip reminded me how rejuvenating travel can be. Bali was not just a destination; it became part of my healing journey. I returned home with stories, peace, and a heart full of gratitude.

— Samantha Reed`
  },

  {
  image: "/images/paris.jpg",
  title: "Parisian Dream",
  location: "France",
  tags: ["Romantic", "Culture"],
  price: "$1,400",
  author: "Emily Stone",
  shortDescription: "The City of Light is a celebration of love, fashion, and fine art. Eiffel Tower views and romance in the air.",
  fullStory: `Paris was always a dream for me—and when it came true, it was more magical than I imagined. My first sight of the Eiffel Tower lit up at night was unforgettable. I stayed in a cozy little hotel in Montmartre, surrounded by cobbled streets, flowered balconies, and cafés serving croissants that melted in the mouth.

From morning walks along the Seine to evenings spent at the Louvre and sipping wine in the Latin Quarter, every hour in Paris felt like poetry. I particularly loved the street artists near Sacré-Cœur who captured the city’s spirit with every brushstroke.

I also took a day trip to the Palace of Versailles—the grand gardens and mirrored halls were mesmerizing. The history here isn’t just told in books—it’s alive in every arch, alley, and avenue.

Paris gave me more than just memories. It gave me inspiration. To live slowly, to savor art, and to find beauty in little things.

— Emily Stone`
},
{
  image: "/images/dubai.jpg",
  title: "Desert Dreams in Dubai",
  location: "UAE",
  tags: ["Luxury", "Adventure"],
  price: "$1,200",
  author: "Arjun Mehta",
  shortDescription: "Skyscrapers, safaris, shopping, and stars — Dubai is a dream for thrill-seekers and luxury lovers alike.",
  fullStory: `Dubai felt like stepping into the future while still holding onto the charm of tradition. From the top of Burj Khalifa, the city looked like a sci-fi movie set. But it wasn't just about luxury and glitter.

My favorite part was the desert safari. We rode over golden dunes in a 4x4, watched the sunset paint the desert sky, and ended the evening with traditional BBQ and belly dancing. The contrast between the bustling city and the silent desert was surreal.

Another highlight was exploring the old souks. I bought spices, perfumes, and souvenirs, and had endless cups of Arabic coffee with friendly locals who shared stories of their heritage.

Dubai Mall was an experience in itself—indoor waterfalls, an aquarium, and luxury brands all under one roof. But despite the extravagance, what stuck with me most was the warmth of the people.

Dubai offers something for every kind of traveler—thrill, peace, culture, and innovation. It’s a destination I’ll surely return to.

— Arjun Mehta`
},
{
  image: "/images/kerala.jpg",
  title: "Backwaters of Kerala",
  location: "India",
  tags: ["Nature", "Wellness"],
  price: "$550",
  author: "Nikita Sinha",
  shortDescription: "Cruise through calm waters, sip coconut water, and find peace in Kerala’s lush beauty and Ayurveda.",
  fullStory: `My Kerala journey was deeply soothing. I stayed in a traditional houseboat in Alleppey, drifting along the peaceful backwaters surrounded by swaying coconut trees and chirping birds. The boat had all the comforts of a home, and the local chef served the most delicious vegetarian meals made with fresh spices and love.

One afternoon, we docked at a small village. I met locals who showed me how coir is made from coconut husks and invited me to join their evening folk dance. The simplicity of life here touched me deeply.

I also visited an Ayurvedic wellness center near Kumarakom. A 90-minute massage with herbal oils was all it took to relieve months of stress. The monsoon showers in Wayanad, the tea gardens of Munnar, and the sunset at Kovalam Beach made this trip truly unforgettable.

Kerala isn’t just a place to visit—it’s a place to breathe, to heal, and to reconnect with nature.

— Nikita Sinha`
},
{
  image: "/images/rome.jpg",
  title: "Timeless Rome",
  location: "Italy",
  tags: ["Historic", "Romantic"],
  price: "$1,100",
  author: "Daniel Cruz",
  shortDescription: "History, pizza, ruins, and Renaissance art — every corner of Rome echoes with the stories of a glorious past.",
  fullStory: `Rome is like a living museum. Every time I turned a corner, I stumbled upon ancient ruins, beautiful fountains, or Renaissance masterpieces. I spent my mornings sipping espresso in sunny piazzas and my afternoons exploring landmarks like the Colosseum, Pantheon, and the Roman Forum.

The Vatican left me speechless. Walking through the Sistine Chapel, seeing Michelangelo’s ceiling up close—it gave me chills. St. Peter’s Basilica was stunning in both size and spiritual energy.

But my most personal moments were small: eating handmade pasta in Trastevere, tossing a coin in the Trevi Fountain at night, and watching street performers light up Piazza Navona.

Rome taught me to slow down and enjoy life. It’s a city where past and present exist in perfect harmony. I didn’t just learn history here—I lived it.

— Daniel Cruz`
},
{
  image: "/images/london.jpg",
  title: "Lights of London",
  location: "UK",
  tags: ["Urban", "Historic"],
  price: "$1,300",
  author: "Rachel Moore",
  shortDescription: "London dazzles with its landmarks like Tower Bridge, Big Ben, and the London Eye. Culture, history, and charm everywhere.",
  fullStory: `My visit to London was packed with history, culture, and unexpected warmth. I arrived in the winter, but the city’s vibrant spirit kept the cold at bay. My first stop was Westminster Abbey—walking among kings and poets gave me chills. From there, I strolled to Big Ben and the Parliament buildings, soaking in the gothic charm.

I spent an entire afternoon at the British Museum. Seeing the Rosetta Stone and Egyptian mummies felt surreal. But London isn't just about history—it's alive with theater, music, and fashion. A West End show at night ("Phantom of the Opera") had me in tears and applause.

One of my favorite memories was afternoon tea at Fortnum & Mason—elegant, delicious, and oh so British. I explored Camden Market, cruised the Thames, and even caught a rainy day at Hyde Park with ducks and a hot chocolate.

London is a city of layers—you peel each one and discover something new. It’s sophisticated but friendly, classic yet creative.

— Rachel Moore`
},
{
  image: "/images/tokyo.jpg",
  title: "Tokyo Lights & Traditions",
  location: "Japan",
  tags: ["Modern", "Cultural"],
  price: "$1,500",
  author: "Kenji Yamada",
  shortDescription: "A fusion of neon lights and temples, sushi streets and sakura trees — Tokyo is unforgettable.",
  fullStory: `Tokyo is like stepping into the future while holding hands with tradition. I stayed in Shinjuku, surrounded by giant LED screens, capsule hotels, and ramen shops open at 3 AM. The energy was nonstop, yet so organized.

One morning, I visited Meiji Shrine—a world away from the buzz. Tall cedar trees and the soft sound of footsteps on gravel set a peaceful tone. Later, I witnessed the precision of the Shibuya Crossing. It's mesmerizing how hundreds cross in harmony.

Akihabara was heaven for a tech fan like me—anime, gadgets, and retro arcades. But what moved me most was visiting Tsukiji Outer Market and eating sushi so fresh it melted in my mouth.

On the weekend, I took a train to Mount Takao for a hike. Clean trails, friendly strangers, and breathtaking views of Tokyo made the climb worth it.

What I’ll remember most are the little things: warm vending machine coffee, helpful locals, and the balance Tokyo strikes between fast and reflective.

— Kenji Yamada`
},

{
  image: "/images/barcelona.jpeg",
  title: "Barcelona’s Bold Beauty",
  location: "Spain",
  tags: ["Art", "Coastal"],
  price: "$1,100",
  author: "Luis Ramirez",
  shortDescription: "A city of Gaudí’s genius, Mediterranean breeze, tapas joy, and street energy that sings.",
  fullStory: `Barcelona left me in awe at every corner. The first time I saw the Sagrada Família, I was speechless. Gaudí’s architecture isn’t just design—it’s emotion carved in stone. I also explored Park Güell, where mosaic dragons and curvy benches gave me endless photo ops.

I walked La Rambla daily, snacking on churros and admiring local artists. One afternoon, I got lost in the Gothic Quarter’s alleys and ended up at a tiny jazz bar—it turned into one of my favorite nights.

Food in Barcelona is art. Tapas hopping with friends I met at the hostel was an adventure—patatas bravas, jamón, and fresh sangria were all divine.

The city pulses with creativity, from street murals to Catalan folk dances. Watching the sunset at Barceloneta Beach was the perfect end to each day.

Barcelona awakened my senses and left my heart louder.

— Luis Ramirez`
},
{
  image: "/images/jaipur.jpg",
  title: "Pink City Wonders",
  location: "India",
  tags: ["Heritage", "Cultural"],
  price: "$600",
  author: "Ravi Joshi",
  shortDescription: "Royal forts, colorful bazaars, and spicy street food — Jaipur is tradition painted in pink.",
  fullStory: `Stepping into Jaipur was like entering a royal storybook. I began at Amber Fort, where elephants walked proudly and sandstone walls told tales of warriors and queens. The fort's Sheesh Mahal sparkled with mirrors—literally and emotionally.

The Hawa Mahal, with its intricate jharokhas, stood like a jewel in the city’s crown. I took a guided heritage walk through the old city, where every shop had a story, and every spice had a memory. I tried ghewar and dal baati churma that tingled every taste bud.

Shopping at Johari Bazaar was a delight—I bargained for block-printed scarves and silver anklets. But my favorite Jaipur moment? Watching the sky fill with kites during Makar Sankranti. It felt like childhood reborn.

Jaipur reminded me how rich Indian culture is—not just in monuments, but in music, hospitality, and rhythm of life.

— Ravi Joshi`
},
{
  image: "/images/santronii.jpeg",
  title: "Sunsets in Santorini",
  location: "Greece",
  tags: ["Romantic", "Scenic"],
  price: "$1,350",
  author: "Elena Papadakis",
  shortDescription: "White-washed homes, blue domes, and the most mesmerizing sunsets over the Aegean Sea.",
  fullStory: `Santorini felt like stepping into a postcard. I stayed in Oia, where every balcony seemed to hover above the sea. Mornings began with Greek coffee and bougatsa while gazing at endless blue horizons. The contrast of white walls and turquoise domes was so vivid it felt unreal.

My favorite moment was hiking from Fira to Oia along the cliff trail. It took almost four hours, but the views—volcanoes, donkeys, chapels—made every step magical. I timed it to reach the castle ruins in Oia just in time for the sunset, and trust me, it lived up to the hype.

I also visited local vineyards and tasted Assyrtiko wine while listening to Greek myths under the stars. Each taverna meal was a celebration—grilled octopus, tomato fritters, and fresh olives.

Santorini taught me that beauty can be quiet, gentle, and slow. I’ll never forget it.

— Elena Papadakis`
},
{
  image: "/images/newyork.jpg",
  title: "New York, New Vibes",
  location: "USA",
  tags: ["Urban", "Iconic"],
  price: "$1,700",
  author: "Brandon Lewis",
  shortDescription: "The city that never sleeps — filled with dreams, lights, and the rhythm of possibility.",
  fullStory: `My New York trip was fast, electric, and unforgettable. I stayed near Times Square, where it felt like daytime even at 2 a.m. Yellow taxis honking, hot dog carts steaming, and giant billboards flashing—it was a sensory overload in the best way.

I took a ferry to see Lady Liberty and walked the Brooklyn Bridge at sunset. The skyline from DUMBO is a view that stays etched in your memory. Central Park was a peaceful break amid the concrete—rowing a boat on the lake was oddly romantic even solo.

I went to a Broadway show, ate cheesecake at Junior’s, and caught a Yankees game. But my best moment? Watching the city from the Top of the Rock as lights twinkled below—like stars had fallen on Manhattan.

New York gave me courage. It felt like anything was possible there.

— Brandon Lewis`
},
{
  image: "/images/istanbul.jpeg",
  title: "Istanbul’s Timeless Echo",
  location: "Turkey",
  tags: ["Historic", "Spiritual"],
  price: "$950",
  author: "Ayla Demir",
  shortDescription: "Where East meets West, mosques meet markets, and every breeze carries the smell of spice and sea.",
  fullStory: `Istanbul was poetry written in stone. From the moment I stepped into Hagia Sophia, I could feel centuries breathe around me. Its walls have seen emperors and sultans, prayers in Greek and Arabic, and now curious travelers like me.

Blue Mosque was majestic, but it was the call to prayer echoing over the Bosphorus that gave me goosebumps. I sailed the strait and watched the city shimmer on both sides—Asia and Europe waving at each other.

The Grand Bazaar was chaos and charm combined. I sipped apple tea, bartered for lanterns, and smelled saffron, oud, and leather in the air.

Turkish breakfast was an event—olives, bread, jams, eggs, and endless çay. And Baklava from Karaköy Güllüoğlu? Pure bliss.

Istanbul is a storyteller. It doesn’t shout—it whispers history in every breeze.

— Ayla Demir`
},
{
  image: "/images/switzerland.jpg",
  title: "Alpine Dreams in Switzerland",
  location: "Switzerland",
  tags: ["Nature", "Luxury"],
  price: "$1,800",
  author: "Luca Bern",
  shortDescription: "Snow-capped mountains, emerald lakes, and trains that wind through wonderlands.",
  fullStory: `Switzerland is breathtaking in every direction. I took the Glacier Express from Zermatt to St. Moritz, and the journey itself felt like a dream. Snowflakes danced outside the window while I sipped hot chocolate in a glass-domed carriage.

Zermatt gave me a perfect view of the Matterhorn. I even tried skiing—fell twice but laughed the whole way down. Later, I soaked in a heated spa pool with snowy mountains as the backdrop.

Lucerne's wooden bridges, Interlaken’s thrill sports, and Lauterbrunnen’s waterfalls made every town a fairytale. The Swiss are punctual, polite, and make the best cheese I've ever tasted.

Everything here feels precise, pure, and peaceful. It's a place where the world slows down just enough for you to enjoy every breath.

— Luca Bern`
},
{
  image: "/images/manali.jpeg",
  title: "Manali’s Mountain Magic",
  location: "India",
  tags: ["Adventure", "Nature"],
  price: "$300",
  author: "Aarav Thakur",
  shortDescription: "Snowy peaks, pine forests, and cozy cafés — Himachal’s gem for nature lovers and trekkers.",
  fullStory: `Manali gave me the kind of peace you only find in the mountains. I reached in winter, and everything was blanketed in snow. I stayed in Old Manali near the river—waking up to that gurgling sound was therapeutic.

Solang Valley was my first brush with snow sports. I went snow tubing and ziplining, then sat by a bonfire with other travelers at night sharing stories and sipping chai.

I trekked to Jogini Falls, explored Hadimba Temple, and rode a bike up to Rohtang Pass (scary but exhilarating!). Mall Road had local woolens, thukpa, and momos that warmed me up from the inside out.

What I’ll always cherish is the silence of the woods—just me, snowflakes, and tall trees whispering in the wind.

— Aarav Thakur`
},
{
  image: "/images/maldives.jpg",
  title: "Maldives — The Aqua Escape",
  location: "Maldives",
  tags: ["Luxury", "Relaxation"],
  price: "$2,000",
  author: "Zoya Khan",
  shortDescription: "Overwater bungalows, turquoise lagoons, and barefoot bliss in every sunrise.",
  fullStory: `I went to the Maldives for a honeymoon, but it felt more like a dream than a destination. Our resort sat on a private atoll, and we had an overwater villa with stairs that dipped into the ocean.

Every morning I swam with schools of colorful fish, and by afternoon, I’d be reading under a palm tree with coconut water in hand. We took a sunset cruise and saw dolphins dance alongside us in the sea.

I also tried scuba diving for the first time—it was terrifying and beautiful. Coral reefs glowed like galaxies underwater.

Evenings were all about candle-lit dinners on the beach, soft music, and stargazing without any light pollution. It felt like time had paused just for us.

Maldives redefined what relaxation means for me. It’s peace, beauty, and love — floating on a turquoise sea.

— Zoya Khan`
}



];

export default function TravelerStories() {
  const [selectedStory, setSelectedStory] = useState(null);

  const handleDetailsClick = (story) => {
    setSelectedStory(story);
  };

  const closeModal = () => {
    setSelectedStory(null);
  };

  return (
    <div className="stories-page">
      <h1>Traveler Stories</h1>
      <div className="story-cards">
        {stories.map((story, index) => (
          <div className="story-card" key={index}>
            <img src={story.image} alt={story.title} className="story-image" />
            <div className="story-content">
              <h3>{story.title}</h3>
              <p className="location">
                <FaMapMarkerAlt /> {story.location}
              </p>
              <div className="tags">
                {story.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <h4 className="price">{story.price}</h4>
              <p className="description">{story.shortDescription}</p>
              <p className="author">By {story.author}</p>
              <button className="details-btn" onClick={() => handleDetailsClick(story)}>
                DETAILS
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedStory && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <img src={selectedStory.image} alt={selectedStory.title} />
            <h2>{selectedStory.title}</h2>
            <p className="location"><FaMapMarkerAlt /> {selectedStory.location}</p>
            <p className="author"><strong>By:</strong> {selectedStory.author}</p>
            <div className="full-story">{selectedStory.fullStory}</div>
          </div>
        </div>
      )}
    </div>
  );
}
