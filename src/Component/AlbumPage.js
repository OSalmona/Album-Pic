import React, { useState } from "react";
import Layout from "react-masonry-list";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const AlbumPage = (props) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1 , 750:2 ,900:3}}>
      <Masonry gutter="10px">
          {props.pictures && props.pictures.length > 0
            ? props.pictures.map((pic) => (
                <img
                  key={pic.id}
                  width="400px"
                  height="auto"
                  src={pic.download_url}
                />
              ))
            : null}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default AlbumPage;
