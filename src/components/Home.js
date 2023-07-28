import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css"; 
import doctorsData from "../data/doctors.json";


const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("doctors"); // Default selected option is "doctors"
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchParam = searchTerm.trim();
    if (searchParam && selectedOption === "doctors") {
      // Only navigate if the search term is not empty and "doctors" option is selected
      // Here, we encode the search term to handle spaces and special characters
      const encodedSearchParam = encodeURIComponent(searchParam);
      const searchPath = `/doctors?search=${encodedSearchParam}`;
      const currentPath = location.pathname + location.search;
      if (searchPath !== currentPath) {
        // Avoid pushing the same path again
        navigate(searchPath);
      }
    }
  };

  return (
    <div>
      {/* Top Section */}
      <div className="top-section">
        {/* Logo image */}
        <img
          className="logo"
          src={require("C:/Users/22kri/ayushdoc-ui/src/assets/logo.png")}
          alt="logo6"
        />

        {/* Search bar */}
        <form onSubmit={handleSearchSubmit} className="search-form">
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="medicine">Medicine</option>
            <option value="blogs">Blogs</option>
            <option value="clinic">Clinic</option>
            <option value="doctors">Doctors</option>
          </select>
          <input
            type="text"
            placeholder={`Search for ${selectedOption}`}
            value={searchTerm}
            onChange={handleSearch}
          />
          <button type="submit">See {selectedOption}</button>
        </form>

        {/* Login/Signup buttons */}
        <button>Need Help?</button>
        <button>Sign Up</button>
      </div>

      <div className="centered-image-container">
        <img
          className="centered-image"
          src={require("C:/Users/22kri/ayushdoc-ui/src/assets/banner2.png")}
          alt="banner"
        />
      </div>


      {/* Rest of the content */}
      {/* <h1>Why Ayushdoc</h1>
      <div>
        <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/logo.png")} alt="logo6" />
      </div> */}

<div className="why-ayushdoc-section">
        <h1 className="section-title">Why Ayushdoc</h1>
        <div className="cards-container">
          <div className="card">
            <h2>Connect with Peers</h2>
            <p>
              Join our community to connect with peers and share your experiences.
            </p>
            <a href="/connect">Learn More</a>
          </div>
          <div className="card">
            <h2>Learn with Ayurveda Experts</h2>
            <p>
              Learn from experienced Ayurveda experts and enhance your knowledge.
            </p>
            <a href="/learn">Learn More</a>
          </div>
          <div className="card">
            <h2>Buy Medicines at Great Price</h2>
            <p>
              Shop for high-quality medicines at affordable prices on Ayushdoc.
            </p>
            <a href="/shop">Learn More</a>
          </div>
          <div className="card">
            <h2>Serve and Manage Patients Effortlessly</h2>
            <p>
              Manage your patients' records and provide seamless healthcare services.
            </p>
            <a href="/serve">Learn More</a>
          </div>
        </div>
    </div>

    <div className="exclusive-brands-section">

        <h1 className="section-title">Shop from Exclusive Brands</h1>
        <div className="images-container">
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/med1.png")} alt="med1" />
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/med2.png")} alt="med2" />
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/med3.png")} alt="med3" />
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/med4.png")} alt="med4" />
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/med5.png")} alt="med5" />
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/med6.png")} alt="med6" />
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/med7.png")} alt="med7" />
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/med8.png")} alt="med8" />
        </div>

    </div>

    <div className="discount-section">
        <h1 className="section-title">Buy Medicines at Great Discount</h1>
        <div className="images-container">
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/drug1.png")} alt="drug1" />
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/drug2.png")} alt="drug2" />
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/drug3.png")} alt="drug3" />
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/drug4.png")} alt="drug4" />
        </div>
      </div>

      <div className="blogs-section">
        <h1 className="section-title">Stay Informed with Blogs</h1>
        <div className="images-container">
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/conference1.png")} alt="conference1" />
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/conference2.png")} alt="conference2" />
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/conference3.png")} alt="conference3" />
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/conference4.png")} alt="conference4" />
        </div>
      </div>

      {/* <div className="doctor-section">
        <h1 className="section-title">Trusted By Experience Doctors</h1>
        <div className="img">
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/dr1.png")} alt="dr1" />
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/dr2.png")} alt="dr2" />
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/dr4.png")} alt="dr3" />
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/dr5.png")} alt="dr4" />
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/dr6.png")} alt="dr3" />
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/dr7.png")} alt="dr3" />
          <img src={require("C:/Users/22kri/ayushdoc-ui/src/assets/dr8.png")} alt="dr3" />
          
          
        </div>
      </div>
       */}

       {/* Doctor Section */}
      
<div className="doctor-section">
  <h1 className="section-title">Trusted By Experienced Doctors</h1>
  <div className="img">
    {doctorsData.map((doctor) => (
      <div className="doctor-card" key={doctor.id}>
        <img src={require(`../assets/dr${doctor.id}.png`)} alt={`dr${doctor.id}`} />
        <p>{doctor.name}</p>
      </div>
    ))}
  </div>
</div>

      

      

      <div className="section-8">
        <div className="section-8-info">
          <img
            className="section-8-logo"
            src={require("C:/Users/22kri/ayushdoc-ui/src/assets/logo.png")}
            alt="Ayushdoc Logo"
          />
          <p>Phone No: 9876543210</p>
          <p>Email: info@ayushdoc.com</p>
        </div>
        <div className="section-8-links">
          <p>About Us</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
        <div className="section-8-links">
          <p>Cancellation Policy</p>
          <p>Contact Us</p>
        </div>
        <div className="section-8-experience">
          <p>Experience Ayushdoc on Mobile</p>
          <div className="store-icons">
            <img
              src={require("C:/Users/22kri/ayushdoc-ui/src/assets/play-store.png")}
              alt="Play Store"
            />
            <img
              src={require("C:/Users/22kri/ayushdoc-ui/src/assets/apple-store.png")}
              alt="Apple Store"
            />
          </div>
          <div className="social-icons">
            <img
              src={require("C:/Users/22kri/ayushdoc-ui/src/assets/facebook.png")}
              alt="Facebook"
            />
            <img
              src={require("C:/Users/22kri/ayushdoc-ui/src/assets/twitter.png")}
              alt="Twitter"
            />
            <img
              src={require("C:/Users/22kri/ayushdoc-ui/src/assets/linkedin.png")}
              alt="LinkedIn"
            />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Home;
