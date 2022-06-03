import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="dashbody">
        <div className="mainContainer">
          <div className="headerGrid">
            <h3>Welcome to Dashboard!</h3>
          </div>
          <div className="sidebarGrid">
            <Link to="/users" className="sidebars">
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
            <h3 className="midtext">I am Body</h3>
          </div>
          <div className="footGrid">
            <h5>&#169; Roshan Pradhan</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
