import { Link } from "react-router-dom";
import styles from "./DiatRout.module.css";

function DiatRout() {
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-6" style={{ height: 730 }}>
        <div className={styles.imgweightloss}>
          <Link to="/diatcuisine/diat/diatloss">
            <div className={styles.weightloss}>Weight Loss</div>
          </Link>
        </div>

        <div className={styles.imgweightgain}>
          <Link to="/diatcuisine/diat/diatgain">
            <div className={styles.weightgain}>Weight Gain</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DiatRout;
