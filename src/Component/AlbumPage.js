import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import PicDetails from "./PicDetail";
import "./AlbumPage.css";


var data = [
  {
      id: "",
       url: "",
    width: "",
   height: "",
   author: "",
  }
]

const AlbumPage = (props) => {

  return (
      <div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px">
            {props.pictures && props.pictures.length > 0
              ? props.pictures.map((pic) => (
                  <div>
                    <Link to= {`/${pic.id}`} state={{id: pic.id ,url:pic.download_url ,author:pic.author ,width:pic.width ,height:pic.height}}>
                      <img
                        className="zoom"
                        key={pic.id}
                        width="400px"
                        height="auto"
                        src={pic.download_url}
                      />
                    </Link>
                  </div>
                ))
              : null}

          </Masonry>
        </ResponsiveMasonry>
      </div>
  );
};

export default AlbumPage;

// [
//   {
//       "id": "0",
//       "author": "Alejandro Escamilla",
//       "width": 5616,
//       "height": 3744,
//       "url": "https://unsplash.com/...",
//       "download_url": "https://picsum.photos/..."
//   }
// ]


// query: {
//   id: pic.id,
//   url: pic.download_url,
//   width: pic.width,
//   height: pic.height,
//   author: pic.author,