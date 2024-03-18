"use client";

import { title } from "process";
import React from "react";
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));

const Info = () => {
  return (
    <div>
      main Info
    </div>
  );
};

export default Info;
