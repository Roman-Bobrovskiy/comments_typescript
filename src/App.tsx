import React from "react";
import requests from "./utils/request";
import { Home } from "./views/Home";
import NotFound from "./views/NotFound";
import { Spinner } from "./components/Spinner/Spinner";
import { Modal } from "./components/Modal/Modal";
import scrollToEndPage from "./utils/scroll";

import "./index.css";

interface MyState {
  comments: any;
  textData: string;
  nameData: string;
  first_page_url: string;
  last_page_url: string;
  last_page: string;
  current_page: string;
  error: boolean | string;
  loading: boolean;
  showModal: boolean;
  paginationData: string;
}

export default interface Props {
  handleChangeLoadMore(url: string): void;
  getPage(url: string): void;
  handleSubmit(event: React.KeyboardEvent): void;
  handleChangeName(event: React.ChangeEvent<HTMLInputElement>): void;
  handleChangeText(event: React.ChangeEvent<HTMLInputElement>): void;
}

export default class App extends React.Component<any, MyState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      comments: [],
      textData: "",
      nameData: "",
      first_page_url: "",
      last_page_url: "",
      last_page: "",
      current_page: "",
      paginationData: "",
      error: false,
      loading: false,
      showModal: false,
    };
  }

  componentDidMount() {
    let { comments, first_page_url } = this.state;

    //get server data
    if (!first_page_url) {
      requests
        .getServerData()
        .then((data) => data.json())
        .then((response) =>
          this.setState({
            first_page_url: response.first_page_url,
            last_page_url: response.last_page_url,
            current_page: response.current_page,
            last_page: response.last_page,
            paginationData: response.links,
          })
        );
    }

    //get first page comments
    if (comments.length === 0) {
      this.setState({ loading: true });
      requests
        .getComments()
        .then((data) => data.json())
        .then((response) => this.setState({ comments: response.data }))
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  componentDidUpdate() {
    let { comments } = this.state;

    //request for load more btn
    this.handleChangeLoadMore = (url: string) => {
      this.setState({ loading: true });
      requests
        .getPage(url)
        .then((data) => data.json())
        .then((response) => {
          this.setState(() => ({
            comments: [...comments, ...response.data],
            paginationData: response.links,
            current_page: response.current_page,
          }));
        })
        .then(() => scrollToEndPage()) //scroll
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    };

    //request page for pagination
    this.getPage = (url: string) => {
      this.setState({ loading: true });
      requests
        .getPage(url)
        .then((data) => data.json())
        .then((response) => {
          this.setState(() => ({
            comments: [...response.data],
            paginationData: response.links,
            current_page: response.current_page,
          }));
        })
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    };

    //add to state name
    this.handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ nameData: event.target.value });
    };

    //add to state comment
    this.handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ textData: event.target.value });
    };

    //sent data
    this.handleSubmit = (event: React.KeyboardEvent) => {
      let { nameData, textData, last_page_url } = this.state;
      this.setState({ showModal: true });
      event.preventDefault();
      requests.sendData(nameData, textData);
      setTimeout(() => this.getPage(last_page_url), 700);
      setTimeout(
        () => this.setState({ showModal: false, textData: "", nameData: "" }),
        1500
      );
    };
  }

  render() {
    let {
      comments,
      current_page,
      paginationData,
      last_page,
      error,
      loading,
      showModal,
      nameData,
      textData,
    } = this.state;

    return (
      <>
        {error && <NotFound />}
        {loading && <Spinner />}
        {showModal && <Modal onNameData={nameData} onTextData={textData} />}
        <Home
          onComments={comments}
          onSubmit={this.handleSubmit}
          onChangeName={this.handleChangeName}
          onChangeText={this.handleChangeText}
          onPaginationData={paginationData}
          getPage={this.getPage}
          onClickLoadMore={this.handleChangeLoadMore}
          onCurrentPage={current_page}
          onLastPage={last_page}
          onNameData={nameData}
          onTextData={textData}
        />
      </>
    );
  }
}
