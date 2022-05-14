import React from "react";
import { Passage } from "../../data";
import PassageCard from "../PassageCard";

interface Props {
  passages: Passage[];
}

const PassagesForThisWeek = ({ passages }: Props) => {
  return (
    <div>
      <h2>이번주 암송 구절</h2>

      <ul>
        {passages.map((passage) => (
          <li key={passage.address}>
            <PassageCard passage={passage} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PassagesForThisWeek;
