import React from "react";

const Modal = ({ data, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "12px",
          maxWidth: "90%",
          width: "400px",
          textAlign: "center",
        }}
      >
        <img
          src={data.image}
          alt="card-img"
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <h3 style={{ marginTop: "20px", color: "#0F2137" }}>{data.title}</h3>
        <p>
          ⭐ {data.stars} from {data.reviewCount} reviews
        </p>
        <p>👨‍🎓 Watched by {data.studentsWatched} students</p>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#EF9E48",
            border: "none",
            borderRadius: "6px",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
