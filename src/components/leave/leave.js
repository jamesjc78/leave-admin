import React, { Component } from "react";
import { useParams } from "react-router-dom";

// sorting data
const mySort = (arr, sortBy) => {
  arr.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
};

function Leave(props) {
  const { email } = useParams();
  return <h1>User Leave page {email}</h1>;
}

export default Leave;
