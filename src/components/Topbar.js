import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import routesPaths from "../routesPaths";
import ProfileDropdown from "./ProfileDropdown";
import logo from "../assets/images/UGPay logo.png";
import profilePic from "../assets/images/users/user-1.jpg";

// const Notifications = [
//   {
//     id: 1,
//     text: "Caleb Flakelar commented on Admin",
//     subText: "1 min ago",
//     icon: "mdi mdi-comment-account-outline",
//     bgColor: "primary",
//   },
//   {
//     id: 2,
//     text: "New user registered.",
//     subText: "5 min ago",
//     icon: "mdi mdi-account-plus",
//     bgColor: "info",
//   },
//   {
//     id: 3,
//     text: "Cristina Pride",
//     subText: "Hi, How are you? What about our next meeting",
//     icon: "mdi mdi-comment-account-outline",
//     bgColor: "success",
//   },
//   {
//     id: 4,
//     text: "Caleb Flakelar commented on Admin",
//     subText: "2 days ago",
//     icon: "mdi mdi-comment-account-outline",
//     bgColor: "danger",
//   },
//   {
//     id: 5,
//     text: "Caleb Flakelar commented on Admin",
//     subText: "1 min ago",
//     icon: "mdi mdi-comment-account-outline",
//     bgColor: "primary",
//   },
//   {
//     id: 6,
//     text: "New user registered.",
//     subText: "5 min ago",
//     icon: "mdi mdi-account-plus",
//     bgColor: "info",
//   },
//   {
//     id: 7,
//     text: "Cristina Pride",
//     subText: "Hi, How are you? What about our next meeting",
//     icon: "mdi mdi-comment-account-outline",
//     bgColor: "success",
//   },
//   {
//     id: 8,
//     text: "Caleb Flakelar commented on Admin",
//     subText: "2 days ago",
//     icon: "mdi mdi-comment-account-outline",
//     bgColor: "danger",
//   },
// ];

const ProfileMenus = [
  {
    label: "My Account",
    icon: "fe-user",
    redirectTo: "/",
  },
  {
    label: "Settings",
    icon: "fe-settings",
    redirectTo: "/",
  },
  {
    label: "Lock Screen",
    icon: "fe-lock",
    redirectTo: "/",
  },
  {
    label: "Logout",
    icon: "fe-log-out",
    redirectTo: "/logout",
    hasDivider: true,
  },
];

const Topbar = ({ menuToggle }) => {
  const title = useSelector(({ title }) => title);
  const [headerSearch, setHeaderSearch] = useState("");
  const onChangeSearch = (value) => setHeaderSearch(value);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(headerSearch);
  };

  return (
    <>
      <div className="navbar-custom">
        <ul className="list-unstyled topnav-menu float-right mb-0">
          <li className="d-none d-sm-block">
            <form className="app-search">
              <div className="app-search-box">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    value={headerSearch}
                    name="search"
                    placeholder="Найти..."
                    onChange={({ target: { value } }) => onChangeSearch(value)}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn"
                      type="submit"
                      onClick={handleSearch}
                    >
                      <i className="fe-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </li>

          <li>
            <ProfileDropdown
              profilePic={profilePic}
              menuItems={ProfileMenus}
              username={"Nik Patel"}
            />
          </li>
        </ul>

        <div className="logo-box">
          <Link to={routesPaths.home} className="logo text-center">
            <span className="logo">
              <img src={logo} alt="logo" height="40" />
            </span>
          </Link>
        </div>

        <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
          <li>
            <button
              className="button-menu-mobile disable-btn waves-effect"
              onClick={menuToggle}
            >
              <i className="fe-menu"></i>
            </button>
          </li>

          <li>
            <h4 className="page-title-main">{title}</h4>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Topbar;
