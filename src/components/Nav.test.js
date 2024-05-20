import '@testing-library/jest-dom';
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore } from 'redux';
import reducer from "../reducers";
import middleware from "../middleware";
import { handleInitialData } from "../actions/shared";
import { handleLogin } from '../actions/authedUser';
import Nav from './Nav';

describe("Nav", () => {
    it("will render the component and displays all expected links", async () => {
        const store = createStore(reducer,middleware);
        await store.dispatch(handleInitialData());
        await store.dispatch(handleLogin("mtsamis"));

        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Nav/>
                </BrowserRouter>
            </Provider>
        );

        expect(component).toBeDefined();
        const homeLinkEl = component.getByText("Home");
        const leaderboardLinkEl = component.getByText("LeaderBoard");
        const newLinkEl = component.getByText("New");
        const logOutLinkEl = component.getByText("Logout");
        const userInfoEl = component.getByTestId("user-info");

        expect(homeLinkEl).toBeInTheDocument();
        expect(leaderboardLinkEl).toBeInTheDocument();
        expect(newLinkEl).toBeInTheDocument();
        expect(logOutLinkEl).toBeInTheDocument();
        expect(userInfoEl).toBeInTheDocument();
    });

    it("will display the exact information of the logged in user", async () => {
        const store = createStore(reducer,middleware);
        await store.dispatch(handleInitialData());
        await store.dispatch(handleLogin("mtsamis"));

        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Nav/>
                </BrowserRouter>
            </Provider>
        );

        const userInfoEl = component.getByTestId("user-info");
        expect(userInfoEl.textContent).toBe("mtsamis");
    });
});