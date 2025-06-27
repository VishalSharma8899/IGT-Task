import React, { useEffect, useState } from "react";
import logo1 from "../../assets/Dropbox_logo.png";

const LeftSidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [courseInfo, setCourseInfo] = useState({
    title: "Learn Design with Nia Matos",
    description:
      "Get your blood tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.",
    rating: "⭐⭐⭐⭐☆ Trusted by over 4,332 students",
    sponsors: [
      {
        name: "Paypal",
        logo: "https://www.logo.wine/a/logo/PayPal/PayPal-Logo.wine.svg",
      },
      {
        name: "Google",
        logo: "https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg",
      },
      {
        name: "Dropbox",
        logo: logo1,
      },
    ],
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dynamicLeftStyle = {
    ...styles.left,
    width: isMobile ? "100vw" : "62vw",
    padding: isMobile ? "2vh 4vw" : "5vh 4vw",
  };

  const dynamicSearchWrapper = {
    ...styles.searchWrapper,
    width: isMobile ? "100%" : "35vw",
  };

  return (
    <div style={dynamicLeftStyle}>
      <div style={styles.box}>
        <p style={styles.rating}>{courseInfo.rating}</p>

        <h1 style={styles.heading}>
          Learn Design <br />
          <span style={styles.highlighted}>with Nia Matos</span>
        </h1>

        <p style={styles.description}>{courseInfo.description}</p>

        <div style={dynamicSearchWrapper}>
          <input
            type="text"
            placeholder="Search Course Name"
            style={styles.searchInput}
          />
          <button style={styles.searchButton}>🔍</button>
        </div>

        <div style={styles.sponsors}>
          <span style={styles.sponsoredBy}>Sponsored by:</span>
          {courseInfo.sponsors.map((sponsor, i) => (
            <img
              key={i}
              src={sponsor.logo}
              alt={sponsor.name}
              style={styles.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;

const styles = {
  left: {
    background: "linear-gradient(106.43deg, #E0F5FA -1.4%, #FFFDE6 100.87%)",
    backgroundColor: "white",
    height: "100vh",
    
    padding: "5vh 4vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    borderBottomRightRadius: "60vh",
    fontFamily: "'DM Sans', sans-serif",
  },
  rating: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "20px",
  },
  heading: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 1200,
    fontSize: "85px",
    lineHeight: "100px",
    letterSpacing: "-2px",
    fontWeight: "bold",
    color: "#02073E",
    margin: "10px 0",
  },
  highlighted: {
    display: "inline-block",
    borderBottom: "5px solid orange",
    paddingBottom: "4px",
  },
  description: {
    fontSize: "16px",
    color: "#343D48",
    maxWidth: "520px",
    lineHeight: "28px",
    marginBottom: "30px",
  },
  searchWrapper: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    paddingLeft: "16px",
    width: "35vw",
    height: "48px",
    marginBottom: "25px",
  },
  searchInput: {
    backgroundColor: "#fff",
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "14px",
    color: "black",  
  },
  searchButton: {
    padding: "10px 16px",
    backgroundColor: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
  sponsors: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    flexWrap: "wrap",
  },
  sponsoredBy: {
    fontSize: "14px",
    color: "#7B838A",
  },
  logo: {
    width: "80px",
    height: "auto",
    opacity: 0.5,
  },
  box: {
    marginTop: "20px",
    marginLeft: "60px",
  },
};
