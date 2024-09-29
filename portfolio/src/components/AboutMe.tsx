import { Box, Chip, styled, Typography } from "@mui/material";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import me from "../assets/me.jpeg";

const ProfileCard = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(6),
  borderRadius: "4rem",
  width: "70%",
  marginRight: "2%",
  display: "flex",
  height: "auto",
  color: "white",
  backgroundColor: "transparent",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.4)",
}));
const BackgroundOverlay = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "#605873",
  borderRadius: "4rem",
  opacity: "0.3",
  zIndex: 1,
}));

const Content = styled(Box)(() => ({
  position: "relative",
  zIndex: 2,
}));

const AboutMe = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" flexDirection="column" mt="4%">
        <Typography sx={{ fontFamily: "Handlee", fontSize: "4rem", lineHeight: "1.5" }}>
          ¡Hi, I'm Giovanna!{" "}
        </Typography>
        <Typography sx={{ fontFamily: "League Gothic", lineHeight: "1", fontSize: "6rem" }}>
          FRONTEND DEVELOPER{" "}
        </Typography>
        <Box position="relative" display="inline-block" width="100%">
          <Typography
            variant="h4"
            component="span"
            sx={{
              fontFamily: "League Gothic",
              fontSize: "6rem",
              fontWeight: "bold",
              color: "#6C63FF",
              position: "relative",
              backgroundColor: "#140B29",
              px: 1,
              zIndex: 1,
            }}
          >
            & UI DESIGNER
          </Typography>
          <Chip
            icon={<WorkHistoryIcon />}
            label="3 years"
            sx={{ backgroundColor: "#CBC3FB", color: "#705DF2" }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "35%",
              left: 0,
              width: "100%",
              height: "8px",
              backgroundColor: "#C6BBFF",
              zIndex: 0,
            }}
          />
        </Box>
      </Box>

      <Box display="flex" mt="4rem">
        <ProfileCard>
          <BackgroundOverlay />
          <Content>
            {" "}
            <Box display="flex" mt={1}>
              <img
                alt="Giovanna"
                src={me}
                style={{ borderRadius: "4rem", width: 250, height: 250, marginRight: "20px" }}
              />
              <Typography
                sx={{ fontFamily: "Manjari", fontSize: "1.5rem", ml: 2, lineHeight: "1.5" }}
              >
                As a passionate frontend developer with 2.5 years of experience, I specialize in
                creating seamless and engaging user experiences using technologies such as React,
                Next.js, TypeScript, Material-UI, and Redux, among others. My expertise lies in
                crafting dynamic, responsive interfaces that balance aesthetics with functionality.
                In addition to my technical skills, I have a solid foundation in UX/UI design,
                supported by a course in the field and hands-on experience with Figma. I am
                committed to delivering innovative solutions that not only look great but also offer
                a superior user experience, reflecting my dedication to both design and development.
              </Typography>
            </Box>
          </Content>
        </ProfileCard>
        {/* <SkillsCard>
          <BackgroundOverlay />

          <Content>
            <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
              <img src={ts} alt="ts" />
              <img src={react} alt="react" />

              <img src={redux} alt="redux" />

              <img src={mui} alt="mui" />

              <img src={figma} alt="figma" />
            </Box>
          </Content>
        </SkillsCard> */}
      </Box>
    </Box>
  );
};

export default AboutMe;
