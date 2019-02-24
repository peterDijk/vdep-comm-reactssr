import * as React from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import routes from "./routes";
import { connect } from "react-redux";
import { reduxInit } from "./actions/utils";
import { requestPage } from "./actions/page";
import { requestSeminars } from "./actions/seminars";

import HeaderContainer from "./components/HeaderContainer";
import { Footer } from "./components/Footer";
import HomeContainer from "./components/HomeContainer";
import ReadMoreContainer from "./components/ReadMoreContainer";
import NotFound from "./components/NotFound";

class App extends React.Component {
  componentDidMount() {
    if (this.props.utils.initialized !== true) {
      this.props.reduxInit();
    }
    if (!this.props.page.data.length > 0) {
      this.props.requestPage();
      this.props.requestSeminars();
    }
  }

  render() {
    const footer =
      this.props.page.included &&
      this.props.page.included.find(
        incl => incl.attributes.field_slug === "section-footer"
      );
    return (
      <div className="App">
        <HeaderContainer location={this.props.location.pathname} />
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Switch>
        <Footer footer={footer} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    utils: state.utils,
    page: state.page
  };
};

const mapDispatchToProps = {
  reduxInit,
  requestPage,
  requestSeminars
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
