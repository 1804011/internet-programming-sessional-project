import React, { useRef, useState } from "react";
import Code from "./Code";
const { getNewRatings } = require("codeforces-rating-system");

const Test = () => {
  const txtRef = useRef();
  const txt2Ref = useRef("");
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const plainTxt = (str) =>
    str
      .replaceAll("\n", " ")
      .split(" ")
      .filter((txt) => txt !== "")
      .map((txt) => txt.toLowerCase());
  const contestants = [
    {
      position: 1,
      username: "forthright48",
      previousRating: 100,
    },
    {
      position: 2,
      username: "flash_7",
      previousRating: 100,
    },
    {
      position: 3,
      username: "labib666",
      previousRating: 100,
    },
  ];

  console.log(getNewRatings(contestants));
  return (
    <div>
      {/* <Code sourceCode={"int main(){}"} />
      <textarea
        type="text"
        ref={txtRef}
        className="input textarea textarea-bordered h-28"
        onChange={(e) => setText(e.target.value)}
      />
      <textarea
        type="text"
        ref={txt2Ref}
        className="input textarea textarea-bordered mx-8 h-28"
        onChange={(e) => setText2(e.target.value)}
      />
      {JSON.stringify(plainTxt(text)) === JSON.stringify(plainTxt(text2))
        ? "Same"
        : "Not same"}
      <hr />
      <button className="btn btn-dark">Compare</button>
      <hr />
      {text}|{text2} */}
    </div>
  );
};

export default Test;
