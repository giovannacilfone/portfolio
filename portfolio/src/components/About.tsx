import { Box, Typography, styled, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import me from "../assets/me.jpeg";

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

const ProfileCard = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(6),
  borderRadius: "4rem",
  marginRight: "2%",
  display: "flex",
  height: "auto",
  color: "white",
  backgroundColor: "transparent",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.4)",
}));

const Content = styled(Box)(() => ({
  position: "relative",
  zIndex: 2,
}));

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        ml: "5%",
        mr: "5%",
        flexDirection: "column",
      }}
    >
      <Box display="flex" flexDirection="column" mt="4%">
        <Typography
          sx={{ fontFamily: "Handlee", lineHeight: "1.5", fontSize: isMobile ? "2rem" : "4rem" }}
        >
          ¡Hi, I'm Giovanna!
        </Typography>
        <Typography
          sx={{
            lineHeight: "1",
            fontSize: isMobile ? "3rem" : "6rem",
            fontFamily: "League Gothic",
          }}
        >
          FRONTEND DEVELOPER
        </Typography>

        <Box position="relative" mb={5} display="inline-block" width="100%">
          <Typography
            component="span"
            variant="h4"
            sx={{
              fontFamily: "League Gothic",
              fontSize: isMobile ? "3rem" : "6rem",
              fontWeight: "bold",
              color: "#6C63FF",
              position: "relative",
              backgroundColor: "#140B29",
              zIndex: 1,
            }}
          >
            & UI DESIGNER
          </Typography>
          <Box
            sx={{
              position: "absolute",
              bottom: "35%",
              width: "100%",
              height: "1rem",
              backgroundColor: "#C6BBFF",
              zIndex: 0,
            }}
          />
        </Box>
      </Box>

      <ProfileCard sx={{ width: isMobile ? "80%" : "70%" }}>
        {!isMobile && <BackgroundOverlay />}
        <Content>
          {" "}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: isMobile ? "column" : "row",
            }}
            mt={1}
          >
            <img
              alt="Giovanna"
              src={me}
              style={{
                borderRadius: "4rem",
                width: isMobile ? 125 : 250,
                height: isMobile ? 125 : 250,
                marginBottom: isMobile ? 1 : 0,
                marginRight: "20px",
              }}
            />
            <Typography
              sx={{
                fontFamily: "Manjari",
                fontSize: isMobile ? "1rem" : "1.5rem",
                ml: 2,
                lineHeight: "1.5",
                mt: isMobile ? 3 : 0,
              }}
            >
              {isMobile
                ? "As a passionate frontend developer with 2.5 years of experience, I specialize in creating seamless and engaging user experiences using technologies such as React, Next.js, TypeScript, Material-UI, and Redux, among others. My expertise lies in crafting dynamic, responsive interfaces that balance aesthetics with functionality. In addition to my technical skills, I have a solid foundation in UX/UI design, supported by a course in the field and hands-on experience with Figma."
                : "As a passionate frontend developer with 2.5 years of experience, I specialize in creating seamless and engaging user experiences using technologies such as React, Next.js, TypeScript, Material-UI, and Redux, among others. My expertise lies in crafting dynamic, responsive interfaces that balance aesthetics with functionality. In addition to my technical skills, I have a solid foundation in UX/UI design, supported by a course in the field and hands-on experience with Figma. I am committed to delivering innovative solutions that not only look great but also offer a superior user experience, reflecting my dedication to both design and development."}
            </Typography>
          </Box>
        </Content>
      </ProfileCard>
    </Box>
  );
};

export default About;
