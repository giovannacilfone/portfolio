import { Box, Button, Chip, Divider, Typography, useMediaQuery, styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import me from "../assets/me.jpeg";
import redux from "../assets/redux.png";
import react from "../assets/react.png";
import figma from "../assets/figma.png";
import ts from "../assets/ts.png";
import mui from "../assets/mui.png";
import { Link } from "react-router-dom";
const BackgroundOverlay = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "#605873",
  borderRadius: "4rem",
  opacity: "0.2",
  zIndex: 1,
}));

const Content = styled(Box)(() => ({
  position: "relative",
  zIndex: 2,
}));

const About = () => {
  const theme = useTheme();
  // const isCustomMobile = () => {
  //   return window.innerWidth === 1024 && window.innerHeight === 768;
  // };
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mt: isMobile ? "10%" : "6%",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: isMobile ? "100%" : "50%",
          ml: "5%",
          mr: isMobile ? 0 : "2rem",
        }}
      >
        <img
          alt="Giovanna"
          src={me}
          style={{
            borderRadius: "10rem",
            border: "5px solid #705DF2",
            width: isMobile ? 100 : 150,
            height: isMobile ? 100 : 150,
            marginBottom: "1rem",
            marginRight: isMobile ? 0 : "2rem",
          }}
        />

        <Typography
          sx={{
            fontFamily: "Handlee",
            lineHeight: "1.5",
            textAlign: "center",
            mb: 3,
            fontSize: isMobile ? "1.5rem" : "3rem",
          }}
        >
          ¡Hi, I'm Giovanna!
        </Typography>

        <Typography
          sx={{
            lineHeight: 0.5,
            fontSize: isMobile ? "2.5rem" : "6rem",
            fontFamily: "League Gothic",
            color: "#FFFF",
          }}
        >
          FRONTEND DEVELOPER
        </Typography>

        <Box mb={5} display="flex" alignItems="center" justifyContent="space-between" gap={2}>
          <Typography
            sx={{
              fontFamily: "League Gothic",
              fontSize: isMobile ? "2.5rem" : "6rem",
              fontWeight: "bold",
              color: "#6C63FF",
            }}
          >
            & UI DESIGNER
          </Typography>
          <Chip
            icon={<WorkHistoryIcon color="success" sx={{ color: "#705DF2" }} />}
            label="3 YEARS"
            sx={{
              fontFamily: "League Gothic",
              backgroundColor: "#FFFF",
              fontSize: isMobile ? "1rem" : "1.6rem",
              padding: isMobile ? 0.5 : 2.5,
              fontWeight: "bold",
              height: isMobile ? "auto" : "3rem",
              color: "#705DF2",
            }}
          />
        </Box>
      </Box>
      <Divider
        orientation={isMobile ? "horizontal" : "vertical"}
        flexItem
        sx={{
          borderColor: "#705DF2",
          bgcolor: "#705DF2",
          borderWidth: isMobile ? "2px" : "4px",
          height: isMobile ? "auto" : "30rem",
          width: isMobile ? "100%" : "0.1rem",
          mb: isMobile ? "1rem" : 0,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          width: "50%",
          justifyContent: "center",
          mt: 0,
        }}
      >
        <Box
          sx={{
            width: isMobile ? "20rem" : "50rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 5,
          }}
        >
          <Box
            sx={{
              position: "relative",
              padding: theme.spacing(3),
              borderRadius: "4rem",
              width: isMobile ? "16rem" : "25rem",
              display: "flex",
              height: isMobile ? "1rem" : "2rem",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              backgroundColor: "transparent",
              boxShadow: "0px 4px 20px rgba(0, 0, 0,1",
            }}
          >
            <BackgroundOverlay />

            <Content>
              <Box display="flex" flexDirection="row" alignItems="center" gap={isMobile ? 3 : 5}>
                <img
                  src={ts}
                  alt="ts"
                  style={{ width: isMobile ? "2rem" : "3rem", height: isMobile ? "2rem" : "3rem" }}
                />
                <img
                  src={react}
                  alt="react"
                  style={{ width: isMobile ? "2rem" : "3rem", height: isMobile ? "2rem" : "3rem" }}
                />

                <img
                  src={redux}
                  alt="redux"
                  style={{ width: isMobile ? "2rem" : "3rem", height: isMobile ? "2rem" : "3rem" }}
                />

                <img
                  src={mui}
                  alt="mui"
                  style={{ width: isMobile ? "2rem" : "3rem", height: isMobile ? "2rem" : "3rem" }}
                />

                <img
                  src={figma}
                  alt="figma"
                  style={{
                    width: isMobile ? "1.5rem" : "2rem",
                    height: isMobile ? "2rem" : "3rem",
                  }}
                />
              </Box>
            </Content>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Typography
              sx={{
                fontFamily: "Manjari",
                fontSize: isMobile ? "1.5rem" : "2.2rem",
                ml: isMobile ? 0 : "2rem",
                textAlign: "center",
                color: "#FFFF",
              }}
            >
              {/* Diseñando soluciones digitales y desarrollando productos que simplifican la vida de los
          usuarios. */}
              Designing digital solutions and developing products that simplify users' lives.
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="https://www.linkedin.com/in/giovanna-cilfone/"
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<RocketLaunchIcon sx={{ color: "#FFFF" }} />}
              sx={{
                backgroundColor: "#705DF2",
                borderRadius: "5rem",
                color: "#FFFF",
                fontSize: isMobile ? "1rem" : "2rem",
                fontWeight: "bold",
                mt: 2,
                letterSpacing: "0.rem",
                fontFamily: "League Gothic",
              }}
            >
              Let's talk
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
