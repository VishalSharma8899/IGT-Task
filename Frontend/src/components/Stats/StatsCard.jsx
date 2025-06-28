 import React, { useState } from "react";

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "1rem",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    padding: "24px",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    width: "180px",
    height: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  value: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0,
  },
  description: {
    fontSize: "14px",
    color: "#6b7280",
    marginTop: "8px",
  },
};

const StatsCard = ({ value, description, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    ...styles.card,
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    boxShadow: isHovered
      ? "0 8px 30px rgba(0, 0, 0, 0.1)"
      : styles.card.boxShadow,
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 style={{ ...styles.value, color }}>{value}</h3>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

export default StatsCard;
