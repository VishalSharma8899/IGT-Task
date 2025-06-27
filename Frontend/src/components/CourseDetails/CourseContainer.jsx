import React from "react";
import CourseItem from "./CourseItem";

const dummyCourses = [
  {
    id: 1,
    title:
      "Professional graphic design tutorial full course with exercise file",
    reviews: 392,
    rating: 5,
    studentsWatched: 2538,
    duration: "4 hrs",
    classes: 7,
    content: [],
  },
  {
    id: 2,
    title: "Become ultimate photoshop expert within 30 days",
    reviews: 524,
    rating: 5,
    studentsWatched: 3532,
    duration: "4 hrs",
    classes: 7,
    content: [
      "How to reduce file pixel dimensions without losing quality",
      "Create vector file from rasterize layer styles",
      "How to make logo pixel perfect with different extensions",
      "Make color gradient with Photoshop built-in tools",
    ],
  },
];

const CourseContainer = () => {
  return (
    <div style={styles.container}>
      <p style={styles.heading}>QUALITY FEATURES</p>
      <h2 style={styles.title}>Popular Designing Course</h2>
      <div style={styles.courseList}>
        {dummyCourses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseContainer;

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "0 16px",
  },
  heading: {
    textAlign: "center",
    color: "#f59e0b",
    fontWeight: "600",
    fontSize: "14px",
    letterSpacing: "1px",
  },
  title: {
    textAlign: "center",
    fontSize: "32px",
    color: "#0F2137",
    fontWeight: "700",
    marginBottom: "40px",
  },
  courseList: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    width: "100%",
  },
};
