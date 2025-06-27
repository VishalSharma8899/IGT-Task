import React, { useState } from "react";
import { FaStar, FaEye, FaChevronDown, FaChevronUp } from "react-icons/fa";
import CourseDropdown from "./CourseDropdown";

const CourseItem = ({ course }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={styles.card}>
      <div style={styles.row}>
        <div style={styles.leftBlock}>
          <div style={styles.playBtn}>▶</div>
          <div style={styles.contentBlock}>
            <div style={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span style={styles.ratingText}>
                {course.rating}.0 ({course.reviews} reviews)
              </span>
            </div>
            <h3 style={styles.title}>{course.title}</h3>
            <p style={styles.subtitle}>
              Get your tutorials delivered at let home collect sample from the
              victory of the managments.
            </p>
            <div style={styles.meta}>
              <span style={styles.metaItem}>
                <FaEye /> {course.studentsWatched.toLocaleString()} students
                watched
              </span>
            </div>
          </div>
        </div>

        <div style={styles.rightBlock}>
          <span style={styles.badge}>{course.classes} Video Classes</span>
          <span style={styles.badge}>{course.duration}</span>
          <button
            onClick={() => setOpen(!open)}
            style={styles.toggleBtn}
            aria-label="Toggle Dropdown"
          >
            {open ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
      </div>

      {open && course.content.length > 0 && (
        <CourseDropdown content={course.content} />
      )}
    </div>
  );
};

export default CourseItem;

const styles = {
  card: {
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "16px",
  },
  leftBlock: {
    display: "flex",
    flex: 1,
    minWidth: "250px",
    gap: "16px",
    flexWrap: "wrap",
  },
  playBtn: {
    width: "40px",
    height: "40px",
    backgroundColor: "#fef3c7",
    color: "#f97316",
    borderRadius: "999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "18px",
    marginTop: "4px",
    flexShrink: 0,
  },
  contentBlock: {
    flex: 1,
    minWidth: 0,
  },
  rating: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "14px",
    color: "#facc15",
    flexWrap: "wrap",
  },
  ratingText: {
    color: "#6b7280",
    marginLeft: "8px",
    fontSize: "13px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#111827",
    margin: "8px 0",
  },
  subtitle: {
    fontSize: "14px",
    color: "#6b7280",
  },
  meta: {
    display: "flex",
    alignItems: "center",
    fontSize: "13px",
    color: "#6b7280",
    gap: "12px",
    marginTop: "4px",
    flexWrap: "wrap",
  },
  metaItem: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  rightBlock: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "8px",
    justifyContent: "flex-end",
    flex: "0 0 auto",
  },
  badge: {
    backgroundColor: "#10b981",
    color: "#fff",
    fontSize: "11px",
    padding: "6px 12px",
    borderRadius: "6px",
    whiteSpace: "nowrap",
  },
  toggleBtn: {
    color: "#6b7280",
    fontSize: "16px",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: 0,
  },
};
