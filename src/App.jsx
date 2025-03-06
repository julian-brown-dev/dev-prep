import MainPage from "./pages/MainPage";
import MonthPage from "./pages/MonthPage";
import WeekPage from "./pages/WeekPage";
import DayPage from "./pages/DayPage";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/month/:monthId" element={<MonthPage />} />
        <Route path="/month/:monthId/week/:weekId" element={<WeekPage />} />
        <Route
          path="/month/:monthId/week/:weekId/day/:dayId"
          element={<DayPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
