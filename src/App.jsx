import "./styles/App.css";
import CollapsibleSection from "./components/CollapsibleSection";
import ContentSection from "./components/ContentSection";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <CollapsibleSection title="week 1: test">
        <ContentSection title="Study:">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
          <TaskList title="task title" tasks={["task 1", "task 2"]} />
        </ContentSection>
      </CollapsibleSection>
    </>
  );
}

export default App;
