import React from "react";
import Loader from "react-loader-spinner";
export const Loading = () => {
  return (
    <div>
      <Loader type="Oval" color="#512DA8" height={150} width={150} />
    </div>
  );
};
