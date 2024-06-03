import React from "react";
import { useParams } from "react-router-dom";

export default function B2() {
  const { name } = useParams();
  return (
    <div>
      <span>name = {name}</span>
    </div>
  );
}