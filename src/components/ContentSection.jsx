import React from "react";

function ContentSection({ title, children }) {
  return (
    <div className="content-section">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default ContentSection;
