import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span
          className="logo"
          onClick={() => {
            navigate("/homepage/Home");
          }}
        >
          MCU
        </span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input placeholder="Search Anything" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span
            className="topbarLink"
            onClick={() => {
              navigate("/");
            }}
          >
            Log out
          </span>
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img
          src="/assets/myPic.jpg"
          alt=""
          className="topbarImg"
          onClick={() => {
            navigate("/profile/Profile");
          }}
        />
      </div>
    </div>
  );
}
