import { FaStar, FaEye } from "react-icons/fa";

const styles = {
  card: {
    width: "25vw",
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

const ReviewCard = ({ image, stars, reviewCount, title, studentsWatched }) => {
  return (
    <div
      style={styles.card}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={styles.imageWrapper}>
        <img src={image} alt="tutorial" style={styles.image} />
        <div style={styles.playButtonWrapper}>
          <button style={styles.playButton}>▶</button>
        </div>
      </div>
      <div style={styles.content}>
        <div style={styles.ratingRow}>
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              style={{ color: stars >= i + 1 ? "#facc15" : "#d1d5db" }}
            />
          ))}
          <span style={styles.ratingText}>
            {stars.toFixed(1)} ({reviewCount} reviews)
          </span>
        </div>
        <h3 style={styles.title}>{title}</h3>
        <div style={styles.watched}>
          <FaEye style={styles.eyeIcon} />
          {studentsWatched.toLocaleString()} students watched
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
