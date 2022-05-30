import React from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem/SidebarItem";
import {
  HomeIcon,
  MessagesIcon,
  UserIcon,
  ExploreIcon,
  SetTweetIcon,
} from "../icons/index";
import TwitterIcon from "@material-ui/icons/Twitter";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useHistory } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const username =sessionStorage.getItem("username")
  const fullName=sessionStorage.getItem("name")+" "+sessionStorage.getItem("lastname")
  

  return (
    <div className="sidebar">
      <ToastContainer position="bottom-center" />
      <TwitterIcon className="twitter-icon" />
      <Link to="/Home" style={{ textDecoration: "none" }}>
        <SidebarItem
          text="Home"
          Icon={HomeIcon}
          active={location === "/Home" && true}
        />
      </Link>
      <Link to="/explore" style={{ textDecoration: "none" }}>
        <SidebarItem
          text="Explore"
          Icon={ExploreIcon}
          active={location === "/explore" && true}
        />
      </Link>
      <Link to="/Messages" style={{ textDecoration: "none" }}>
        <SidebarItem
          text="Messages"
          Icon={MessagesIcon}
          active={location === "/Messages" && true}
        />
      </Link>
      <Link to="/Profile" style={{ textDecoration: "none" }}>
        <SidebarItem
          text="Profile"
          Icon={UserIcon}
          active={location === "/Profile" && true}
        />
      </Link>
      <div className="profileCard">
        
        <div className="profileCardNameCol">
          <div className="profileCardNameColName">
            <a>{fullName}</a>
          </div>
          <div className="profileCardNameColuserName">
            <span>{username}</span>
          </div>
        </div>
        <div className="profileCardIcon">
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
