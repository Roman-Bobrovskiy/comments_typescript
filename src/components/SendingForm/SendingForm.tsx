import React from "react";

import styles from "./SendingForm.module.css";

interface TSendingForm {
  onChangeName: (event: any) => void;
  onChangeText: (event: any) => void;
  onSubmit: (event: any) => void;
  onNameData: string;
  onTextData: string;
}

export const SendingForm: React.FC<TSendingForm> = ({
  onSubmit,
  onChangeName,
  onChangeText,
  onNameData,
  onTextData,
}) => {
  return (
    <form className={styles.wrapForm} onSubmit={onSubmit}>
      <label className={styles.nameLabel}>
        <input
          className={styles.inputName}
          value={onNameData}
          name="name"
          type="text"
          onChange={(e) => onChangeName(e)}
          required
          placeholder="Please enter yor name"
        ></input>
      </label>
      <label className={styles.textLabel}>
        <input
          className={styles.inputText}
          value={onTextData}
          name="comment"
          type="text"
          onChange={(e) => onChangeText(e)}
          required
          placeholder="Enter comment"
        ></input>

        <button className={styles.sentBTN} type="submit">
          <svg
            className={styles.sentBTNSVG}
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 25.951 25.951"
          >
            <g>
              <path
                d="M3,0.225h18c1.656,0,3,1.344,3,3v10c0,0.313-0.062,0.609-0.15,0.893l-2.056-1.832
		c-0.451-0.457-1.358-0.662-2.078-0.369l-3.692-3.779L23,2.7L12,8.632L1,2.7l6.977,5.438l-5.77,5.906l7.037-5.025L12,10.813
		l2.758-1.795l4.467,3.191c-0.451,0.366-0.725,0.922-0.725,1.531v1.043c-1.135,0.168-2.473,0.565-3.703,1.441H3
		c-1.656,0-3-1.344-3-3V3.225C0,1.569,1.344,0.225,3,0.225z"
              />
              <g>
                <path
                  d="M20,13.741v2.434c-3.227,0-7.5,1.564-7.5,9.551c1.412-5.096,3.314-5.488,7.5-5.488v2.473
			c0,0.191,0.105,0.363,0.281,0.437c0.059,0.024,0.121,0.036,0.182,0.036c0.123,0,0.244-0.048,0.334-0.139l5.016-4.504
			c0.184-0.184,0.184-0.484,0-0.668l-5.016-4.465c-0.135-0.135-0.34-0.176-0.516-0.103S20,13.549,20,13.741z"
                />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </button>
      </label>
    </form>
  );
};
