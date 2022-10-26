import React from "react";
import "../styles/footer.scss";

export default function Footer(props) {
  const { removeLoginToken } = props;

  return (
    <footer className="content-container">
      <button
        id="logout-btn"
        className="btn btn--link"
        onClick={removeLoginToken}
      >
        <i className="fa-solid fa-power-off"></i>
        <span>Logout</span>
      </button>
    </footer>
  );
}
