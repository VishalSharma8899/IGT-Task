 import React, { useRef, useEffect, useState } from "react";
import video from "../../assets/video.mp4";

const RightContent = () => {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      vid.pause();
    }

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    right: {
      background: "#ffffff",
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      overflow: "visible",  
      
      position: "relative",
    },
    videoWrapper: {
      position: "relative",
      borderRadius: "12px",
      overflow: "hidden",
      border: "2px solid #facc15",
      height: "70vh",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      maxWidth: isMobile ? "90%" : "320px",
      width: "100%",
      marginLeft: isMobile ? "0" : "-40vw",  
      zIndex: 5,
    },
    video: {
      width: "100%",
      height: "100%",
      display: "block",
      borderRadius: "12px",
      objectFit: "cover",
    },
    playButton: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "36px",
      background: "rgba(255, 255, 255, 0.5)",
      borderRadius: "50%",
      padding: "10px 15px",
      cursor: "pointer",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      zIndex: 10,
      transition: "background 0.2s ease",
    },
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div style={styles.right}>
      <div style={styles.videoWrapper}>
        <video
          ref={videoRef}
          style={styles.video}
          muted
          playsInline
          preload="metadata"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div style={styles.playButton} onClick={handlePlay}>
          ▶
        </div>
      </div>
    </div>
  );
};

export default RightContent;
