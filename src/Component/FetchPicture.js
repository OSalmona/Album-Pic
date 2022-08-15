import React, { useState, useEffect } from "react";

const FetchPictures = (props) => {
  // const [pic, setPics] = useState([]);
  const getApiData = () => {
    fetch(`https://picsum.photos/v2/list?page=${props.pageNumber}`)
      .then((response) => response.json())
      .then((data) => props.onFetchPictures(data));
  };

  useEffect(() => {
    getApiData();
  }, []);
  // console.log(props.pageNumber);
  // console.log(pic[0]);

  // props.onFetchPictures(pic);
};

export default FetchPictures;