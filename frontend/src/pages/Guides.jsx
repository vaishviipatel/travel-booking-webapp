// src/pages/Guides.jsx
import React, { useState } from "react";
import "./Guides.css";
import { FaBriefcase, FaCheckCircle, FaUser } from "react-icons/fa";

const guideList = [
  {
    name: "Mina Sharma",
    email: "minasharma1@gmail.com",
    phone: "+1 (555) 123-2222",
    role: "Venice Tour Guide",
    img: "/images/user1.jpg",
    experienceYears: "10 years experience",
    employmentType: "Full Time",
    status: "Active",
    skills: [
      "Fluent in Italian & English",
      "Excellent communication",
      "Historical knowledge",
      "Customer service skills",
    ],
    experience: {
      title: "Senior Guide",
      location: "Venice",
      duration: "2020 - Present",
      description: "Led city tours, ensured guest safety and engagement.",
    },
  },
  {
    name: "Emma Johnson",
    email: "emma1@gmail.com",
    phone: "+1 (555) 232-3033",
    role: "Serengeti Tour Guide",
    img: "/images/user1.jpg",
    experienceYears: "6 years experience",
    employmentType: "Part Time",
    status: "Active",
    skills: [
      "Wildlife expertise",
      "Swahili & English",
      "4x4 driving skills",
      "Photography assistance",
    ],
    experience: {
      title: "Safari Guide",
      location: "Tanzania",
      duration: "2018 - Present",
      description: "Guided tourists through Serengeti safaris safely and informatively.",
    },
  },
  {
    name: "Aarav Patel",
    email: "aaravpatel1@gmail.com",
    phone: "+91 98765 12345",
    role: "Rajasthan Heritage Guide",
    img: "/images/user1.jpg",
    experienceYears: "7 years experience",
    employmentType: "Contract",
    status: "Active",
    skills: [
      "Cultural storytelling",
      "Fluent in Hindi & English",
      "Historical site knowledge",
      "Local folklore expertise",
    ],
    experience: {
      title: "Heritage Expert",
      location: "Rajasthan",
      duration: "2017 - Present",
      description: "Organized palace and fort tours with rich cultural insights.",
    },
  },
  {
  name: "Nia Parmar",
  email: "nia.parmar@gmail.com",
  phone: "+86 135 1234 5678",
  role: "Beijing City Guide",
  img: "/images/user1.jpg",
  experienceYears: "9 years experience",
  employmentType: "Full Time",
  status: "Active",
  skills: [
    "Mandarin & English fluency",
    "Temple and monument knowledge",
    "Group management",
    "Excellent storytelling",
  ],
  experience: {
    title: "City Guide",
    location: "Beijing",
    duration: "2015 - Present",
    description: "Led cultural tours through Forbidden City and Great Wall.",
  },
},
{
  name: "Jiya Jain",
  email: "jiya.jain@gmail.com",
  phone: "+52 1 55 1234 5678",
  role: "Mexico City Historical Guide",
  img: "/images/user1.jpg",
  experienceYears: "5 years experience",
  employmentType: "Part Time",
  status: "Active",
  skills: [
    "Spanish & English communication",
    "Aztec history expertise",
    "Museum tours",
    "Street food guidance",
  ],
  experience: {
    title: "Cultural Guide",
    location: "Mexico City",
    duration: "2019 - Present",
    description: "Guided heritage walks in downtown Mexico City.",
  },
},
{
  name: "Zara Khan",
  email: "zara.khan@gmail.com",
  phone: "+971 50 123 4567",
  role: "Dubai Desert Safari Guide",
  img: "/images/user1.jpg",
  experienceYears: "8 years experience",
  employmentType: "Full Time",
  status: "Active",
  skills: [
    "Arabic & English",
    "4x4 desert driving",
    "Camel ride assistance",
    "Evening entertainment coordination",
  ],
  experience: {
    title: "Desert Guide",
    location: "Dubai",
    duration: "2016 - Present",
    description: "Organized desert safaris and Bedouin camp activities.",
  },
},
{
  name: "Meet Patel",
  email: "meet.patel@gmail.com",
  phone: "+1 (555) 878-9090",
  role: "New York City Tour Guide",
  img: "/images/user1.jpg",
  experienceYears: "4 years experience",
  employmentType: "Contract",
  status: "Active",
  skills: [
    "City navigation",
    "Broadway & museum tours",
    "Customer engagement",
    "Multilingual guide",
  ],
  experience: {
    title: "City Explorer",
    location: "New York",
    duration: "2021 - Present",
    description: "Led tourists across iconic NYC landmarks and neighborhoods.",
  },
},
{
  name: "Mayank Patel",
  email: "mayank.patel@gmail.com",
  phone: "+34 612 345 678",
  role: "Barcelona Art & Architecture Guide",
  img: "/images/user1.jpg",
  experienceYears: "6 years experience",
  employmentType: "Full Time",
  status: "Active",
  skills: [
    "Gaudí architecture expert",
    "Spanish & English",
    "Art history",
    "Museum guidance",
  ],
  experience: {
    title: "Architecture Guide",
    location: "Barcelona",
    duration: "2018 - Present",
    description: "Conducted Sagrada Familia & Park Güell guided tours.",
  },
},
{
  name: "Yuto Tanaka",
  email: "yuto.t@example.com",
  phone: "+81 90 1234 5678",
  role: "Tokyo City Explorer",
  img: "/images/user1.jpg",
  experienceYears: "7 years experience",
  employmentType: "Full Time",
  status: "Active",
  skills: [
    "Fluent in Japanese & English",
    "Urban transportation navigation",
    "Cultural etiquette guidance",
    "Tech district expert",
  ],
  experience: {
    title: "Local Expert",
    location: "Tokyo",
    duration: "2016 - Present",
    description: "Led tech, culture, and food tours around Tokyo.",
  },
},
{
  name: "Fatima Noor",
  email: "fatima.noor@example.com",
  phone: "+92 300 1234567",
  role: "Lahore Cultural Tour Guide",
  img: "/images/user1.jpg",
  experienceYears: "6 years experience",
  employmentType: "Part Time",
  status: "Active",
  skills: [
    "Urdu & English communication",
    "Mughal architecture expert",
    "Museum & garden tours",
    "Local cuisine knowledge",
  ],
  experience: {
    title: "Cultural Guide",
    location: "Lahore",
    duration: "2019 - Present",
    description: "Specialized in historical tours of Lahore Fort & Badshahi Mosque.",
  },
},
{
  name: "William Scott",
  email: "william.s@example.com",
  phone: "+44 7700 900123",
  role: "London History Expert",
  img: "/images/user1.jpg",
  experienceYears: "12 years experience",
  employmentType: "Full Time",
  status: "Active",
  skills: [
    "Royal history",
    "Museum curation",
    "British landmarks expert",
    "Public speaking",
  ],
  experience: {
    title: "Senior Historian",
    location: "London",
    duration: "2012 - Present",
    description: "Conducted in-depth tours of the British Museum and Westminster.",
  },
},
{
  name: "Ananya Deshmukh",
  email: "ananya.d@example.com",
  phone: "+91 88990 12345",
  role: "Mumbai Food Tour Guide",
  img: "/images/user1.jpg",
  experienceYears: "3 years experience",
  employmentType: "Contract",
  status: "Active",
  skills: [
    "Local cuisine expert",
    "Street food tours",
    "Hindi & Marathi fluency",
    "Photography friendly",
  ],
  experience: {
    title: "Foodie Guide",
    location: "Mumbai",
    duration: "2022 - Present",
    description: "Organized street food walks across South and Central Mumbai.",
  },
},
{
  name: "Noah Baker",
  email: "noah.b@example.com",
  phone: "+1 (555) 654-3210",
  role: "Alaskan Wildlife Guide",
  img: "/images/user1.jpg",
  experienceYears: "5 years experience",
  employmentType: "Full Time",
  status: "Active",
  skills: [
    "Wildlife spotting",
    "Boat & forest navigation",
    "Wilderness survival",
    "Eco-education",
  ],
  experience: {
    title: "Nature Guide",
    location: "Alaska",
    duration: "2019 - Present",
    description: "Led wildlife expeditions through Alaskan national parks.",
  },
}

  // Continue similarly for other guides...
];


export default function Guides() {
  const [selectedGuide, setSelectedGuide] = useState(guideList[0]);

  return (
    <div className="guides-container">
      {/* Sidebar */}
      

      {/* Main Content */}
      <main className="guides-main">
        <header className="guides-header">
          <h1>Guides</h1>
          <input type="text" placeholder="Search name, email, etc" />
          <button className="add-btn">+ Add Guide</button>
        </header>

        <section className="guide-list">
          {guideList.map((guide, idx) => (
            <div
              key={idx}
              className={`guide-card ${selectedGuide.name === guide.name ? "selected" : ""}`}
              onClick={() => setSelectedGuide(guide)}
            >
              <img src={guide.img} alt={guide.name} className="guide-img" />
              <div className="guide-info">
                <strong>{guide.name}</strong>
                <p>{guide.email}</p>
                <span>{guide.role}</span>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Right Panel */}
      <aside className="guide-detail">
  <img src={selectedGuide.img} alt="profile" className="profile-photo" />
  <h2>{selectedGuide.name}</h2>
  <p>{selectedGuide.role}</p>

  <div className="guide-meta">
    <div><FaBriefcase /> {selectedGuide.experienceYears || "N/A"}</div>
    <div><FaUser /> {selectedGuide.employmentType || "N/A"}</div>
    <div><FaCheckCircle /> {selectedGuide.status || "N/A"}</div>
  </div>

  <div className="skills">
    <h4>Skills</h4>
    <ul>
      {(selectedGuide.skills || []).map((skill, index) => (
        <li key={index}>✅ {skill}</li>
      ))}
    </ul>
  </div>

  <div className="experience">
    <h4>Experience</h4>
    {selectedGuide.experience ? (
      <div className="exp-item">
        <strong>{selectedGuide.experience.title}</strong>
        <p>{selectedGuide.experience.location}, {selectedGuide.experience.duration}</p>
        <p>{selectedGuide.experience.description}</p>
      </div>
    ) : (
      <p>No experience details available.</p>
    )}
  </div>
</aside>


    </div>
  );
}
