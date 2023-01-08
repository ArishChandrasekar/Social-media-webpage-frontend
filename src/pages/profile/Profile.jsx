import React from "react";
import "./profile.css";
import ProfileFeed from "../../components/profileFeed/ProfileFeed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="/assets/posts/ironman.jpg"
                alt=""
              />
              <img className="profileUserImg" src="/assets/myPic.jpg" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Arish</h4>
              <span className="profileInfoDesc">Arish ChandraSekar</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <ProfileFeed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
