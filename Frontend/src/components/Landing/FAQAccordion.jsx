import React, { useState } from "react";

const faqData = [
  {
    question: "How to contact with riders emergency ?",
    answer:
      "You can contact riders during emergency by using the in-app emergency call button located under the Help section.",
  },
  {
    question: "App installation failed, how to update system information?",
    answer:
      "Ensure your OS is up to date and permissions are granted. Clear cache and reinstall the app from a verified source.",
  },
  {
    question: "Website reponse taking time, how to improve?",
    answer:
      "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic. The purpose of an FAQ is generally to provide information efficiently to users experiencing common problems.",
  },
  {
    question: "New update fixed all bug and issues",
    answer:
      "The latest update has resolved all known bugs and improved overall system stability. Update now for the best experience.",
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div style={styles.container}>
      <div style={styles.subLabel}>Frequent Question</div>
      <h2 style={styles.heading}>Do you have any question</h2>

      {faqData.map((faq, index) => (
        <div key={index} style={styles.faqItem}>
          <div style={styles.questionRow} onClick={() => toggle(index)}>
            <span style={styles.icon}>{activeIndex === index ? "−" : "+"}</span>
            {faq.question}
          </div>
          {activeIndex === index && (
            <div style={styles.answer}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
const styles = {
  container: {
    borderRadius: "8px",
    maxWidth: "800px",
    margin: "2rem auto",
    padding: "1rem",
  },
  heading: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: "1.5rem",
  },
  subLabel: {
    textAlign: "center",
    color: "orange",
    fontSize: "12px",
    letterSpacing: "1px",
    marginBottom: "0.3rem",
    textTransform: "uppercase",
  },
  faqItem: {
    borderTop: "1px solid #e5e7eb",
    padding: "1rem 0",
  },
  questionRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "16px",
    color: "#111827",
  },
  icon: {
    fontSize: "20px",
    color: "#10b981",
    fontWeight: "bold",
    minWidth: "20px",
  },
  answer: {
    marginTop: "0.5rem",
    fontSize: "14px",
    color: "#4b5563",
    lineHeight: "1.5",
  },
};
