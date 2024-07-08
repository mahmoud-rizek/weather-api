import "./App.css";

// CUSTM MATERIAL UI THEME
import { createTheme, ThemeProvider } from "@mui/material";
import { Container, Typography } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "IBM",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          {/* CONTENT CONTAINER */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "100%",
            }}
          >
            {/* CARD */}
            <div
              dir="rtl"
              style={{
                background: "rgb(28 52 91 / 36% )",
                color: "white",
                padding: "10px",
                borderRadius: "15px",
                boxShadow: "0 11px 1px  rgba(0 ,0, 0,0.05)",
              }}
            >
              {/* CONTENT */}
              <div>
                {/* CITY & TIME */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "start",
                  }}
                  dir="rtl"
                >
                  <Typography variant="h2" style={{ marginRight: "20px" }}>
                    القاهرة
                  </Typography>
                  <Typography variant="h5" style={{ marginRight: "20px" }}>
                    الأثنين: 10-10-2024
                  </Typography>
                </div>
                {/*=== CITY & TIME ===*/}
                <hr />

                {/* CONTAINER DEGREE + CLOUD ICON*/}
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  {/*  DEGREE & DESCRIPTION */}
                  <div>
                    {/* TMP */}
                    <div>
                      <Typography variant="h1" style={{ textAlign: "right" }}>
                        38
                      </Typography>
                      {/* TODO: TEMP IMAGE */}
                    </div>
                    {/*=== TMP ===*/}

                    <Typography variant="h6">broken clouds</Typography>

                    {/* MIX & MIN */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h5>الصغرى: 30</h5>
                      <h5
                        style={{
                          margin: "0 5px",
                        }}
                      >
                        |
                      </h5>
                      <h5>الكبرى: 30</h5>
                    </div>
                    {/*=== MIX & MIN ===*/}
                  </div>
                  {/*===  DEGREE & DESCRIPTION ===*/}

                  {/* ICON */}
                  <CloudIcon style={{ color: "white", fontSize: "200px" }} />
                  {/*=== ICON ===*/}
                </div>
                {/*=== CONTAINER DEGREE + CLOUD ICON ===*/}
              </div>

              {/*=== CONTENT ===*/}
            </div>
            {/*=== CARD ===*/}
          </div>
          {/*=== CONTENT CONTAINER ===*/}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
