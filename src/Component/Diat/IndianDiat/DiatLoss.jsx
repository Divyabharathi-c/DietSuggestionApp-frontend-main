import { Link } from "react-router-dom";
import styles from "./DiatLoss.module.css";

function DiatLoss() {
  return (
    <div className={styles.imgbox}>
      <div className={styles.outbox}>
        <ol className={styles.circleList}>
          <Link to={"/diatcuisine/diat/diatloss/mondayloss"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon}`}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Monday</div>
              <div className={styles.descr}>Day 1</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/diat/diatloss/tuesdayloss"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon} `}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Tuesday</div>
              <div className={styles.descr}>Day 2</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/diat/diatloss/wednesdayloss"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon} `}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Wednesday</div>
              <div className={styles.descr}>Day 3</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/diat/diatloss/thursdayloss"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon} `}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Thursday</div>
              <div className={styles.descr}>Day 4</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/diat/diatloss/fridayloss"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon} `}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Friday</div>
              <div className={styles.descr}>Day 5</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/diat/diatloss/saturdayloss"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon} `}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Saturday</div>
              <div className={styles.descr}>Day 6</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/diat/diatloss/sundayloss"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon} `}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Sunday</div>
              <div className={styles.descr}>Day 7</div>
            </li>
          </Link>
          {/* Repeat the same structure for other list items */}
        </ol>
      </div>
    </div>
  );
}

export default DiatLoss;



