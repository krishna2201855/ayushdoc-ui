import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getDoctors } from "../redux/actions";
import "./Doctors.css";

const Doctors = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);
  const location = useLocation();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("doctors");

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  useEffect(() => {
    // Extract the search term from the URL query params and set it as the prefilled text
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("search") || "";
    setSearchTerm(searchQuery);
  }, [location.search]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchParam = searchTerm.trim();
    if (searchParam && selectedOption === "doctors") {
      const encodedSearchParam = encodeURIComponent(searchParam);
      const searchPath = `/doctors?search=${encodedSearchParam}`;
      const currentPath = location.pathname + location.search;
      if (searchPath !== currentPath) {
        navigate(searchPath);
      }
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSearch = (e) => {
    console.log(2, doctors)
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      {/* Top Section */}
      <div className="top-section">
        {/* Logo image */}
        <img
          className="logo"
          src={require("../assets/logo.png")}
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

      {/* Rest of the content */}
      <div className="doctor-section">
        <div className="img">
          {doctors.length === 0 ? (
            <p>No doctors found.</p>
          ) : (
            doctors.map((doctor) => (
              <div className="doctor-card" key={doctor.id}>
                <img
                  src={require(`../assets/dr${doctor.id}.png`)}
                  alt={`dr${doctor.id}`}
                />
                <p>{doctor.name}</p>
                <p>Specialty: {doctor.specialty}</p>
                <p>Experience: {doctor.experience} years</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
