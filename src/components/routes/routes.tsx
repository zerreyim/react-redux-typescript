import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Main, NotFound } from "components";
import { HomePage, CategoryPage } from "modules";

export class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Main path="/home" component={HomePage} />
                    <Main path="/category/:slug" component={CategoryPage} />
                    <Main path="*" component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}