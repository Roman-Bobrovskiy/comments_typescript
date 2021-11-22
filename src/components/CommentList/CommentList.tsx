import React from "react";
import styles from "./CommentList.module.css";
import getTime from "../../utils/getTime";
import { ICommentList } from "../interfaces";

interface TCommentList {
  onComments: ICommentList[];
}

export const CommentList: React.FC<TCommentList> = ({ onComments }) => {
  return (
    <>
      <ul className={styles.commentContainer}>
        {onComments.map((elem) => {
          return (
            <li className={styles.commentBox} key={elem.id}>
              <div className={styles.wrapNameTime}>
                <p className={styles.name}>{elem.name}</p>
                <p className={styles.time}>{getTime(elem.created_at)}</p>
              </div>
              <p className={styles.text}>{elem.text}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
