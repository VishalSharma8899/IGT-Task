import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const PricingPlans = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    container: {
      
      borderRadius: "8px",
      padding: isMobile ? "1.5rem 1rem" : "2rem",
      maxWidth: "1000px",
      margin: "2rem auto",
      fontFamily: "sans-serif",
    },
    label: {
      textAlign: "center",
      color: "orange",
      fontSize: "12px",
      letterSpacing: "1px",
      textTransform: "uppercase",
      marginBottom: "0.5rem",
    },
    heading: {
      textAlign: "center",
      fontSize: isMobile ? "20px" : "24px",
      fontWeight: "bold",
      color: "#0f172a",
      marginBottom: "1.5rem",
    },
    toggleWrapper: {
      textAlign: "center",
      marginBottom: "2rem",
    },
    toggle: {
      display: "inline-flex",
      background: "#f9fafb",
      borderRadius: "8px",
      overflow: "hidden",
      border: "1px solid #e5e7eb",
    },
    toggleBtn: (active) => ({
      padding: "0.5rem 1rem",
      border: "none",
      background: active ? "#fff" : "transparent",
      fontWeight: active ? "600" : "normal",
      cursor: "pointer",
      color: "#111827",
    }),
    plansWrapper: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "1.5rem",
    },
    planBox: {
      flex: "1 1 300px",
      padding: "1.5rem",
      borderRadius: "12px",
      background: "#fff",
      border: "1px solid #e5e7eb",
      boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
      position: "relative",
      minWidth: isMobile ? "100%" : "auto",
    },
    recommendedTag: {
      position: "absolute",
      top: "1rem",
      left: "1rem",
      background: "#facc15",
      padding: "2px 8px",
      fontSize: "12px",
      borderRadius: "4px",
      fontWeight: "bold",
      color: "#92400e",
    },
    planTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "4px",
      color: "#0f172a",
    },
    subtext: {
      fontSize: "14px",
      color: "#6b7280",
      marginBottom: "1rem",
    },
    price: {
      color: "#10b981",
      fontWeight: "bold",
      fontSize: "18px",
    },
    featureList: {
      listStyle: "none",
      padding: 0,
      margin: "1rem 0",
    },
    featureItem: (disabled = false) => ({
      display: "flex",
      alignItems: "center",
      color: disabled ? "#9ca3af" : "#1f2937",
      marginBottom: "0.5rem",
      fontSize: "14px",
    }),
    checkIcon: (disabled = false) => ({
      color: disabled ? "#d1d5db" : "#10b981",
      marginRight: "0.5rem",
    }),
    button: (type) => ({
      background: type === "primary" ? "#fef3c7" : "#f3f4f6",
      color: type === "primary" ? "#92400e" : "#111827",
      border: "none",
      padding: "0.75rem 1.5rem",
      borderRadius: "8px",
      cursor: "pointer",
      width: "100%",
      fontWeight: "500",
      marginTop: "1.5rem",
    }),
  };

  return (
    <div style={styles.container}>
      <div style={styles.label}>Pricing Plan</div>
      <h2 style={styles.heading}>Choose your pricing policy</h2>

      {/* Toggle */}
      <div style={styles.toggleWrapper}>
        <div style={styles.toggle}>
          <button
            style={styles.toggleBtn(isMonthly)}
            onClick={() => setIsMonthly(true)}
          >
            Monthly Plan
          </button>
          <button
            style={styles.toggleBtn(!isMonthly)}
            onClick={() => setIsMonthly(false)}
          >
            Annual Plan
          </button>
        </div>
      </div>

     
      <div style={styles.plansWrapper}>
       
        <div style={styles.planBox}>
          <h3 style={styles.planTitle}>Free Plan</h3>
          <div style={styles.subtext}>For small teams or office</div>
          <ul style={styles.featureList}>
            <li style={styles.featureItem(false)}>
              <FaCheckCircle style={styles.checkIcon(false)} />
              Ultimate access to all courses and assessments
            </li>
            <li style={styles.featureItem(false)}>
              <FaCheckCircle style={styles.checkIcon(false)} />
              Free exercise corrections & downloads
            </li>
            <li style={styles.featureItem(false)}>
              <FaCheckCircle style={styles.checkIcon(false)} />
              Assessment correction system
            </li>
            <li style={styles.featureItem(true)}>
              <FaCheckCircle style={styles.checkIcon(true)} />
              Unlimited mobile course downloads
            </li>
            <li style={styles.featureItem(true)}>
              <FaCheckCircle style={styles.checkIcon(true)} />
              Download PDF versions
            </li>
          </ul>
          <button style={styles.button("primary")}>Start free trial</button>
        </div>

        <div style={styles.planBox}>
          <div style={styles.recommendedTag}>Recommended</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={styles.planTitle}>Premium</h3>
              <div style={styles.subtext}>For startup enterprise</div>
            </div>
            <div style={styles.price}>
              {isMonthly ? "$49.99/mo" : "$499/yr"}
            </div>
          </div>
          <ul style={styles.featureList}>
            <li style={styles.featureItem()}>
              <FaCheckCircle style={styles.checkIcon()} />
              All courses, exercises and assessments
            </li>
            <li style={styles.featureItem()}>
              <FaCheckCircle style={styles.checkIcon()} />
              Full access to exercise downloads
            </li>
            <li style={styles.featureItem()}>
              <FaCheckCircle style={styles.checkIcon()} />
              Assessment correction system
            </li>
            <li style={styles.featureItem()}>
              <FaCheckCircle style={styles.checkIcon()} />
              Unlimited mobile downloads
            </li>
            <li style={styles.featureItem()}>
              <FaCheckCircle style={styles.checkIcon()} />
              Download and print PDFs
            </li>
          </ul>
          <button style={styles.button("secondary")}>
            {isMonthly ? "Subscribe Monthly" : "Subscribe Annually"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
