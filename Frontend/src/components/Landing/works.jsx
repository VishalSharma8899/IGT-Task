 import React from "react";

const baseStyles = {
  section: {
    backgroundColor: "#f7fbff",
    padding: "4rem 1rem",
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  subheading: {
    fontSize: "0.875rem",
    color: "#f97316",
    fontWeight: 600,
    textTransform: "uppercase",
  },
  heading: {
    fontSize: "1.875rem",
    fontWeight: 700,
    color: "#1f2937",
    marginTop: "0.5rem",
  },
  stepsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "2.5rem auto 0 auto",
    position: "relative",
  },
  stepCard: {
    textAlign: "center",
    width: "220px",
    margin: "0 1rem 2.5rem",
    position: "relative",
  },
  circle: {
    width: "3.5rem",
    height: "3.5rem",
    borderRadius: "9999px",
    backgroundColor: "#ffffff",
    boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "1.125rem",
    color: "#1f2937",
    margin: "0 auto 1rem auto",
    zIndex: 2,
  },
  title: {
    fontWeight: 600,
    fontSize: "1.125rem",
    color: "#1f2937",
    marginBottom: "0.5rem",
  },
  desc: {
    fontSize: "0.875rem",
    color: "#6b7280",
  },
  arrow: {
    position: "absolute",
    top: "1.75rem",
    left: "100%",
    marginLeft: "0.5rem",
    width: "100px",
    height: "20px",
    zIndex: 0,
  },
};

const responsiveStyles = () => {
  const isMobile = window.innerWidth < 768;
  return {
    stepCard: {
      ...baseStyles.stepCard,
      width: isMobile ? "90%" : "220px",
      margin: isMobile ? "0 auto 2rem" : "0 1rem 2.5rem",
    },
    arrow: {
      ...baseStyles.arrow,
      display: isMobile ? "none" : "block",
    },
  };
};

const steps = [
  {
    id: "01",
    title: "Set disbursement Instructions",
    desc: "Get your blood tests delivered at home collect a sample from your blood tests.",
  },
  {
    id: "02",
    title: "Assembly retrieves funds from your account",
    desc: "Get your blood tests delivered at home collect a sample from your blood tests.",
  },
  {
    id: "03",
    title: "Assembly initiates disbursement",
    desc: "Get your blood tests delivered at home collect a sample from your blood tests.",
  },
  {
    id: "04",
    title: "Customer receives funds payment",
    desc: "Get your blood tests delivered at home collect a sample from your blood tests.",
  },
];

const Arrow = () => (
  <svg
    style={baseStyles.arrow}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 20"
    fill="none"
    stroke="#CBD5E1"
    strokeWidth="2"
  >
    <path d="M0,10 C30,0 70,20 100,10" strokeDasharray="5,5" />
    <polyline points="92,5 100,10 92,15" fill="none" />
  </svg>
);

const HowItWorks = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const style = responsiveStyles();

  return (
    <section style={baseStyles.section}>
      <div style={baseStyles.header}>
        <p style={baseStyles.subheading}>WHAT’S THE FUNCTION</p>
        <h2 style={baseStyles.heading}>Let’s see how it works</h2>
      </div>

      <div style={baseStyles.stepsContainer}>
        {steps.map((step, index) => (
          <div key={index} style={style.stepCard}>
            <div style={baseStyles.circle}>{step.id}</div>
            <h3 style={baseStyles.title}>{step.title}</h3>
            <p style={baseStyles.desc}>{step.desc}</p>
            {!isMobile && index < steps.length - 1 && <Arrow />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
