import React, { Children } from "react";
import { CardMedia, Paper, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { SportsRugbySharp } from "@mui/icons-material";
import { Grid } from "@mui/material";
import NormalCard from "./NormalCard";
import { height } from "@mui/system";

const styles = {
  img: {
    // max: "100%",
    // // maxHeight: 350,
  },
};

const CarouselComponent = ({ url, children }) => {
  return (
    <Carousel height={450} swipe autoPlay={false} interval={7000}>
      <div
        sx={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <img src={url} alt="" style={{ width: "100%", height: "auto" }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            background: "rgba(0,0,0,0.7)",
            width: "100%",
            height: 480,
          }}
        >
          {children}
        </div>
      </div>

      {/* <div>
        <img src={img1} alt="" style={{ width: "100%", height: "auto" }} />
      </div> */}
    </Carousel>
  );
};

export default CarouselComponent;
