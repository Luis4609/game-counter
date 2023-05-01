import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Box from "@mui/joy/Box";

interface Team {
  title: string;
}

function Team({ title }: Team) {
  const [teamScore, setTeamScore] = useState<number>(0);

  function handleChange(e: { target: { value: any } }) {
    setTeamScore(e.target.value);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setTeamScore(() => teamScore + 20);
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        useFlexGap
        flexWrap="wrap"
      >
        <Typography>{title}</Typography>
        <Input
          type="number"
          slotProps={{
            input: {
              min: 0,
              max: 200,
            },
          }}
          color="neutral"
          size="md"
          placeholder="Type in here…"
          variant="solid"
          onChange={handleChange}
          value={teamScore}
        />
        <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
          <Typography>Score: {teamScore}</Typography>
        </Box>
        <Button type="submit" variant="outlined">
          +20!!
        </Button>
      </Stack>
    </form>
  );
}

export default Team;
