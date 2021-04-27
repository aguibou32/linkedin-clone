import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
function Sidebar() {
  const recentItem = (title) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{title}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1567919914972-4281c4e0e7ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Jonh</h2>
        <h3>jonh@gdoe.com</h3>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you </p>
          <p className="sidebar__statNumber">2,003</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,603</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("React")}
        {recentItem("Angular")}
        {recentItem("JS")}
        {recentItem("es 6")}
      </div>
    </div>
  );
}

export default Sidebar;
