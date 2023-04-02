import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Grid } from "@mui/material";
import NormalCard from "./NormalCard";

function ExampleCarousel(props) {
  var items = [
    {
      title: "CONSULTATION",
      text: "fuck me how did i end up doing this wil all my knowledge",
    },
    {
      title: "AUDITING",
      text: "fuck me how did i end up doing this wil all my knowledge",
    },
    {
      title: "SERVICES",
      text: "fuck me how did i end up doing this wil all my knowledge",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Grid container>
      <Grid item md={4} sm={10} xs={10}>
        <NormalCard title={props.item.title} text={props.item.text} />

        <Button className="CheckButton">Check it out!</Button>
      </Grid>
    </Grid>
  );
}

export default ExampleCarousel;
