import React from 'react';

function NotFound() {
const divStyle = {
  color : "#fff",
  textAlign: "center",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"

}

  return (
    <div style={divStyle}>
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
