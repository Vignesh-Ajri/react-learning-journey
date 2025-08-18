import React from "react";

export function FunctionalComponent({ name = "Guest" }) {
  return (
    <div style={styles.card}>
      <h2>Functional Component</h2>
      <p>
        Hello, {name}! This is rendered using props in a functional component.
      </p>
    </div>
  );
}

export const PropsComponent = (props) => {
  return (
    <div style={styles.card}>
      <h2>PropsComponent</h2>
      <p>
        Hello, {props.name}! This is rendered using props in a functional
        component.
      </p>
    </div>
  );
};

export class ClassComponent extends React.Component {
  render() {
    return (
      <div style={styles.card}>
        <h2>Class Component</h2>
        <p>
          Hello, {this.props.name}! This is rendered using props in a class
          component.
        </p>
      </div>
    );
  }
}

export function Card({ title, children }) {
  return (
    <div style={styles.card}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "8px",
    background: "#f9f9f9",
  },
};
