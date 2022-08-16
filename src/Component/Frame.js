import React, { useState, useEffect } from "react";

import AlbumPage from "./AlbumPage";
import FetchPictures from "./FetchPicture";

const Frame = (props) => {
  const [pics, setPics] = useState([]);

  const fetchPicturesHandler = (newPics) => {
    // console.log(newPics[0]);
    // setPics(newPics);
    // console.log(pics.length);
    pics.length == 0 ? setPics(newPics) : setPics([...pics, ...newPics]);
    // console.log(pics);
    // console.log(pics);
    // if(pics.length ==0) setPics(newPics);
    // console.log(pics);
    // setPics((prevPics) => {
    //   return [newPics, ...prevPics];
    // });
  };
  // console.log(pics);

  return (
    <div>
      <div className="layout-header">
        <a className="link" href="/">
          Album Images - React js
        </a>
      </div>
      <div className="page">
        <FetchPictures
          pageNumber={props.pageNumber}
          onFetchPictures={fetchPicturesHandler}
        />
        <AlbumPage pictures={pics} />
      </div>
    </div>
  );
};
export default Frame;
