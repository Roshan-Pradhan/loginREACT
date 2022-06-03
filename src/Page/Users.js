import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <>
      <div className="dashbody">
        <div className="mainContainer">
          <div className="headerGrid">
            <h3>Welcome to Dashboard!</h3>
          </div>
          <div className="sidebarGrid">
            <Link to="#" className="sidebars">
              Users
            </Link>
            <Link to="#" className="sidebars">
              Category
            </Link>
            <Link to="#" className="sidebars">
              Products
            </Link>
            <Link to="#" className="sidebars">
              Sales
            </Link>
            <Link to="#" className="sidebars">
              Reports
            </Link>
            <Link to="#" className="sidebars">
              Audit
            </Link>
            <Link to="#" className="sidebars">
              Flow
            </Link>
          </div>
          <div className="midGrid">
            <div className="midcard">
              <h5 className="cardTect">User1</h5>
              <h6 className="cardTect">Admin1</h6>
            </div>
            <div className="midcard">
              <h5 className="cardTect">User2</h5>
              <h6 className="cardTect">Admin2</h6>
            </div>
            <div className="midcard">
              <h5 className="cardTect">User3</h5>
              <h6 className="cardTect">Admin3</h6>
            </div>
            <div className="midcard">
              <h5 className="cardTect">User4</h5>
              <h6 className="cardTect">Admin4</h6>
            </div>
            <div className="midcard">
              <h5 className="cardTect">User5</h5>
              <h6 className="cardTect">Admin5</h6>
            </div>
            <div className="midcard">
              <h5 className="cardTect">User6</h5>
              <h6 className="cardTect">Admin6</h6>
            </div>
          </div>
          <div className="footGrid">
            <h5>&#169; Roshan Pradhan</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
