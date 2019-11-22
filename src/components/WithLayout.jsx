import React, { Component } from "react";
import Banner from "./Banner";

const withLayout = Page => {
  return () => (
    <div>
      <Banner />
      <Page />
    </div>
  );
};

export default withLayout;
