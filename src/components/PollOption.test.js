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
import PollOption from './PollOption';

describe("PollOption", () => {

    it("will display a vote button for the poll if the user has not answered it", async () => {
        const store = createStore(reducer,middleware);
        await store.dispatch(handleInitialData());
        await store.dispatch(handleLogin("mtsamis"));

        const question = {
            id: 'loxhs1bqm25b708cmbf3g',
            author: 'tylermcginnis',
            timestamp: 1482579767190,
            optionOne: {
                votes: [],
                text: 'have code reviews conducted by peers',
            },
            optionTwo: {
                votes: ['sarahedo'],
                text: 'have code reviews conducted by managers'
            }
        }

        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <PollOption 
                        option="optionOne"
                        question={question}
                    />
                </BrowserRouter>
            </Provider>
        );

        expect(component).toBeDefined();

        const btnVote = component.getByText("Click");

        expect(btnVote).toBeInTheDocument();
    });

    it("will display the number of votes for the poll option if the user has answered it", async () => {
        const store = createStore(reducer,middleware);
        await store.dispatch(handleInitialData());
        await store.dispatch(handleLogin("mtsamis"));

        const question = {
            id: 'xj352vofupe1dqz9emx13r',
            author: 'mtsamis',
            timestamp: 1493579767190,
            optionOne: {
                votes: ['mtsamis', 'zoshikanlu'],
                text: 'deploy to production once every two weeks',
            },
            optionTwo: {
                votes: ['tylermcginnis'],
                text: 'deploy to production once every month'
            }
        }

        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <PollOption 
                        option="optionOne"
                        question={question}
                    />
                </BrowserRouter>
            </Provider>
        );

        expect(component).toBeDefined();

        const optionIfoEl = component.getByTestId("poll-option-info");

        expect(optionIfoEl).toBeInTheDocument();
    });
});