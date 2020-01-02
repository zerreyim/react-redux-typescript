import "./main.scss";
import * as React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Header, Footer } from "components";

export const Main = (props) => {
  const { component: Component, ...rest } = props;
  return <Route {...rest} render={matchProps =>
    (props.checkAuthentication && !props.isAuthed) ?
      (
        <Redirect to="/" />
      ) :
      (
        <div className="app-wrapper">
          <Header/>
          <main className="content-wrapper">
            <Component {...matchProps} />
          </main>
          <Footer />
        </div>
      )
  } />
}
