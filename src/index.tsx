

//import "bootstrap-loader";
import * as React from "react";
import {render} from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { Routes }  from "./components";
import configureStore from "./redux/configureStore";

const store = configureStore();

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById("app")
);
