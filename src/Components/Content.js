import React from "react";

class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>It is {new Date().toLocaleTimeString()}</h2>
      </div>
    );
  }
}

// Used this method of exporting a CLASS, please comment if this is acceptable
// to use as opposed to adding 'export' at teh beginning of a Class
export default Content;
