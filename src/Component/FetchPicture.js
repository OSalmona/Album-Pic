import React, {useState ,useEffect} from "react";

const FetchPictures = (props) => {
  const [pic, setPics] = useState();

  useEffect(() => {
    fetch("https://picsum.photos/id/237/200/300")
     .then((response) => setPics(response));
   }, []);

  console.log(pic)

  // const getApiData = async () => {
  //   const response = await fetch(
  //     "https://picsum.photos/v2/list/"
  //   ).then((response) => response.json());
  //   // update the state
  //   setPics(response);
  // };

  // useEffect(() => {
  //   getApiData();
  // }, []);

  // const fetchData = () => {
  //   fetch("https://picsum.photos/v2/list")
  //     .then((response) => response.json())
  //     .then((data) => setPics(data));
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  props.onFetchPictures(pic);
};

export default FetchPictures;
