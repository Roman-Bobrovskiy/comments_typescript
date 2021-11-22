import React from "react";
import { CommentList } from "../components/CommentList/CommentList";
import { SendingForm } from "../components/SendingForm/SendingForm";
import { Pagination } from "../components/Pagination/Pagination";
import { LoadMorePagination } from "../components/Pagination/LoadMorePagination";

export interface Thome {
  onComments: [];
  onPaginationData: any;
  getPage(elem: string): void;
  onClickLoadMore(elem: string): void;
  onCurrentPage: any;
  onLastPage: any;
  onChangeName: (event: any) => void;
  onChangeText: (event: any) => void;
  onSubmit: (event: any) => void;
  onNameData: string;
  onTextData: string;
}

export const Home: React.FC<Thome> = ({
  onComments,
  onSubmit,
  onChangeName,
  onChangeText,
  onPaginationData,
  getPage,
  onClickLoadMore,
  onCurrentPage,
  onLastPage,
  onNameData,
  onTextData,
}) => {
  return (
    <main>
      <CommentList onComments={onComments} />
      <SendingForm
        onSubmit={onSubmit}
        onChangeName={onChangeName}
        onChangeText={onChangeText}
        onNameData={onNameData}
        onTextData={onTextData}
      />
      <LoadMorePagination
        onClickLoadMore={onClickLoadMore}
        onCurrentPage={onCurrentPage}
        onLastPage={onLastPage}
        onPaginationData={onPaginationData}
      />
      <Pagination onPaginationData={onPaginationData} getPage={getPage} />
    </main>
  );
};
