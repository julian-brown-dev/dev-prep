import React, { useState, useEffect } from "react";

function TaskList({ tasks, title }) {
  const [checkedTasks, setCheckedTasks] = useState([]);

  useEffect(() => {
    const storageKey = `checkedTasks-${title}`;
    const storedTasks = localStorage.getItem(storageKey);
    if (storedTasks) {
      setCheckedTasks(JSON.parse(storedTasks));
    } else {
      // Initialize with all tasks unchecked by default
      setCheckedTasks(tasks.map(() => false));
    }
  }, [tasks, title]); // Run this effect only when the 'tasks' prop changes

  useEffect(() => {
    const storageKey = `checkedTasks-${title}`;
    localStorage.setItem(storageKey, JSON.stringify(checkedTasks));
  }, [checkedTasks, title]); // Run this effect only when 'checkedTasks' changes

  const handleCheckboxChange = (index) => {
    setCheckedTasks((prevCheckedTasks) => {
      const updatedCheckedTasks = [...prevCheckedTasks];
      updatedCheckedTasks[index] = !updatedCheckedTasks[index];
      return updatedCheckedTasks;
    });
  };

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div className="task-item" key={index}>
          <label>
            <input
              type="checkbox"
              checked={checkedTasks[index] || false} // Ensure checkedTasks[index] is not undefined
              onChange={() => handleCheckboxChange(index)}
            />
            {task}
          </label>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
