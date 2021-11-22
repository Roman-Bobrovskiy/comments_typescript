import React from "react";
import styles from "./LoadMorePagination.module.css";

interface TLoadMorePagination {
  onClickLoadMore(elem: string): void;
  onCurrentPage: number;
  onLastPage: number;
  onPaginationData: [];
}

export const LoadMorePagination: React.FC<TLoadMorePagination> = ({
  onClickLoadMore,
  onCurrentPage,
  onLastPage,
  onPaginationData,
}) => {
  return (
    <div className={styles.wrapLoadMoreBTN}>
      {onCurrentPage === onLastPage ? (
        <button className={styles.hidenLoadMoreBTN} type="button">
          Load more
        </button>
      ) : (
        onPaginationData &&
        onPaginationData.map(
          (elem: any) =>
            elem.label === "Next &raquo;" && (
              <button
                key="{id}"
                className={styles.loadMoreBTN}
                onClick={() => onClickLoadMore(elem.url)}
                type="button"
              >
                Load more
              </button>
            )
        )
      )}
    </div>
  );
};
