import React, { useState } from "react";

function CollapsibleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-section">
      <button className="collapsible-button" onClick={toggleOpen}>
        <span className="toggle-icon">{isOpen ? "-" : "+"}</span>
        <span className="section-title">{title}</span>
      </button>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
}

export default CollapsibleSection;
