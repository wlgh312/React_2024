import React from "react";
import { useParams } from "react-router-dom";

function NotFound() {
  const { '*': params } = useParams();

  return (
    <div>
      <h5>Dear friend, {params} URL was not found</h5>
    </div>
  );
};
export default NotFound;


