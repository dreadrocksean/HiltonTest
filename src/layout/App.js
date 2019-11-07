import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBell,
  faExclamationTriangle,
  faCog,
  faSitemap,
  faCoffee,
  faBars
} from "@fortawesome/free-solid-svg-icons";

import OverlayMenu from "../containers/OverlayMenu";
import Header from "../containers/Header";
import PageContainer from "../containers/PageContainer";
import Footer from "../containers/Footer";
import NotFound from "../pages/NotFound";
import { SUBDIRECTORY } from "../utils/config";

import styles from "./styles/App.module.scss";

library.add(faBell, faExclamationTriangle, faCog, faSitemap, faCoffee, faBars);

const App = () => (
  <div className={styles.app}>
    <OverlayMenu />
    <Router>
      <div style={{ display: "flex", flex: 1 }}>
        <Switch>
          <Route
            path={`${SUBDIRECTORY}`}
            component={() => (
              <>
                <Header />
                <PageContainer />
              </>
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  </div>
);

export default App;
