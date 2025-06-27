import React from "react";
import Navbar from "./navbar";
import LeftSidebar from "./leftContent";
import RightContent from "./rightContent";
import Main from "../Course/main";
import StatsContainer from "../Stats/StatsContainer";
import CourseContainer from "../CourseDetails/CourseContainer";
import Works from "./Works";
import MainTutorial from "../Tutorial/MainTutorial";
import FAQAccordion from "./FAQAccordion";
import FooterCTA from "./FooterCTA";
import PricingPlans from "./PricingPlans";

const Landing = () => {
  const container = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    width: "100vw",
    // background: "linear-gradient(to right, #ebf8ff, #fffbea)",
    background: "white",
  };

  const topSection = {
    display: "flex",

    justifyContent: "space-between",
    alignItems: "center",

    flexWrap: "wrap",
  };

  const mainSection = {
    width: "100%",
    padding: "40px 0",
  };

  return (
    <div style={container}>
      <Navbar />

      <div style={topSection}>
        <LeftSidebar />
        <RightContent />
      </div>

      <div style={mainSection}>
        <Main />
      </div>
      <div style={mainSection}>
        <StatsContainer />
      </div>
      <div style={mainSection}>
        <CourseContainer />
      </div>

      <div style={mainSection}>
        <Works />
      </div>
      <div style={mainSection}>
        <PricingPlans />
      </div>
      <div style={mainSection}>
        <MainTutorial />
      </div>

      <div style={mainSection}>
        <FAQAccordion />
      </div>

      <div style={mainSection}>
        <FooterCTA />
      </div>
    </div>
  );
};

export default Landing;
