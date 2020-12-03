import React from "react";

import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.Background}>
      <div className={styles.Container}>
        <div className={styles.ModalContainer}>
          <div className={styles.Modal}>
            <input
              style={{
                marginTop: "10px",
                width: "100%",
                padding: "5px",
                border: "1px, solid, black",
                WebkitBoxSizing: "border-box",
                MozBoxSizing: "border-box",
                boxSizing: "border-box",
              }}
              placeholder="First Name..."
              className={styles.FirstName}
              type="string"
            />
            <input
              style={{
                marginTop: "10px",
                width: "100%",
                padding: "5px",
                border: "1px, solid, black",
                WebkitBoxSizing: "border-box",
                MozBoxSizing: "border-box",
                boxSizing: "border-box",
              }}
              placeholder="Last Name..."
              className={styles.LastName}
              type="string"
            />
            <input
              style={{
                marginTop: "10px",
                width: "100%",
                padding: "5px",
                border: "1px, solid, black",
                WebkitBoxSizing: "border-box",
                MozBoxSizing: "border-box",
                boxSizing: "border-box",
              }}
              placeholder="Email"
              className={styles.Email}
              type="string"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
