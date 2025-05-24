import React from "react";
import { Provider } from "react-redux";
import Form from "../components/Form";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import Header from "../components/Header";
import { getComments } from "../actions/comments.actions";
import Commenters from "../components/Commenters";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(getComments());

export default function Comments() {
  return (
    <Provider store={store}>
      <div className="page-container">
        <Header />
        <main className="comments-page">
          <Form />
          <Commenters />
        </main>
      </div>
    </Provider>
  );
}
