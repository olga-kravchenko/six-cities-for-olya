import React from "react";
import Header from "../header/header";

const PageNotFound = () => {
  return (
    <div className="page">
      <Header/>
      <main>
        <h1 style={{
          textAlign: `center`,
          padding: `127px`,
          fontStyle: `oblique`,
        }}>404 Page Not Found</h1>
      </main>
    </div>
  );
};

export default PageNotFound;
