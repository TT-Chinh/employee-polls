import '@testing-library/jest-dom';
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore } from 'redux';
import Login from "./Login";
import reducer from "../reducers";
import middleware from "../middleware";
import { handleInitialData } from "../actions/shared";

describe("Login", () => {
    it("will render the component", () => {
        const store = createStore(reducer);

        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login/>
                </BrowserRouter>
            </Provider>
        );

        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it("will enable submit button if userid selected", async () => {
        const store = createStore(reducer,middleware);
        await store.dispatch(handleInitialData());
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login/>
                </BrowserRouter>
            </Provider>
        );

        const userIdElement = component.getByTestId("userid");
        const btnSubmitElement = component.getByTestId("submit");

        expect(userIdElement).toBeInTheDocument();
        expect(btnSubmitElement).toBeInTheDocument();

        fireEvent.change(userIdElement, {target: {value: "mtsamis"}});
        expect(btnSubmitElement).toBeEnabled();
    });
});