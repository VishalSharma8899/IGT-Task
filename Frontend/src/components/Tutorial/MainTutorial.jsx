import React, { useState, useEffect } from "react";
import { FaStar, FaEye } from "react-icons/fa";

// 📊 Data
const tutorialData = [
  {
    title:
      "Convert your web layout theming easily with sketch zeplin extension",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    stars: 5.0,
    reviewCount: 392,
    studentsWatched: 1037,
  },
  {
    title: "Create multiple figma prototypes easily",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    stars: 4.8,
    reviewCount: 210,
    studentsWatched: 3000,
  },
  {
    title: "Design tokens and variables in UI systems",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    stars: 4.9,
    reviewCount: 300,
    studentsWatched: 2200,
  },
];

const ReviewCard = ({ image, stars, reviewCount, title, studentsWatched }) => {
  const cardStyles = {
    card: {
      width: "100%",
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      transform: "scale(1)",
      transition: "transform 0.3s ease",
      cursor: "pointer",
    },
    imageWrapper: {
      position: "relative",
      width: "100%",
      height: "208px",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },
    playButtonWrapper: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    playButton: {
      width: "48px",
      height: "48px",
      backgroundColor: "rgba(255,255,255,0.7)",
      borderRadius: "50%",
      border: "none",
      fontSize: "18px",
      cursor: "pointer",
    },
    content: {
      padding: "16px",
    },
    ratingRow: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      color: "#facc15",
    },
    ratingText: {
      marginLeft: "8px",
      fontSize: "14px",
      color: "#4B5563",
    },
    title: {
      marginTop: "8px",
      fontSize: "16px",
      fontWeight: "600",
      color: "#1F2937",
    },
    watched: {
      marginTop: "8px",
      display: "flex",
      alignItems: "center",
      fontSize: "14px",
      color: "#6B7280",
    },
    eyeIcon: {
      marginRight: "4px",
    },
  };

  return (
    <div
      style={cardStyles.card}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={cardStyles.imageWrapper}>
        <img src={image} alt="tutorial" style={cardStyles.image} />
        <div style={cardStyles.playButtonWrapper}>
          <button style={cardStyles.playButton}>▶</button>
        </div>
      </div>
      <div style={cardStyles.content}>
        <div style={cardStyles.ratingRow}>
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              style={{ color: stars >= i + 1 ? "#facc15" : "#d1d5db" }}
            />
          ))}
          <span style={cardStyles.ratingText}>
            {stars.toFixed(1)} ({reviewCount} reviews)
          </span>
        </div>
        <h3 style={cardStyles.title}>{title}</h3>
        <div style={cardStyles.watched}>
          <FaEye style={cardStyles.eyeIcon} />
          {studentsWatched.toLocaleString()} students watched
        </div>
      </div>
    </div>
  );
};

const MainTutorial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % tutorialData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + tutorialData.length) % tutorialData.length
    );
  };

  const styles = {
    wrapper: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      padding: "2rem",
      backgroundColor: "#ffffff",
      fontFamily: "sans-serif",
      justifyContent: "center",
      gap: "2rem",
      alignItems: isMobile ? "center" : "flex-start",
    },
    sliderSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "1rem",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      gap: "1rem",
      maxWidth: "360px",
      width: "100%",
    },
    arrowContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "1rem",
      width: "100%",
    },
    arrowBtn: {
      background: "transparent",
      border: "none",
      fontSize: "1.5rem",
      cursor: "pointer",
      color: "#ef4444",
      width: "50%",
    },
    infoSection: {
      maxWidth: "500px",
      width: "100%",
      textAlign: isMobile ? "center" : "left",
    },
    label: {
      color: "orange",
      fontSize: "0.85rem",
      letterSpacing: "1px",
      textTransform: "uppercase",
      marginBottom: "0.5rem",
    },
    heading: {
      fontSize: isMobile ? "1.5rem" : "2rem",
      color: "#0f172a",
      lineHeight: "1.4",
      fontWeight: "bold",
    },
    desc: {
      color: "#4b5563",
      margin: "1rem 0",
      fontSize: "0.95rem",
    },
    button: {
      background: "#fef3c7",
      color: "#92400e",
      border: "none",
      padding: "0.6rem 1rem",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.sliderSection}>
        <ReviewCard {...tutorialData[currentIndex]} />
        <div style={styles.arrowContainer}>
          <button style={styles.arrowBtn} onClick={prevSlide}>
            ⟵
          </button>
          <button style={styles.arrowBtn} onClick={nextSlide}>
            ⟶
          </button>
        </div>
      </div>

      <div style={styles.infoSection}>
        <div style={styles.label}>FREE TUTORIAL</div>
        <h1 style={styles.heading}>
          More than <strong>thousand</strong>
          <br />
          of free tutorial upload
          <br />
          every weeks
        </h1>
        <p style={styles.desc}>
          Get your tests delivered at let home collect sample from the victory
          of the managements that supplies best design system guidelines ever.
        </p>
        <button style={styles.button}>Explore details</button>
      </div>
    </div>
  );
};

export default MainTutorial;
