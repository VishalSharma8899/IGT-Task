import React from "react";

const styles = {
  wrapper: {
    fontFamily: "sans-serif",
    padding: "4rem 2rem",
    backgroundColor: "#fff",
    borderTop: "1px solid #e5e7eb",
  },
  ctaContainer: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  ctaHeading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: "1rem",
  },
  ctaButton: {
    backgroundColor: "#fef3c7",
    color: "#92400e",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "6px",
    fontWeight: "500",
    cursor: "pointer",
  },
  footerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "2rem",
    paddingTop: "2rem",
    borderTop: "1px solid #e5e7eb",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  column: {
    textAlign: "left",
  },
  columnTitle: {
    fontWeight: "600",
    marginBottom: "1rem",
    color: "#0f172a",
  },
  link: {
    display: "block",
    fontSize: "14px",
    color: "#4b5563",
    textDecoration: "none",
    marginBottom: "0.5rem",
    cursor: "pointer",
  },
};

const footerData = [
  {
    title: "About Us",
    links: [
      "Support Center",
      "Customer Support",
      "About Us",
      "Copyright",
      "Popular Campaign",
    ],
  },
  {
    title: "Our Information",
    links: [
      "Return Policy",
      "Privacy Policy",
      "Terms & Conditions",
      "Site Map",
      "Store Hours",
    ],
  },
  {
    title: "My Account",
    links: [
      "Press inquiries",
      "Social media",
      "directories",
      "Images & B–roll",
      "Permissions",
    ],
  },
  {
    title: "Policy",
    links: [
      "Application security",
      "Software principles",
      "Unwanted software policy",
      "Responsible supply chain",
    ],
  },
];

const FooterCTA = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.ctaContainer}>
        <h2 style={styles.ctaHeading}>Ready to learn design with Nia Matos</h2>
        <button style={styles.ctaButton}>Start Learning Today</button>
      </div>

      <div style={styles.footerGrid}>
        {footerData.map((col, idx) => (
          <div key={idx} style={styles.column}>
            <div style={styles.columnTitle}>{col.title}</div>
            {col.links.map((link, i) => (
              <a key={i} style={styles.link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterCTA;
