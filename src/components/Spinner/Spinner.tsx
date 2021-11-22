import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Spinner.module.css";

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <Loader
        type="ThreeDots"
        color="grey"
        height={50}
        width={50}
        timeout={5000}
      />
    </div>
  );
};
