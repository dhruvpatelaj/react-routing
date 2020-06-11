import React, { useState, useEffect } from "react";

import "./App.css";

//* useEffect runs the fetch call
function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get",
      {
        headers: {
          Authorization: "{{authorization}}",
        },
      }
    );
    const items = await data.json();
    console.log(items);
  };
  return (
    <div>
      <h1> Shop Page </h1>
    </div>
  );
}

export default Shop;
