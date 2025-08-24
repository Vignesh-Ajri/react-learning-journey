import React from "react";
import styles from "./Day08CSS/Day08Button.module.css";

export default function Day08StyledButton() {
  // Inline styles example
  const inlineStyle = {
    backgroundColor: "tomato",
    color: "white",
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Day 8 — Styling in React</h2>

      {/* Inline styling */}
      <button style={inlineStyle}>Inline Styled Button</button>

      <br />
      <br />

      {/* CSS Module styling */}
      <button className={styles.btn}>CSS Module Styled Button</button>
    </div>
  );
}
