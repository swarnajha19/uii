import React from "react";
import { Link } from "react-router-dom";

const AuthForm = ({
  title,
  buttonText,
  onSubmit,
  linkText,
  linkTo,
  children,
}) => (
  <div style={styles.body}>
    <div style={styles.container}>
      <h1 style={styles.header}>{title}</h1>
      <form style={styles.form} onSubmit={onSubmit}>
        {children}
        <input style={styles.button} type="submit" value={buttonText} />
      </form>
      <p style={styles.footer}>
        {linkText}{" "}
        <Link to={linkTo} style={styles.link}>
          {linkText === "Don't have an account?" ? "Sign up" : "Log in"}
        </Link>
      </p>
    </div>
  </div>
);

const styles = {
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f9f9f9",
    color: "#333",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "90%",
    maxWidth: "400px",
    textAlign: "center",
  },
  header: {
    marginBottom: "20px",
    color: "#4a90e2",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    textAlign: "left",
    fontWeight: "bold",
    color: "#555",
  },
  input: {
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "1rem",
    width: "100%",
  },
  button: {
    background: "#4a90e2",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "30px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
  footer: {
    marginTop: "20px",
    fontSize: "0.9rem",
    color: "#555",
  },
  link: {
    color: "#4a90e2",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default AuthForm;
