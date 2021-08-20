import React from "react";
import styles from './preloader.module.css';
import preloader from "../../../assets/images/preloader.png";

let Preloader = (props) => {
    return <div>
            <img src={preloader} alt='' className={styles.preloaderPic}/>
    </div>
}

export default Preloader;