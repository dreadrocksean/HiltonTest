import React, { useRef, useContext } from "react";
import PropTypes from "prop-types";
import { Route, Switch, __RouterContext } from "react-router-dom";

import { useTransition, animated } from "react-spring";

import withUnstated from "../../core/WithUnstated";

import Reservations from "../../pages/Reservations";
import ReservationDetail from "../../pages/ReservationDetail";
import { SUBDIRECTORY } from "../../utils/config";

import styles from "./PageContent.module.scss";

const PageContent = ({ store }, rest) => {
  const { location } = useContext(__RouterContext);
  const historyRef = useRef([{ path: "/safe-defend", from: -1, leave: 1 }]);
  const processHistory = location => {
    if (!location || !location.pathname) return 0;
    const index = historyRef.current
      .map(v => v.path)
      .indexOf(location.pathname);
    if (index > -1) {
      // previously visited
      historyRef.current.length = index + 1; // remove everything else since
      historyRef.current[index].from = -1; // enter stage left
      historyRef.current[index].leave = 1; // exit stage right
    } else {
      historyRef.current.push({
        path: location.pathname,
        from: 1,
        leave: -1
      });
    }
  };
  const getPath = location => {
    if (!location || !location.pathname) return [];
    const found = historyRef.current.find(v => v.path === location.pathname);
    return found || { from: 1, leave: -1 };
  };

  const transitions = useTransition(location, location => location.pathname, {
    initial: {
      opacity: 0,
      transform: `translate3d(0%,0%,0)`
    },
    from: {
      transform: `translate3d(${100 * getPath(location).from}%,0,0)`,
      opacity: 0
    },
    enter: {
      opacity: 1,
      transform: `translate3d(0%,0,0)`
    },
    leave: {
      transform: `translate3d(${100 * getPath(location).leave}%,0,0)`,
      opacity: 0
    },
    config: {
      // clamp: true,
      mass: 2,
      tension: 400,
      friction: 40
    }
  });

  const renderRoutes = item => {
    return (
      <Switch location={item}>
        <Route exact path={`${SUBDIRECTORY}/`} component={Reservations} />

        {/*---------- Add Custom Routes Here ----------*/}
        <Route
          path={`${SUBDIRECTORY}/reservation/:id`}
          component={ReservationDetail}
        />
        {/*------------ End Custom Routes ------------*/}
      </Switch>
    );
  };

  return transitions.map(({ item, props, key }) => {
    processHistory(item);

    return (
      <animated.div
        key={key}
        className={styles.pageContent}
        style={{
          ...props,
          minHeight: "100%",
          width: "100%",
          position: "absolute"
        }}
      >
        {renderRoutes(item)}
      </animated.div>
    );
  });
};

PageContent.propTypes = {
  style: PropTypes.object
};

export default withUnstated(PageContent);
