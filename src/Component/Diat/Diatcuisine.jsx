import { Link } from "react-router-dom";
// import style form './DiatRout.module.css';
import styles from "./Diatcuisine.module.css";

function Diatcuisine() {
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-6" style={{ height: 730 }}>
        <div className={styles.imgweightloss}>
          <Link to="/diatcuisine/diat">
            <div className={styles.weightloss}>Indian</div>
          </Link>
        </div>

        <div className={styles.imgweightgain}>
          <Link to="/diatcuisine/tamildiat">
            <div className={styles.weightgain}>Tamil Nadu</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Diatcuisine;
