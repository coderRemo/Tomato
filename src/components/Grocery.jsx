import React from "react";

const Grocery = () => {
  return (
    <div>
      <p>
        This is a Grocery Component, which is implemented using Lazy Loading to
        reduce the bundle size. This technique is used to load components only
        when they are needed, rather than loading them all at once when the app
        starts. This improves the performance of application by reducing the
        initial load time.
      </p>
    </div>
  );
};

export default Grocery;
