import React from "react";
import { Link } from "react-router-dom";
import navimage from "../../assets/nav.png";

const Navbar = () => {
   

  return (
    <div style={wrapper}>
      <div style={left}>
        <div style={logo}>
          <img src={navimage} alt="Landguru" style={{ height: "24px" }} />
          Landguru
        </div>
        <div style={links}>
          <Link to="/" style={link}>
            Home
          </Link>
          <Link to="/advertise" style={link}>
            Advertise
          </Link>
          <Link to="/support" style={link}>
            Support
          </Link>
          <Link to="/contact" style={link}>
            Contact
          </Link>
        </div>
      </div>

      <div style={right}>
        <button style={button}>Try for Free</button>
      </div>
    </div>
  );
};

export default Navbar;

const wrapper = {
    display: "flex",
    height: "80px",
    width: "100vw",
  };

  const left = {
    width: "62%",
    background: "linear-gradient(106.43deg, #E0F5FA -1.4%, #FFFDE6 100.87%)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px",
  };

  const right = {
    width: "30%",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const logo = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginLeft : "250px",
    fontSize: "20px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    color: "#111",
  };

  const links = {
    display: "flex",
    gap: "20px",
    fontFamily: "'Poppins', sans-serif",
  };

  const link = {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
    fontSize: "15px",
  };

  const button = {
    padding: "10px 20px",
    backgroundColor: "#ffddaa",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: "500",
    fontSize: "14px",
  };
