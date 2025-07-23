
import React from 'react';
import "../styles/day.css";

const packages = [
  {
    title: "Maharajas' Express",
    subtitle: "Maharajas' Express",
    description:
      "Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an \u201cExperience Unsurpassed\u201d. It has been a winner of \u201cWorld\u2019s Leading Luxury train\u201d by World Travel Awards consecutively for last six years.",
    image: "https://www.irctc.co.in/nget/assets/images/exterior.jpg",
  },
  {
    title: "International Packages",
    subtitle: "International Packages",
    description:
      "Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience.",
    image: "https://www.irctc.co.in/nget/assets/images/Thailand.jpg",
  },
  {
    title: "Domestic Air Packages",
    subtitle: "Domestic Air Packages",
    description:
      "Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!",
    image: "https://www.irctc.co.in/nget/assets/images/Kashmir.jpg",
  },
  {
    title: "Bharat Gaurav Tourist Train",
    subtitle: "Tourist Trains",
    description:
      "IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India\u2019s rich cultural heritage.",
    image: "https://www.irctc.co.in/nget/assets/images/Bharat_Gaurav.jpg",
  },
  {
    title: "Rail Tour Packages",
    subtitle: "Rail/ Land Tour Packages",
    description:
      "IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available.",
    image: "https://www.irctc.co.in/nget/assets/images/Manali.jpg",
  },
];

function HolidayPackages() {
  return (
    <div className="holiday-packages-container">
      <h1 className="heading">HOLIDAYS</h1>
      <div className="packages-grid">
        {packages.map((pkg, index) => (
          <div className="package-card" key={index}>
            <img src={pkg.image} alt={pkg.title} className="package-image" />
            <h2 className="package-title">{pkg.title}</h2>
            <h4 className="package-subtitle">{pkg.subtitle}</h4>
            <p className="package-description">{pkg.description}</p>
            <a href="#" className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HolidayPackages;
