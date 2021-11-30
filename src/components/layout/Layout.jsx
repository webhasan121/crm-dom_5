import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import ThemeAction from "../redux/actions/ThemeAction";
import Routes from "../Routes";
import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";
import "./layout.css";

const Layout = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className={`layout ${themeReducer.mode}`}>
            <Sidebar {...props} />
            <div className="layout__content">
              <TopNav />
              <div className="layout__content-main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
