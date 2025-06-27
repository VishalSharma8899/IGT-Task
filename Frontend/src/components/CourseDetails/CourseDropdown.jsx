import { FaCheckCircle } from "react-icons/fa";

const CourseDropdown = ({ content }) => {
  const containerStyle = {
    marginTop: "16px",
    paddingTop: "12px",
    borderTop: "1px solid #e5e7eb",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    fontSize: "14px",
    color: "#374151",
  };

  const itemStyle = {
    display: "flex",
    gap: "8px",
    alignItems: "flex-start",
  };

  return (
    <div style={containerStyle}>
      {content.map((item, i) => (
        <div key={i} style={itemStyle}>
          <FaCheckCircle style={{ color: "#9ca3af", marginTop: "4px" }} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default CourseDropdown;
