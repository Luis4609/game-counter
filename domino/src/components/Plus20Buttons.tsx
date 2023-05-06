import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

function Plus20Buttons() {
  return (
    <>
      <TableRow>
        <TableCell>
          <Button variant="outlined">+ 20</Button>
        </TableCell>
        <TableCell>
          <Button variant="outlined">+ 20</Button>
        </TableCell>
      </TableRow>
    </>
  );
}

export default Plus20Buttons;
