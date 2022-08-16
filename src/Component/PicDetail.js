import React from "react";
import { useLocation } from "react-router-dom";
import "./PicDetail.css";

const PicDetail = (props) => {
  const location = useLocation();
  const pic = location.state;
  return (
    <div>
      <div className="layout-header">
        <a className="link" href="/">
          Album Images - React js
        </a>
      </div>
      <div className="block_container">
        <div className="bloc1">{pic.author}</div>
        <div className="bloc2">
          <img width="auto" height="550" src={pic.url} />
        </div>
      </div>
    </div>
  );
};

export default PicDetail;
