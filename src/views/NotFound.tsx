import React from "react";

import requests from "../utils/path.json";

// let styles = {
//   container: {
//     textAlign: "center",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   status: {
//     fontSize: 46,
//   },
// };

export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <img src={requests.noData} alt="404 page" width="40%" />
    </div>
  );
}
