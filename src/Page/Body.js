import React from "react";
import { Button } from "antd";

import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="#eceff1 blue-grey lighten-5 Body">
      <h2>MERN Training</h2>
      <h6>By Nimesh Poudel</h6>
      <Link to="/signup">
        <Button className="  Buttonss">Register</Button>
      </Link>
    </div>
  );
};

export default Body;
