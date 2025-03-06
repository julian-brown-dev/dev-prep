import React from "react";
import { useParams, Link } from "react-router-dom";
import ContentSection from "../components/ContentSection";
import { getMonthData } from "../utils/dataFunctions";
import "../styles/MonthPage.css"; // Import the CSS file for styling

function MonthPage() {
  const { monthId } = useParams(); // Get the monthId from the URL parameters
  const monthData = getMonthData(monthId); // Fetch the relevant month data
  if (!monthData) {
    return <div>Month not found!</div>; // Handle cases where the month data is not found
  }

  return (
    <div className="month-page">
      <h1>{monthData.title}</h1>

      {/* Display the Focus, Actions, and "Why" Questions */}
      <ContentSection title="Focus:">
        <p>{monthData.focus}</p>
      </ContentSection>

      <ContentSection title="Actions:">
        <ul>
          {monthData.actions.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection title='"Why" Questions:'>
        <ul>
          {monthData.whyQuestions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      </ContentSection>

      {/* Display the Weeks */}
      {monthData.weeks.map((week, weekIndex) => (
        <Link
          to={`/month/${monthId}/week/${weekIndex + 1}`}
          key={weekIndex}
          className="day-card"
        >
          {week.title}
        </Link>
      ))}

      {/* Back link to the main page */}
      <Link to="/" className="back-link">
        Back to Main Page
      </Link>
    </div>
  );
}

export default MonthPage;
