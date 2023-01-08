//import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircle,
  Groups,
  Bookmarks,
  NotificationsActive,
  Event,
  HelpCenter,
} from "@mui/icons-material";
import { Users } from "../../data";
import Friend from "../friend/Friend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Groups className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmarks className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <NotificationsActive className="sidebarIcon" />
            <span className="sidebarListItemText">Notifications</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <HelpCenter className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more...</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <Friend className="sidebarFriend" key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
