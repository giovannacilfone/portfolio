import { Box, Dialog, DialogContent, Typography, useMediaQuery, useTheme } from "@mui/material";
import FullStack from "../assets/certificates/FullStack.png";
import UXUI from "../assets/certificates/UXUI.png";
import PrinciplesUXUI from "../assets/certificates/principlesuxui.png";
import AdvancedReact from "../assets/certificates/advanced.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const Certificates = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: "1rem",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0.5rem",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <Box mt={3} ml="5%">
      {" "}
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
          CERTIFICATES
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
      <Box mt="10%">
        <Slider {...settings}>
          <Box
            onClick={() => handleImageClick(FullStack)}
            sx={{
              padding: "0 10px",
              width: "auto",
              height: "25rem",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <img
              src={FullStack}
              alt="UXUI"
              style={{ width: "auto", height: isMobile ? "16rem" : "25rem" }}
            />
          </Box>
          <Box
            onClick={() => handleImageClick(UXUI)}
            sx={{
              padding: "0 10px",
              width: "2rem",
              height: "25rem",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <img
              src={UXUI}
              alt="UXUI"
              style={{ width: "auto", height: isMobile ? "16rem" : "25rem" }}
            />
          </Box>
          <Box
            onClick={() => handleImageClick(PrinciplesUXUI)}
            sx={{
              padding: "0 10px",
              width: "auto",
              height: "25rem",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <img
              src={PrinciplesUXUI}
              alt="UXUI"
              style={{ width: "auto", height: isMobile ? "16rem" : "25rem" }}
            />
          </Box>
          <Box
            onClick={() => handleImageClick(AdvancedReact)}
            sx={{
              padding: "0 10px",
              width: "auto",
              height: "25rem",
              maxHeight: "40rem",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <img
              src={AdvancedReact}
              alt="UXUI"
              style={{ width: "auto", height: isMobile ? "16rem" : "25rem" }}
            />
          </Box>
        </Slider>
      </Box>
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogContent>
          <Box
            component="img"
            src={selectedImage || ""}
            alt="Selected"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Certificates;
