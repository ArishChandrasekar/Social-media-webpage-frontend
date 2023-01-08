import React from "react";
import "./rightbar.css";
import { Users } from "../../data";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/wrapped-gift.png" alt="" />
          <span className="birthdayText">
            <b>Tom Holland</b> and <b>3 others</b> have birthday today
          </span>
        </div>
        <span className="movieName">Ant man and the wasp-Quantamania</span>
        <video
          controls
          src="/assets/antmanAndWasp.mp4"
          alt=""
          className="rightbarAd"
        ></video>
        <span className="movieName">Guardians of the galaxy 3</span>
        <video
          controls
          src="/assets/gotg3.mp4"
          alt=""
          className="rightbarAd"
        ></video>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">user info</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">America</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Birthday:</span>
            <span className="rightbarInfoValue">4 April 1965</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="/assets/pics/nat.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Scarlett...</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/pics/cap.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Chris Evans</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/pics/hulk.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Mark Ruffalo</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/pics/spider.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Tom Holland</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/pics/thor.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Chris Hemsworth</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/pics/strange.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Benedict Cumberbatch</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
