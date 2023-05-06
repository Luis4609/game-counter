import TextField from "@mui/material/TextField";
import React, { SetStateAction, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Plus20Buttons from "@/components/Plus20Buttons";

function createData(teamScore: number, calories: number) {
  return { teamScore, calories };
}

const rows = [createData(0, 0)];

function NewGamePage() {
  const [score, setScore] = useState<number>(0);

  const handleChangeAmount = (event: {
    target: { value: SetStateAction<number> };
  }) => {
    if (
      Number.isNaN(event.target.value) ||
      event.target.value == undefined
    ) {
      console.error("Bad amount input");
    } else {
      setScore(score + (event.target.value as number));
    }
  };

  return (
    <div>
      <Typography>New Game</Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Team 1</TableCell>
              <TableCell>Team 2</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.teamScore}>
                <TableCell component="th" scope="row">
                  {row.teamScore}
                </TableCell>
                <TableCell>{row.calories}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell>Score: {score}</TableCell>
              <TableCell>Score: </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <TextField
                  type="number"
                  id="team1-input-score"
                  label="Team 1"
                  variant="outlined"
                  onChange={(event: any) => {
                    handleChangeAmount(event);
                  }}
                  //   fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  id="team2-input-score"
                  label="Team 2"
                  variant="outlined"
                  //   fullWidth
                />
              </TableCell>
            </TableRow>
            <Plus20Buttons></Plus20Buttons>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default NewGamePage;
