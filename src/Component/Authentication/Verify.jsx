import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { backendUrl } from "../../config";
import styles from "./Verify.module.css";

const Verify = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const verifyUser = async () => { 
  //   try {
  //     const Response = await fetch('https://dietbackend.onrender.com/auth/validate', {
  //     method: "PUT",
  //     body: JSON.stringify({ resetKey: params.get("reset") }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await Response.json();
  //   console.log(data === true);
  //   if (data === true) {
  //     alert("Login Success");
  //     navigate("/paswordreset");
  //   } else {
  //     alert("Login failed");
  //   }
  // };



  try {
    const response = await fetch("https://dietbackend.onrender.com/api/auth/validate", {
      method: "PUT",
      body: JSON.stringify({ resetkey: params.get("reset") }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("Login Success");
      navigate("/login");
    } else {
      alert("Login failed");
    }
  } catch (error) {
    console.log("Error during email verifivation:", error);
    alert("An error occurred during email verification.");
  }
};

  useEffect(() => {
    verifyUser();
  }, []);

  return (
    <div className={styles.box}>
      <h1 className={styles.h1}>VERIFYING THE EMAIL</h1>
      <div className={styles.center}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
      </div>
    </div>
  );
};

export default Verify;
