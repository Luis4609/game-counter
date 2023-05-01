import { Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Stack from "@mui/joy/Stack";
import Team from "@/components/Team";

function GamePage() {
  const [team1, setTeam1] = useState(0);
  const [teamScore, setTeamScore] = useState(0);

  function handleChange(e: { target: { value: any } }) {
    setTeamScore(e.target.value);
  }
  return (
    <Container maxWidth="sm">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Team title="Equipo 1:"></Team>
        <Team title="Equipo 2:"></Team>
      </Stack>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
      </Stack>
    </Container>
  );
}

export default GamePage;
