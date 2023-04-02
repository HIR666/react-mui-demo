import React from "react";

import { Grid, Typography, Container, Card, CardContent } from "@mui/material";
import CarouselComponent from "../components/Carousel";
import NormalCard from "../components/NormalCard";
import ExampleCarousel from "../components/ExampleCarousel";

import OpenInNewIcon from "@mui/icons-material/OpenInNew"; //put in the last card
const HomePage = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} textAlign="center">
          <CarouselComponent url="https://enhancequality.com/wp-content/uploads/2020/08/https-hd.unsplash.comphoto-1431321346354-f4ebb847aec2.jpeg">
            <Typography variant="h2" mt={7} color="white">
              Landing Page <i>Your Catchy Slogan</i>
            </Typography>
          </CarouselComponent>
        </Grid>
        <Container maxWidth={"lg"}>
          <Grid container justifySelf="center" mt={5} mb={5}>
            <Grid item md={4} sm={12} xs={12}>
              <Typography variant="h2">Engage The Experts</Typography>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Typography variant="subtitle1">
                Quality Systems Enhancement has been providing consulting,
                training, and auditing services to companies all over the world
                for more than 30 years with the goal of providing a complete
                solution to our clients for all of their excellence needs.
              </Typography>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Typography variant="p">
                Our proprietary 10-Step Approach™ to certification addresses
                each element in the standard and includes a mix of specialized
                consulting, training, and auditing. We have used this approach
                successfully registering over 800 companies with a 100% success
                rate.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid container>
        <Grid item xs={12} alignItems="center" justifyContent={"center"}>
          <CarouselComponent
            url={
              "https://cdn.discordapp.com/attachments/1083609995142254682/1083611169446694972/CTA-Home.png"
            }
          >
            <div
              style={{
                display: "flex",
                width: "70%",

                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "4%",
                padding: 10,
                justifyContent: "center",
              }}
            >
              <Typography variant={"h2"} color="white">
                Our Services
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                width: "70%",

                marginLeft: "auto",
                marginRight: "auto",
                //marginTop: "7%",
                padding: 10,
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "85%", padding: 5 }}>
                <NormalCard
                  title={"Consulting"}
                  text="When you partner with QSE for your certification needs, our team will walk you through the entire process from beginning to end"
                />
              </div>
              <div style={{ width: "85%", padding: 5 }}>
                <NormalCard
                  title={"Training"}
                  text="QSE offers training to help plan, implement, and manage risk in the certification process.  In addition other services ;)"
                />
              </div>
              <div style={{ width: "85%", padding: 5 }}>
                <NormalCard
                  title={"Auditing"}
                  text="By working with QSE to outsource your internal audits, you can spend more time focusing on growing your organization."
                />
              </div>
            </div>
          </CarouselComponent>
        </Grid>
      </Grid>
      <Container maxWidth="lg">
        <Grid container my={5}>
          <Grid item xs={12} textAlign="center">
            <Card>
              <CardContent>
                <Typography variant="h4" color="primary">
                  INDUSTRIES & STANDARDS
                </Typography>
                <Typography variant="p" mt={2}>
                  View the standards list on enhancequality.com
                  <OpenInNewIcon />
                </Typography>
              </CardContent>
            </Card>
            {/* <NormalCard
              title="INDUSTRIES & STANDARDS"
              text="View the standards list on enhancequality.com"
            /> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
