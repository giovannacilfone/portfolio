import { Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CV from "../CV.pdf";
import github from "../assets/contact/github.png";
import wpp from "../assets/contact/wpp.png";
import gmail from "../assets/contact/gmail.png";
import linkedin from "../assets/contact/linkedin.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Button component={Link} to={to} target="_blank" rel="noopener noreferrer">
      <Box
        sx={{
          width: isMobile ? "2rem" : "3.5rem",
          height: isMobile ? "2rem" : "3.5rem",
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box display="flex" justifyContent="space-between" padding="1rem">
      <Box
        sx={{
          ml: !isMobile ? "4%" : "0",
        }}
        display="flex"
        justifyContent="flex-start"
        color="white"
      >
        <ContactButton to="https://github.com/giovannacilfone">
          <img
            src={github}
            alt="GitHub"
            style={{ width: isMobile ? "1rem" : "2rem", height: "auto" }}
          />
        </ContactButton>
        <ContactButton to="https://wa.me/+541123882616">
          <img src={wpp} alt="Wpp" style={{ width: isMobile ? "1rem" : "2rem", height: "auto" }} />
        </ContactButton>
        <ContactButton to="mailto:giovannacilfone2@gmail.com">
          <img
            src={gmail}
            alt="Gmail"
            style={{ width: isMobile ? "1rem" : "2rem", height: "auto" }}
          />
        </ContactButton>
        <ContactButton to="https://www.linkedin.com/in/giovanna-cilfone/">
          <img
            src={linkedin}
            alt="Linkedin"
            style={{ width: isMobile ? "1rem" : "2rem", height: "auto" }}
          />
        </ContactButton>
      </Box>
      {isMobile ? (
        <>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
          <Drawer
            anchor="right"
            sx={{
              width: 250,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                bgcolor: "#291850",
                color: "#ffff",
                p: 2,
              },
            }}
            open={drawerOpen}
            onClose={handleDrawerToggle}
          >
            <IconButton onClick={handleDrawerToggle} sx={{ alignSelf: "flex-end", p: 2 }}>
              <CloseIcon />
            </IconButton>
            <List
              sx={{
                width: "250px",

                paddingTop: 0,
              }}
            >
              <ListItem component={Link} to="/" onClick={handleDrawerToggle}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem component={Link} to="/projects" onClick={handleDrawerToggle}>
                <ListItemText primary="Experience & Projects" />
              </ListItem>
              <ListItem component={Link} to="/certificates" onClick={handleDrawerToggle}>
                <ListItemText primary="Certificates" />
              </ListItem>
              <ListItem component="a" href={CV} download="CV/Giovanna-Cilfone/Frontend.pdf">
                <ListItemText primary="Download CV" />
              </ListItem>
            </List>
          </Drawer>
        </>
      ) : (
        <Box display="flex" sx={{ mr: "5%" }} justifyContent="flex-end" gap="0.5rem" color="white">
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
      )}
    </Box>
  );
};
export default NavBar;
