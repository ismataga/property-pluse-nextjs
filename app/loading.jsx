"use client";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loading = () => {
  return <ClipLoader size={150} color={"#123abc"} cssOverride={override} loading={true} aria-label="Loading Spinner" />;
};

export default Loading;
