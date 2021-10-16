// Import React
import React from "react";

// Create a class
class Content extends React.Component {
  // add render() that is used to display content
  render() {
    // Return value ( html in this case )
    return (
      // Content has to wrapped in parent element to be displayed
      // Added class for styling test
      <div className="demo">
        <h1>Hello Content :)</h1>
        <h2>It is {new Date().toLocaleTimeString()}</h2>
      </div>
    );
  }
}

// Used this method of exporting a CLASS, please comment if this is acceptable
// to use as opposed to adding 'export' at teh beginning of a Class
export default Content;
