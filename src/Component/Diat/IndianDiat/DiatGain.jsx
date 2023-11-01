import { Link } from "react-router-dom";
import styles from "./DiatGain.module.css";

function DiatGain() {
  return (
    <div className={styles.imgbox}>
      <div className={styles.outbox}>
        <ol className={styles.circleList}>
          <Link to={"/diatcuisine/diat/diatgain/mondaygain"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon}`}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Monday</div>
              <div className={styles.descr}>Day 1</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/diat/diatgain/tuesdaygain"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon} `}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Tuesday</div>
              <div className={styles.descr}>Day 2</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/diat/diatgain/wednesdaygain"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon} `}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Wednesday</div>
              <div className={styles.descr}>Day 3</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/diat/diatgain/thursdaygain"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon} `}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Thursday</div>
              <div className={styles.descr}>Day 4</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/diat/diatgain/fridaygain"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon} `}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Friday</div>
              <div className={styles.descr}>Day 5</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/diat/diatgain/saturdaygain"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon} `}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Saturday</div>
              <div className={styles.descr}>Day 6</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/diat/diatgain/sundaygain"}>
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

export default DiatGain;

