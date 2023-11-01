import { Link } from "react-router-dom";
import styles from "./DiatLoss.module.css";

function DiatLoss() {
  return (
    <div className={styles.imgbox}>
      <div className={styles.outbox}>
        <ol className={styles.circleList}>
          <Link to={"/diatcuisine/tamildiat/tamildiatloss/tamilmondayloss"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon}`}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Monday</div>
              <div className={styles.descr}>Day 1</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/tamildiat/tamildiatloss/tamiltuesdayloss"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon} `}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Tuesday</div>
              <div className={styles.descr}>Day 2</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/tamildiat/tamildiatloss/tamilwednesdayloss"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon} `}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Wednesday</div>
              <div className={styles.descr}>Day 3</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/tamildiat/tamildiatloss/tamilthursdayloss"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon} `}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Thursday</div>
              <div className={styles.descr}>Day 4</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/tamildiat/tamildiatloss/tamilfridayloss"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon} `}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Friday</div>
              <div className={styles.descr}>Day 5</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/tamildiat/tamildiatloss/tamilsaturdayloss"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon} `}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Saturday</div>
              <div className={styles.descr}>Day 6</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/tamildiat/tamildiatloss/tamilsundayloss"}>
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

    // <div classNameName="container">
    //   <div classNameName="row">
    //     <div classNameName="grid grid-cols-7 gap-4">
    //       <div classNameName="Monday">
    //         {/* <Link to="/diatloss"> */}
    //         <img
    //           src="../src/assets/Design.png"
    //           alt="Weight Gain"
    //           classNameName="diatimg cursor-pointer"
    //         />
    //         {/* </Link> */}

    //       </div>
    //       <div classNameName="Monday">
    //         {" "}
    //         {/* <Link to="/diatloss"> */}
    //         <img
    //           src="../src/assets/Design.png"
    //           alt="Weight Gain"
    //           classNameName=" diatimg cursor-pointer"
    //         />
    //         {/* </Link> */}02
    //       </div>
    //       <div classNameName="Monday">
    //         {" "}
    //         {/* <Link to="/diatloss"> */}
    //         <img
    //           src="../src/assets/Design.png"
    //           alt="Weight Gain"
    //           classNameName=" diatimg cursor-pointer"
    //         />
    //         {/* </Link> */}03
    //       </div>
    //       <div classNameName=" Monday">
    //         {" "}
    //         {/* <Link to="/diatloss"> */}
    //         <img
    //           src="../src/assets/Design.png"
    //           alt="Weight Gain"
    //           classNameName=" diatimg cursor-pointer"
    //         />
    //         {/* </Link> */}04
    //       </div>
    //       <div classNameName="Monday">
    //         {" "}
    //         {/* <Link to="/diatloss"> */}
    //         <img
    //           src="../src/assets/Design.png"
    //           alt="Weight Gain"
    //           classNameName=" diatimg cursor-pointer"
    //         />
    //         {/* </Link> */}05
    //       </div>
    //       <div classNameName="Monday">
    //         {" "}
    //         {/* <Link to="/diatloss"> */}
    //         <img
    //           src="../src/assets/Design.png"
    //           alt="Weight Gain"
    //           classNameName=" diatimg cursor-pointer"
    //         />
    //         {/* </Link> */}06
    //       </div>
    //       <div classNameName="Monday">
    //         {" "}
    //         {/* <Link to="/diatloss"> */}
    //         <img
    //           src="../src/assets/Design.png"
    //           alt="Weight Gain"
    //           classNameName=" diatimg cursor-pointer"
    //         />
    //         {/* </Link> */}07
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // {/*
    //         <div classNameName="flex justify-between">
    //         <div classNameName="w-1/3 flex justify-center items-center">
    //           <Link to="/diatloss">
    //             <img
    //               src='../src/assets/Design.png'
    //               alt="Weight Gain"
    //               classNameName=" diatimg cursor-pointer"
    //             />
    //           </Link>
    //         </div>
    //         <div classNameName="w-1/3 flex justify-center items-center">
    //           <Link to="/diatgain">
    //             <img
    //               src="../src/assets/weightgain.jpg"
    //               alt="Weight Loss"
    //               classNameName=" diatimg cursor-pointer"
    //             />
    //           </Link>
    //         </div>
    //       </div> */}
  );
}

export default DiatLoss;
//

//132.562*765
