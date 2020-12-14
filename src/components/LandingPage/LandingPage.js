import React, { useState } from "react";

import Modal from "../UI/Modal/Modal";
import SignUp from "../SignUp/SignUp";
import Button from "../UI/Button/Button";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const [show, setShow] = useState(false);
  const [modalClosed, setModalClosed] = useState(true);

  const signUpCancelHandler = () => {
    setModalClosed(true);
  };

  const signUpOpenHandler = () => {
    setShow(true);
  };

  return (
    <div className={styles.Background}>
      <Modal show={show} modalClosed={signUpCancelHandler}>
        <SignUp />
        <button onClick={() => setShow(false)}>press me</button>
      </Modal>
      <div className={styles.ButtonContainer}>
        <Button btnType="Success" clicked={signUpOpenHandler}>
          Sign Up Today
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;

{
  /* <div className={styles.Container}>
        <div className={styles.ModalContainer}>
          <div className={styles.Modal}>
          <form >
            <input
              style={{
                marginTop: "10px",
                width: "50%",
                padding: "5px",
                border: "1px, solid, black",
                WebkitBoxSizing: "border-box",
                MozBoxSizing: "border-box",
                boxSizing: "border-box",
              }}
              placeholder="First Name..."
              className={styles.FirstName}
              type="text"
            />
            <input
              style={{
                marginTop: "10px",
                width: "40%",
                padding: "5px",
                border: "1px, solid, black",
                WebkitBoxSizing: "border-box",
                MozBoxSizing: "border-box",
                boxSizing: "border-box",
              }}
              placeholder="Last Name..."
              className={styles.LastName}
              type="text"
            />
            <input
              style={{
                marginTop: "10px",
                width: "30%",
                padding: "5px",
                border: "1px, solid, black",
                WebkitBoxSizing: "border-box",
                MozBoxSizing: "border-box",
                boxSizing: "border-box",
              }}
              placeholder="Email..."
              className={styles.Email}
              type="text"
            />

          </form>
          </div>
          <button>Button</button>
        </div>
      </div> */
}

{
  /* <div className={styles.SignUp}>
<form>
  <input
    placeholder="First Name..."
    className={styles.FirstName}
    type="text"
  />
  <input
    placeholder="Last Name..."
    className={styles.LastName}
    type="text"
  />
  <input
    placeholder="Email..."
    className={styles.Email}
    type="text"
  />
</form>
</div> */
}
