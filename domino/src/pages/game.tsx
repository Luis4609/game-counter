import { Container } from "@mui/material";
import Stack from "@mui/joy/Stack";
import Team from "@/components/Team";

function GamePage() {
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
      ></Stack>
    </Container>
  );
}

export default GamePage;
