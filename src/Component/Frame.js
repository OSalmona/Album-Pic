import React, { useState , useEffect } from "react";

import AlbumPage from "./AlbumPage";
import FetchPictures from "./FetchPicture";

const Frame = (props) => {
  const [page, setPage] = useState(1);
  const [pics, setPics] = useState([]);

  const addNewPackage = (event) => {
    let p = parseInt(page ,10) + 1 ;
    setPage(p);
  };

  const fetchPicturesHandler = (newPics) => {
    console.log(newPics[0]);
    // setPics(newPics);
    // console.log(pics.length);
    pics.length == 0 ? setPics(newPics) : setPics([...pics , ...newPics]); 
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
      <FetchPictures pageNumber={page} onFetchPictures={fetchPicturesHandler}/>
      <AlbumPage pictures={pics}/>
      <button type="button" onClick={addNewPackage}>
        Show More
      </button>
    </div>
  );
};
export default Frame;
