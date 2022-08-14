import React, { useState , useEffect } from "react";

import AlbumPage from "./AlbumPage";
import FetchPictures from "./FetchPicture";

const Frame = (props) => {
  const [page, setPage] = useState(1);
  const [pics, setPics] = useState([]);

  const addNewPackage = () => {
    setPage(page++);
  };

  const fetchPicturesHandler = (newPics) => {
    setPics((prevPics) => {
      return [newPics, ...prevPics];
    });
  };

  return (
    <div>
      <FetchPictures pageNumber={page} onFetchPictures={fetchPicturesHandler}/>
      {/* <AlbumPage pictures={pics}/> */}
      {/* <button type="button" onClick={addNewPackage}>
        Show More
      </button> */}
    </div>
  );
};
export default Frame;
//   return <div>{props.children}</div>;
