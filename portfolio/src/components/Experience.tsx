import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box mt={3} ml="5%">
      <Box position="relative" display="inline-block" width="100%">
        <Typography
          variant="h4"
          component="span"
          sx={{
            fontFamily: "League Gothic",
            fontSize: isMobile ? "3rem" : "4.5rem",

            fontWeight: "bold",
            color: "#FFFF",
            position: "relative",
            backgroundColor: "#140B29",
            px: 2,
            zIndex: 1,
          }}
        >
          EXPERIENCE & PROYECTS
        </Typography>
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
      <Box mt={5}>
        <Timeline>
          <TimelineItem
            sx={{
              width: "60%",
              "&::before": {
                content: "none",
              },
            }}
          >
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: "#6C63FF" }} />
              <TimelineConnector sx={{ bgcolor: "#C6BBFF" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Box mb={4}>
                <Typography
                  sx={{
                    mb: 2,
                    fontFamily: "League Gothic",
                    color: "#F3E1FF",
                    lineHeight: "1",
                    fontSize: "2.2rem",
                  }}
                >
                  FRONTEND DEVELOPER
                </Typography>
                <Typography variant="h5" mb={2}>
                  99 Minutos (Feb 2022 - Currently)
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Manjari",
                    width: isMobile ? "18rem" : "50rem",
                    fontSize: "1.2rem",
                    lineHeight: "1.5",
                  }}
                >
                  My work in the billing development area involves creating and iterating on
                  user-centered interfaces, providing the finance department with an intuitive and
                  easy-to-use interface that also offers all the necessary functionalities to
                  manage, modify, and review customer and supplier data. Some of these
                  functionalities include: search, filters, rate management, customer personal and
                  tax information, report downloads, and more.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem
            sx={{
              width: "60%",
              "&::before": {
                content: "none",
              },
            }}
          >
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: "#6C63FF" }} />
              <TimelineConnector sx={{ bgcolor: "#C6BBFF" }} />
            </TimelineSeparator>
            <TimelineContent>
              <div>
                <Typography
                  sx={{
                    fontFamily: "League Gothic",
                    color: "#F3E1FF",
                    mb: 2,
                    lineHeight: "1",
                    fontSize: "2.2rem",
                  }}
                >
                  FULLSTACK WEB DEVELOPMENT STUDENT
                </Typography>
                <Typography variant="h5" mb={2}>
                  Soy Henry (Aug 2021 - Dec 2021)
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Manjari",
                    width: isMobile ? "18rem" : "50rem",
                    fontSize: "1.2rem",
                    lineHeight: "1.5",
                  }}
                >
                  With over 800 hours of coursework, I learned to develop web applications using the
                  most in-demand technologies in the market. <br />
                  <br />
                  <strong>Pokemon App - Oct 2021 </strong> <br />
                  Developed a Single Page Application. Front-End: React and Redux Back-End: Express,
                  Node.js, and PostgreSQL. Features: Filter Pokémon by type, alphabetical order, or
                  strength. Search for Pokémon by name. Create your own Pokémon character. <br />
                  <br />
                  <strong>Henry Kids - Nov 2021 </strong> <br />
                  An educational application designed for both students and teachers, depending on
                  their registration. My Role: Front-End: React JS, CSS, Material UI, UX Responsible
                  for delivering a visually harmonious and user-friendly app. Rendering filters and
                  sorting options retrieved from the back-end.
                </Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Box>
  );
};

export default Experience;
