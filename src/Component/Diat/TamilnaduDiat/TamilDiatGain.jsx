import { Link } from "react-router-dom";
import styles from "./DiatGain.module.css";

function DiatGain() {
  return (
    <div className={styles.imgbox}>
      <div className={styles.outbox}>
        <ol className={styles.circleList}>
          <Link to={"/diatcuisine/tamildiat/tamildiatgain/tamilmondaygain"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon}`}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Monday</div>
              <div className={styles.descr}>Day 1</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/tamildiat/tamildiatgain/tamiltuesdaygain"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon} `}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Tuesday</div>
              <div className={styles.descr}>Day 2</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/tamildiat/tamildiatgain/tamilwednesdaygain"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon} `}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Wednesday</div>
              <div className={styles.descr}>Day 3</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/tamildiat/tamildiatgain/tamilthursdaygain"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon} `}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Thursday</div>
              <div className={styles.descr}>Day 4</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/tamildiat/tamildiatgain/tamilfridaygain"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon} `}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Friday</div>
              <div className={styles.descr}>Day 5</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/tamildiat/tamildiatgain/tamilsaturdaygain"}>
            <li className={styles.circleListItem}>
              <div className={`${styles.icon} `}>
                <i className="fa-solid "></i>
              </div>
              <div className={styles.title}>Saturday</div>
              <div className={styles.descr}>Day 6</div>
            </li>
          </Link>
          <Link to={"/diatcuisine/tamildiat/tamildiatgain/tamilsundaygain"}>
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
    //         {/* <Link to="/diatgain"> */}
    //         <img
    //           src="../src/assets/Design.png"
    //           alt="Weight Gain"
    //           classNameName="diatimg cursor-pointer"
    //         />
    //         {/* </Link> */}

    //       </div>
    //       <div classNameName="Monday">
    //         {" "}
    //         {/* <Link to="/diatgain"> */}
    //         <img
    //           src="../src/assets/Design.png"
    //           alt="Weight Gain"
    //           classNameName=" diatimg cursor-pointer"
    //         />
    //         {/* </Link> */}02
    //       </div>
    //       <div classNameName="Monday">
    //         {" "}
    //         {/* <Link to="/diatgain"> */}
    //         <img
    //           src="../src/assets/Design.png"
    //           alt="Weight Gain"
    //           classNameName=" diatimg cursor-pointer"
    //         />
    //         {/* </Link> */}03
    //       </div>
    //       <div classNameName=" Monday">
    //         {" "}
    //         {/* <Link to="/diatgain"> */}
    //         <img
    //           src="../src/assets/Design.png"
    //           alt="Weight Gain"
    //           classNameName=" diatimg cursor-pointer"
    //         />
    //         {/* </Link> */}04
    //       </div>
    //       <div classNameName="Monday">
    //         {" "}
    //         {/* <Link to="/diatgain"> */}
    //         <img
    //           src="../src/assets/Design.png"
    //           alt="Weight Gain"
    //           classNameName=" diatimg cursor-pointer"
    //         />
    //         {/* </Link> */}05
    //       </div>
    //       <div classNameName="Monday">
    //         {" "}
    //         {/* <Link to="/diatgain"> */}
    //         <img
    //           src="../src/assets/Design.png"
    //           alt="Weight Gain"
    //           classNameName=" diatimg cursor-pointer"
    //         />
    //         {/* </Link> */}06
    //       </div>
    //       <div classNameName="Monday">
    //         {" "}
    //         {/* <Link to="/diatgain"> */}
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
    //           <Link to="/diatgain">
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
    //               alt="Weight Gain"
    //               classNameName=" diatimg cursor-pointer"
    //             />
    //           </Link>
    //         </div>
    //       </div> */}
  );
}

export default DiatGain;
//

//132.562*765
