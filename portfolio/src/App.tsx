import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          flexDirection: "column",
          height: "100vh",
          ml: "10%",
          mr: "8%",
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Experience />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
