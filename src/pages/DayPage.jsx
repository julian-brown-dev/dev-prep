import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ContentSection from '../components/ContentSection';
import TaskList from '../components/TaskList';
import { getDayData } from "../utils/dataFunctions";
import '../styles/DayPage.css'; // Import the CSS file for styling

function DayPage() {
    const { monthId, weekId, dayId } = useParams(); // Get the monthId, weekId, and dayId from the URL parameters
    const dayData = getDayData(monthId, weekId, dayId); // Fetch the relevant day data

    if (!dayData) {
        return <div>Day not found!</div>; // Handle cases where the day data is not found
    }

    return (
        <div className="day-page">
            <h1>{dayData.title}</h1>

            {/* Display the Focus, Actions, and "Why" Questions for the day */}
            <ContentSection title="Focus:">
                <p>{dayData.focus}</p>
            </ContentSection>

            <ContentSection title="Actions:">
                <ul>
                    {dayData.actions.map((action, index) => (
                        <li key={index}>{action}</li>
                    ))}
                </ul>
            </ContentSection>

            <ContentSection title='"Why" Questions:'>
                <ul>
                    {dayData.questions.map((question, index) => (
                        <li key={index}>{question}</li>
                    ))}
                </ul>
            </ContentSection>

            {/* Display the Study Items, Practice Tasks, and "Why" Analysis */}
            <ContentSection title="Study:">
                <ul>
                    {dayData.studyItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </ContentSection>

            <ContentSection title="Practice:">
                <TaskList tasks={dayData.practiceTasks} title={dayData.title} />
            </ContentSection>

            <ContentSection title='"Why" Analysis:'>
                <ul>
                    {dayData.whyItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </ContentSection>

            {/* Back link to the week page */}
            <Link to={`/month/${monthId}/week/${weekId}`} className="back-link">
                Back to Week {weekId}
            </Link>
        </div>
    );
}


export default DayPage;