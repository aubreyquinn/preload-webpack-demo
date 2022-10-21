import React from "react";
import Flowers from "../assets/flowers.jpg";

let Lilies;

import(/* webpackPrefetch: true */ "../assets/lilies.jpg").then((result) => { Lilies = result.default; console.log(result.default); } );

// import Lilies from "../assets/lilies.jpg";

// Home component
const Home = () => {
  return <>
        <div>React Application</div>
        <img src={Flowers} height={200} />
        <img src={Lilies} height={200} />
    </>;
};

export default Home;
