import React from "react";
import { Link } from "react-router-dom";
import "../styles/MainPage.css";
import corePrinciples from "../data/core-principles.json";
import keyImprovements from "../data/key-improvements.json";
import ContentSection from "../components/ContentSection";

function MainPage() {
  const monthNames = [
    // "January",
    // "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    //   "September",
    //   "October",
    //   "November",
    //   "December",
  ];

  return (
    <div className="main-page">
      <h1>6-Month Full-Stack Developer Study Plan</h1>

      <ContentSection title="Core Principles">
        <ul>
          {corePrinciples.principles.map((principle, index) => (
            <li key={index}>{principle}</li>
          ))}
        </ul>
      </ContentSection>
      <ContentSection title="Key Improvements">
        <ul>
          {keyImprovements.improvements.map((improvement, index) => (
            <li key={index}>{improvement}</li>
          ))}
        </ul>
      </ContentSection>
      <ContentSection title="Months">
        {monthNames.map((month, index) => (
          <Link to={`/month/${index + 1}`} className="month-card">
            {month}
          </Link>
        ))}
      </ContentSection>
    </div>
  );
}

export default MainPage;
