import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="text-center">
      <h1 className="text-lg font-bold">Unexpected Error!</h1>
      <p>
        🔴 {error.status}: {error.statusText}
      </p>
    </div>
  );
};

export default ErrorPage;
