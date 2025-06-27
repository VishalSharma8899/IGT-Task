 

import React from "react";
import StatsCard from "./StatsCard";

const cardData = [
  { value: "80K+", description: "We have more than students", color: "#f97316" },
  { value: "150+", description: "Free online tutorials videos available", color: "#ec4899" },
  { value: "90+", description: "Daily updated blog post maintain", color: "#ef4444" },
  { value: "& 3M", description: "Job posted everydays with qualification", color: "#8b5cf6" },
];

const StatsContainer = () => {
  return (
    <div style={container}>
      {/* Top: Card Grid */}
      <div style={leftWrapper}>
        <div style={row}>
          {cardData.slice(0, 2).map((item, index) => (
            <StatsCard key={index} {...item} />
          ))}
        </div>
        <div style={row1}>
          {cardData.slice(2, 4).map((item, index) => (
            <StatsCard key={index + 2} {...item} />
          ))}
        </div>
      </div>
 
      <div style={rightText}>
        <p style={label}>Core Features</p>
        <h2 style={heading}>
          Smart Jackpots that you may love this anytime & anywhere
        </h2>
        <p style={desc}>
          Get your tests delivered at let home collect sample from the victory of the
          managements that supplies best design system guidelines ever. Get your tests
          delivered at let home collect sample.
        </p>
        <button style={button}>Explore details</button>
      </div>
    </div>
  );
};

export default StatsContainer;
 

const container = {
  display: "flex",
  flexDirection: "row",
  gap: "2rem",
  padding: "4rem 1rem",
  maxWidth: "1200px",
  margin: "0 auto",
  backgroundColor: "#f9fafb",
  flexWrap: "wrap",
};

const leftWrapper = {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
};

const row = {
  display: "flex",
   
  gap: "24px",
  justifyContent: "center",
};

const row1 = {
  ...row,
  
  
};

const rightText = {
  width: "100%",
  maxWidth: "500px",
  padding: "0 1rem",
  alignSelf: "center",
};

const label = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#f97316",
  textTransform: "uppercase",
  marginBottom: "10px",
};

const heading = {
  fontSize: "32px",
  fontWeight: "700",
  color: "#0f172a",
  lineHeight: "1.4",
  marginBottom: "16px",
};

const desc = {
  fontSize: "14px",
  color: "#6b7280",
  marginBottom: "24px",
};

const button = {
  backgroundColor: "#ffedd5",
  color: "#ea580c",
  padding: "12px 20px",
  border: "none",
  borderRadius: "8px",
  fontWeight: "500",
  cursor: "pointer",
};
