import React from "react";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

interface Scores {
  scoreTeam1: number;
  scoreTeam2: number;
}

function TeamScore({ scoreTeam1, scoreTeam2 }: Scores) {
  return (
    <>
      <TableRow>
        <TableCell>Score: {scoreTeam1}</TableCell>
        <TableCell>Score: {scoreTeam2}</TableCell>
      </TableRow>
    </>
  );
}

export default TeamScore;
