import '@testing-library/jest-dom';
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore } from 'redux';
import reducer from "../reducers";
import middleware from "../middleware";
import { handleLogin } from "../actions/authedUser";
import { handleInitialData } from '../actions/shared';
import App from "./App";

describe("App", () => {
  it("will render the component", () => {
    const store = createStore(reducer,middleware);

    const component = render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    );

    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });

  it("will display the Login page if not already logged in", () => {
    const store = createStore(reducer,middleware);
    const component = render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    );
    const loginHeader = component.getByTestId("login-header");
    expect(loginHeader).toBeInTheDocument();
  });

  it("will show the Dashboard page if logged in", async () => {
    const store = createStore(reducer,middleware);
    await store.dispatch(handleInitialData());
    store.dispatch(handleLogin("zoshikanlu"));

    const component = render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    );

    const dashboardHeader = component.getByTestId("dashboard-hearder");
    expect(dashboardHeader).toBeInTheDocument();
  });
});