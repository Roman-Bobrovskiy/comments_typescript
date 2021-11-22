import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Pagination.module.css";

interface TPagination {
  onPaginationData: [];
  getPage(elem: string): void;
}

export const Pagination: React.FC<TPagination> = ({
  onPaginationData,
  getPage,
}) => {
  return (
    <>
      {onPaginationData && (
        <div className={styles.wrapPagination}>
          {onPaginationData.map((elem: any) =>
            elem.url !== null ? (
              elem.active === true ? (
                <button
                  className={styles.paginationBTNActive}
                  type="button"
                  onClick={() => getPage(elem.url)}
                  key={uuidv4()}
                >
                  {elem.label}
                </button>
              ) : (
                <button
                  className={styles.paginationBTN}
                  type="button"
                  onClick={() => getPage(elem.url)}
                  key={uuidv4()}
                >
                  {elem.label === "&laquo; Previous" ||
                  elem.label === "Next &raquo;"
                    ? elem.label.replace("&laquo;", "").replace("&raquo;", "")
                    : elem.label}
                </button>
              )
            ) : (
              <span className={styles.paginationSpan} key={uuidv4()}>
                {elem.label === "&laquo; Previous" ||
                elem.label === "Next &raquo;"
                  ? ""
                  : elem.label}
              </span>
            )
          )}
        </div>
      )}
    </>
  );
};
