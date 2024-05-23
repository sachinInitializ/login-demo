import React, { useEffect, useState } from "react";

const Home = () => {
  const [image, setImage] = useState();

  useEffect(() => {
    getReponse();
  }, []);

  const getReponse = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setImage(data.message);
      });
  };

  return <img src={image} />;
};

export default Home;
