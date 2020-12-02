import React from "react";

import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.Background}>
      <div className={styles.Container}>
        <div className={styles.Modal}>
          <input
            style={{marginTop: '10px'}}
            placeholder="First Name..."
            className={styles.FirstName}
            type="string"
          />
          <input
            style={{marginTop: '10px'}}
            placeholder="Last Name..."
            className={styles.LastName}
            type="string"
          />
          <input
            style={{marginTop: '10px'}}
            placeholder="Email"
            className={styles.Email}
            type="string"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
