import React, { Component } from "react";
import { connect } from "react-redux";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import routesPaths from "../routesPaths";

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import MetisMenu from "react-metismenu";
import profilePic from "../assets/images/users/user-1.jpg";

const content = [
  {
    icon: "fas fa-dollar-sign",
    label: "Финансы",
    content: [
      {
        icon: "fas fa-donate",
        label: "Внесение средств",
        to: "/",
      },
      {
        icon: "fas fa-money-bill-wave",
        label: "Вывод средств",
        to: "/",
      },
    ],
  },
  {
    icon: "fas fa-images",
    label: "Контент",
    content: [
      {
        icon: "fas fa-list",
        label: "Строки",
        to: routesPaths.strings,
      },
    ],
  },
  {
    icon: "fas fa-user-tie",
    label: "Администрирование",
    to: "/",
  },
];

// OLD MENU MARKUP ===================================
//   <>
//   <div id="sidebar-menu">
//     <ul className="metismenu" id="side-menu">
//       <li>
//         <Link to="/" className="waves-effect" aria-expanded="false">
//           <i className="fas fa-dollar-sign"></i>
//           <span> Финансы </span>
//           <span className="menu-arrow"></span>
//         </Link>

//         <ul className="nav-second-level nav collapse" aria-expanded="false">
//           <li>
//             <Link to="/" className="side-nav-link-ref js-side-menu-link">
//               Внесение средств
//             </Link>
//           </li>
//           <li>
//             <Link to="/" className="side-nav-link-ref js-side-menu-link">
//               Вывод средств
//             </Link>
//           </li>
//         </ul>
//       </li>
//       <li>
//         <Link to="/" className="waves-effect" aria-expanded="false">
//           <i className="fas fa-images"></i>
//           <span> Контент </span>
//           <span className="menu-arrow"></span>
//         </Link>

//         <ul className="nav-second-level nav collapse" aria-expanded="false">
//           <li>
//             <Link
//               to={routesPaths.strings}
//               className="side-nav-link-ref js-side-menu-link"
//             >
//               Строки
//             </Link>
//           </li>
//         </ul>
//       </li>
//       <li>
//         <Link to="/" className="waves-effect side-nav-link-ref">
//           <i className="fas fa-user-tie"></i>
//           <span> Администрирование </span>
//         </Link>
//       </li>
//     </ul>
//   </div>
//   <div className="clearfix"></div>
// </>
// const handleClick = ({ target, currentTarget }) => {
//   if (
//     target.classList.contains("nav-second-level") ||
//     target.classList.contains("js-side-menu-link")
//   ) {
//     return;
//   }

//   if (currentTarget.classList.contains("active")) {
//     currentTarget.classList.remove("active");
//     currentTarget.classList.remove("mm-active");
//     currentTarget.firstElementChild.setAttribute("aria-expanded", false);
//     currentTarget.lastElementChild.classList.remove("collapsing");
//     currentTarget.lastElementChild.classList.remove("in");
//     return currentTarget.lastElementChild.classList.add("collapse");
//   }

//   const allListChilds = [...currentTarget.parentNode.children];
//   allListChilds.forEach((el) => {
//     el.classList.remove("active");
//     el.firstElementChild.setAttribute("aria-expanded", false);
//     el.classList.remove("mm-active");
//     el.lastElementChild.removeAttribute("style");
//     el.lastElementChild.classList.remove("collapsing");
//     el.lastElementChild.classList.remove("in");
//     el.lastElementChild.classList.add("collapse");
//   });
//   currentTarget.lastElementChild.classList.add("in");
//   currentTarget.classList.add("active");
//   currentTarget.firstElementChild.setAttribute("aria-expanded", true);
// };

const SideNavMenu = () => {
  return (
    <div className="metis-menu__container">
      <MetisMenu content={content} activeLinkFromLocation />
    </div>
  );
};

const UserProfile = () => {
  return (
    <>
      <div className="user-box text-center">
        <img
          src={profilePic}
          alt="user-img"
          title="Nik Patel"
          className="rounded-circle img-thumbnail avatar-lg"
        />
        <UncontrolledDropdown>
          <DropdownToggle
            caret
            tag="a"
            className="text-dark dropdown-toggle h5 mt-2 mb-1 d-block"
          >
            Nik Patel
          </DropdownToggle>
          <DropdownMenu className="user-pro-dropdown">
            <DropdownItem>
              <i className="fe-user mr-1"></i>
              <span>My Account</span>
            </DropdownItem>
            <DropdownItem>
              <i className="fe-settings mr-1"></i>
              <span>Settings</span>
            </DropdownItem>
            <DropdownItem>
              <i className="fe-lock mr-1"></i>
              <span>Lock Screen</span>
            </DropdownItem>
            <DropdownItem>
              <i className="fe-log-out mr-1"></i>
              <span>Logout</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </>
  );
};

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleOtherClick = this.handleOtherClick.bind(this);
    // this.initMenu = this.initMenu.bind(this);
  }

  /**
   * Bind event
   */

  componentDidMount = () => {
    document.addEventListener("mousedown", this.handleOtherClick, false);
    // this.initMenu();
  };

  /**
   * Component did update
   */
  componentDidUpdate = (prevProps) => {
    if (this.props.isCondensed !== prevProps.isCondensed) {
      if (prevProps.isCondensed) {
        document.body.classList.remove("sidebar-enable");
        document.body.classList.remove("enlarged");
      } else {
        document.body.classList.add("sidebar-enable");
        const isSmallScreen = window.innerWidth < 768;
        if (!isSmallScreen) {
          document.body.classList.add("enlarged");
        }
      }

      // this.initMenu();
    }
  };

  /**
   * Bind event
   */
  componentWillUnmount = () => {
    document.removeEventListener("mousedown", this.handleOtherClick, false);
  };

  /**
   * Handle the click anywhere in doc
   */
  handleOtherClick = (e) => {
    if (this.menuNodeRef.contains(e.target)) return;
    // else hide the menubar
    document.body.classList.remove("sidebar-enable");
  };

  /**
   * Init the menu
   */
  // initMenu = () => {
  //   // render menu
  //   new MetisMenu("#side-menu");
  //   var links = document.getElementsByClassName("side-nav-link-ref");
  //   var matchingMenuItem = null;
  //   for (var i = 0; i < links.length; i++) {
  //     if (this.props.location.pathname === links[i].pathname) {
  //       matchingMenuItem = links[i];
  //       break;
  //     }
  //   }

  //   if (matchingMenuItem) {
  //     matchingMenuItem.classList.add("active");
  //     var parent = matchingMenuItem.parentElement;

  //     /**
  //      * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
  //      * We should come up with non hard coded approach
  //      */
  //     if (parent) {
  //       parent.classList.add("active");
  //       const parent2 = parent.parentElement;
  //       if (parent2) {
  //         parent2.classList.add("in");
  //       }
  //       const parent3 = parent2.parentElement;
  //       if (parent3) {
  //         parent3.classList.add("active");
  //         var childAnchor = parent3.querySelector(".has-dropdown");
  //         if (childAnchor) childAnchor.classList.add("active");
  //       }

  //       const parent4 = parent3.parentElement;
  //       if (parent4) parent4.classList.add("in");
  //       const parent5 = parent4.parentElement;
  //       if (parent5) parent5.classList.add("active");
  //     }
  //   }
  // };

  render() {
    const isCondensed = this.props.isCondensed || false;

    return (
      <>
        <div
          className="left-side-menu"
          ref={(node) => (this.menuNodeRef = node)}
        >
          {!isCondensed && (
            <PerfectScrollbar>
              <UserProfile />
              <SideNavMenu />
            </PerfectScrollbar>
          )}
          {isCondensed && <UserProfile /> && <SideNavMenu />}
        </div>
      </>
    );
  }
}

export default connect()(Sidebar);
