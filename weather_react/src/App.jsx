import Stack from "@mui/material/Stack";
import "./App.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";

const theme = createTheme({
  typography: {
    fontFamily: "IBM",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <Typography variant="h1" gutterBottom>
          السلام عليكم
        </Typography>
      </ThemeProvider>
    </>
  );
}

export default App;
