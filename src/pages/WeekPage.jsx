import React from "react";
import { useParams, Link } from "react-router-dom";
import { getWeekData } from "../utils/dataFunctions";
import ContentSection from "../components/ContentSection";
import "../styles/WeekPage.css"; // Import the CSS file for styling

function WeekPage() {
  const { monthId, weekId } = useParams(); // Get the monthId and weekId from the URL parameters
  const weekData = getWeekData(monthId, weekId); // Fetch the relevant week data

  if (!weekData) {
    return <div>Week not found!</div>; // Handle cases where the week data is not found
  }

  return (
    <div className="week-page">
      <h1>{weekData.title}</h1>
      <ContentSection title="Focus:">
        <p>{weekData.focus}</p>
      </ContentSection>

      <ContentSection title="Actions:">
        <ul>
          {weekData.actions.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection title='"Why" Questions:'>
        <ul>
          {weekData.questions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      </ContentSection>

      {/* Display the Days */}
      {weekData.days.map((day, dayIndex) => (
        <Link
          key={dayIndex}
          to={`/month/${monthId}/week/${weekId}/day/${dayIndex + 1}`}
          className="day-card"
        >
          {day.title}
        </Link>
      ))}

      {/* Back link to the month page */}
      <Link to={`/month/${monthId}`} className="back-link">
        Back to Month {monthId}
      </Link>
    </div>
  );
}

export default WeekPage;
