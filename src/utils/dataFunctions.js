import month1Data from "../data/month1.json"; // Import your month data

// Function to fetch the relevant week data based on monthId and weekId
function getWeekData(monthId, weekId) {
  const monthData = getMonthData(monthId);
  if (monthData) {
    const weekIndex = parseInt(weekId, 10) - 1;
    if (weekIndex >= 0 && weekIndex < monthData.weeks.length) {
      return monthData.weeks[weekIndex];
    }
  }
  return null;
}

// Function to fetch the relevant month data based on monthId
function getMonthData(monthId) {
  // Implement your logic to fetch data based on monthId
  // For now, we'll just use the imported month1Data
  if (monthId === "1") {
    return month1Data;
  }
  // Add more conditions as you add more months
  return null;
}

// Function to fetch the relevant day data based on monthId, weekId, and dayId
function getDayData(monthId, weekId, dayId) {
  const weekData = getWeekData(monthId, weekId);
  if (weekData) {
    const dayIndex = parseInt(dayId, 10) - 1;
    if (dayIndex >= 0 && dayIndex < weekData.days.length) {
      return weekData.days[dayIndex];
    }
  }
  return null;
}

export { getWeekData, getMonthData, getDayData };
