import React, { useState, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeTitle } from "../redux/pageTitle";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import { mainPageRoutes } from "../routes";
import routesPaths from "../routesPaths";

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Topbar = React.lazy(() => import("./Topbar"));
const Sidebar = React.lazy(() => import("./Sidebar"));
const loading = () => <div className="text-center"></div>;

function AuthLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle(""));
    return;
  }, [dispatch]);

  /**
   * toggle Menu
   */
  const toggleMenu = (e) => {
    e.preventDefault();
    setIsCondensed(!isCondensed);
  };

  const location = useLocation();
  const [isCondensed, setIsCondensed] = useState(false);
  return (
    <div className="app">
      <div id="wrapper">
        <Suspense fallback={loading()}>
          <Topbar menuToggle={toggleMenu} />
          <Sidebar isCondensed={isCondensed} location={location} />
        </Suspense>
        <div className="content-page">
          <div className="content">
            <Container fluid>
              <Suspense fallback={loading()}>
                <Switch>
                  {mainPageRoutes.map((route) => (
                    <Route key={route.path} {...route} />
                  ))}
                  <Redirect to={routesPaths.home} />
                </Switch>
              </Suspense>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
