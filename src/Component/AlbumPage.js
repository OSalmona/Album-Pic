import React, { useState } from "react";
import Layout from "react-masonry-list";

const AlbumPage = (props) => {

  return (
    <Layout
      minWidth={100}
      items={props.pictures.map((pic) => (
        <div key={pic.id}>
            <image src={pic.download_url}/>
        </div>
      ))}
    ></Layout>
  );
};

export default AlbumPage;
