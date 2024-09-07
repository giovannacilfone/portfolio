import { Box, Button } from "@mui/material";
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import CV from "../CV.pdf";
import github from "../assets/contact/github.png";
import wpp from "../assets/contact/wpp.png";
import gmail from "../assets/contact/gmail.png";
import linkedin from "../assets/contact/linkedin.png";

interface NavButtonProps {
  to: string;
  isActive: boolean;
  children: ReactNode;
}
interface ContactButtonProps {
  to: string;
  children: ReactNode;
}

const NavButton = ({ to, isActive, children }: NavButtonProps) => {
  return (
    <Button
      sx={{
        color: "white",
        fontFamily: "League Gothic",
        fontSize: "2rem",
        lineHeight: "1.5",
        backgroundColor: isActive ? "#6C63FF" : "transparent",
        borderRadius: isActive ? "3rem" : "0",
        padding: "0.5rem 1.5rem",
        transition: "all 0.5s ease",
      }}
      variant="text"
      component={Link}
      to={to}
    >
      {children}
    </Button>
  );
};
const ContactButton = ({ to, children }: ContactButtonProps) => {
  return (
    <Button component={Link} to={to} target="_blank" rel="noopener noreferrer">
      <Box
        sx={{
          width: "3.5rem",
          height: "3.5rem",
          borderRadius: "50%",
          border: "3px solid #705DF2",
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 0,
        }}
      >
        {children}
      </Box>
    </Button>
  );
};
const NavBar = () => {
  const location = useLocation();
  return (
    <Box display="flex" justifyContent="space-between">
      <Box
        display="flex"
        justifyContent="flex-start"
        gap="20px"
        mt={3}
        marginRight="2%"
        color="white"
      >
        <ContactButton to="https://github.com/giovannacilfone">
          <img src={github} alt="GitHub" style={{ width: "2rem", height: "auto" }} />
        </ContactButton>
        <ContactButton to="https://wa.me/+541123882616">
          <img src={wpp} alt="Wpp" style={{ width: "2rem", height: "auto" }} />
        </ContactButton>
        <ContactButton to="mailto:giovannacilfone2@gmail.com">
          <img src={gmail} alt="Gmail" style={{ width: "2rem", height: "auto" }} />
        </ContactButton>
        <ContactButton to="https://www.linkedin.com/in/giovanna-cilfone/">
          <img src={linkedin} alt="Linkedin" style={{ width: "2rem", height: "auto" }} />
        </ContactButton>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        gap="0.5rem"
        mt={3}
        marginRight="2%"
        color="white"
      >
        <NavButton to="/" isActive={location.pathname === "/"}>
          Home
        </NavButton>
        <NavButton to="/projects" isActive={location.pathname === "/projects"}>
          Experience & Projects
        </NavButton>
        <NavButton to="/certificates" isActive={location.pathname === "/certificates"}>
          Certificates
        </NavButton>
        <Button
          sx={{
            color: "white",
            fontFamily: "League Gothic",
            fontSize: "2rem",
            lineHeight: "1.5",
            borderRadius: "3rem",
            transition: "all 0.5s ease",
          }}
          href={CV}
          download="CV/Giovanna-Cilfone/Frontend.pdf"
          startIcon={<DownloadIcon />}
        >
          CV
        </Button>
      </Box>
    </Box>
  );
};

export default NavBar;
