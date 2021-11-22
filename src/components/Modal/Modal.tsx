import React from "react";

import styles from "./modal.module.css";

interface TModal {
  onNameData: string;
  onTextData: string;
}

export const Modal: React.FC<TModal> = ({ onNameData, onTextData }) => {
  return (
    <>
      {onTextData.length !== 0 && (
        <div className={styles.Modal}>
          <p className={styles.Text}>
            Sent: Name: {onNameData} comment: {onTextData}
          </p>
        </div>
      )}
    </>
  );
};
