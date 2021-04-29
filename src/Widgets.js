import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./Widgets.css";
function Widgets() {
  const newsArticle = (header, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{header}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn news</h2>
        <InfoIcon />
      </div>
      {newsArticle("Falcon 9 ", "hot news")}
      {newsArticle("Falcon Heavy ", "hot news")}
      {newsArticle("Space X lunch", "hot news")}
    </div>
  );
}

export default Widgets;
