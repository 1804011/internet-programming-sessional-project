import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Submission = ({ submission }) => {
  const { id } = useParams();
  const [color, setColor] = useState("#0000aa");
  const { verdict } = submission;
  useEffect(() => {
    if (verdict == "Accepted") {
      setColor("#0a0");
    } else {
      setColor("#00a");
    }
  }, []);
  let time = Infinity,
    memory = Infinity;
  const testCases = submission?.result?.submissions;
  for (let i = 0; i < testCases?.length; i++) {
    time = Math.min(parseFloat(testCases[i].time), time);
    memory = Math.min(parseFloat(testCases[i].memory), memory);
  }
  // alert(time);
  return (
    <tr>
      <td className="underline font-[500]">{submission._id}</td>
      <td className="text-[10px] font-[500]">
        {new Date(submission.submissionTime)
          .toString()
          .replace("(Bangladesh Standard Time)", "")}
      </td>
      <td>{submission?.handle}</td>
      <td className="text-[blue] underline">
        <Link
          to={`/contests/${id}/problem/${String.fromCharCode(
            submission.problem + 65
          )}`}
        >
          {String.fromCharCode(submission.problem + 65)}
        </Link>
      </td>
      <td>{submission?.language?.toUpperCase()}</td>
      <td
        className="text-center"
        className={
          submission.verdict == "Accepted"
            ? `font-[500] text-[#0a0]`
            : "font-[500] underline text-[#00a]"
        }
      >
        {submission?.verdict}
      </td>
      <td>{time != Infinity && !isNaN(time) && `${time}s`}</td>
      <td>{memory != Infinity && !isNaN(memory) && `${memory}KB`}</td>
    </tr>
  );
};

export default Submission;
