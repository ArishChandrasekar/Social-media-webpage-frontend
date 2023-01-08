import React from "react";
import "./online.css";

export default function Online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
        <span
          className="rightbarOnline"
          style={{ background: user.online ? "limegreen" : "tomato" }}
        ></span>
      </div>
      <span className="rightbarUserName">{user.username}</span>
    </li>
  );
}
